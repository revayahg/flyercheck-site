// Accept larger camera/export uploads; client compresses before the API call.
// Hard payload limit (~3MB) lives in flyerAnalysisService (Vercel 4.5MB body cap).
export const MAX_UPLOAD_SIZE = 15 * 1024 * 1024; // 15MB

const MIME_BY_EXTENSION = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    heic: "image/heic",
    heif: "image/heif",
    pdf: "application/pdf",
};

/** Browsers often leave image/heic and some JPEG exports with a blank MIME type. */
export function resolvedMime(file) {
    const raw = (file?.type || "").toLowerCase().split(";")[0].trim();
    if (raw === "image/jpg" || raw === "image/pjpeg" || raw === "image/x-citrix-jpeg") return "image/jpeg";
    if (raw === "image/x-png" || raw === "image/x-citrix-png") return "image/png";
    if (raw) return raw;
    const ext = (file?.name || "").toLowerCase().split(".").pop();
    return MIME_BY_EXTENSION[ext] || "";
}

export function fileWithResolvedMime(file) {
    const type = resolvedMime(file);
    if (!file || !type || type === file.type) return file;
    return new File([file], file.name || "flyer", { type, lastModified: file.lastModified });
}

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
        const fileType = resolvedMime(file);

        if (!validFormats.includes(fileType)) {
            if (fileType === 'application/pdf') {
                throw new Error('PDF files are not supported. Please convert your PDF to an image (JPG or PNG) first.');
            }
            if (fileType === 'image/heic' || fileType === 'image/heif' || fileType === 'image/x-heic' || fileType === 'image/x-heif') {
                throw new Error('iPhone HEIC photos can’t be analyzed directly. Export or save the flyer as a JPEG or PNG, then upload that file.');
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
