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

        // Security: Validate file type
        // Note: PDFs are not supported by OpenAI Vision API, so we don't include them
        const validFormats = [
            'image/jpeg', 
            'image/jpg', 
            'image/png', 
            'image/avif',
            'image/heic',
            'image/heif',
            'image/webp'
        ];
        const fileType = file.type;

        // Handle HEIC/HEIF which may have different MIME types
        const fileName = file.name?.toLowerCase() || '';
        const isHeic = fileName.endsWith('.heic') || fileName.endsWith('.heif') || 
                      fileType === 'image/heic' || fileType === 'image/heif' ||
                      fileType === 'image/x-heic' || fileType === 'image/x-heif';

        if (!validFormats.includes(fileType) && !isHeic) {
            if (fileType === 'application/pdf') {
                throw new Error('PDF files are not directly supported. Please convert your PDF to an image (JPG or PNG) first. You can take a screenshot of the PDF or use an online PDF-to-image converter.');
            }
            throw new Error('File format not supported. Please upload JPG, PNG, AVIF, HEIC, or WEBP files.');
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
