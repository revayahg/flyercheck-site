// Security: Maximum file size (3MB to stay under Vercel's 4.5MB request limit)
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB

export function analyzeFlyer(file) {
    try {
        if (!file) {
            throw new Error('Please upload a flyer before analyzing.');
        }

        // Security: Validate file size
        if (file.size > MAX_FILE_SIZE) {
            const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
            throw new Error(`File too large (${fileSizeMB}MB). Maximum size is 3MB. Please compress your image or use a smaller file.`);
        }

        // Security: Validate file type (PNG, JPEG, WEBP only - matches upload constraints)
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
            message: 'File successfully uploaded! Now you can analyze it.',
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
