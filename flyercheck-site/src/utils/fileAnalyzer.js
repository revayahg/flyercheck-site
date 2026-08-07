// Accept larger camera/export uploads; client compresses before the API call.
// Hard payload limit (~3MB) lives in flyerAnalysisService (Vercel 4.5MB body cap).
export const MAX_UPLOAD_SIZE = 15 * 1024 * 1024; // 15MB

export function analyzeFlyer(file) {
    try {
        if (!file) {
            throw new Error('Please upload a flyer before analyzing.');
        }

        if (file.size > MAX_UPLOAD_SIZE) {
            const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
            throw new Error(
                `File too large (${fileSizeMB}MB). Maximum upload size is 15MB. Please use a smaller image.`
            );
        }

        const validFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        const fileType = file.type;

        if (!validFormats.includes(fileType)) {
            if (fileType === 'application/pdf') {
                throw new Error('PDF files are not supported. Please convert your PDF to an image (JPG or PNG) first.');
            }
            throw new Error('File format not supported. Please upload PNG, JPEG, or WEBP files.');
        }

        return {
            success: true,
            message: 'File uploaded. Starting analysis…',
            file: file
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            file: null
        };
    }
}
