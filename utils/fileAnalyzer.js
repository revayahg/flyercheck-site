// Security: Maximum file size (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

function analyzeFlyer(file) {
    try {
        if (!file) {
            throw new Error('Please upload a flyer before analyzing.');
        }

        // Security: Validate file size
        if (file.size > MAX_FILE_SIZE) {
            throw new Error('File too large. Maximum size is 10MB.');
        }

        // Security: Validate file type
        const validFormats = ['image/jpeg', 'image/png', 'application/pdf'];
        const fileType = file.type;

        if (!validFormats.includes(fileType)) {
            throw new Error('File format not supported. Please upload JPG, PNG, or PDF files.');
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
