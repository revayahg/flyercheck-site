function FileUploader() {
    try {
        const [file, setFile] = React.useState(null);
        const [filePreview, setFilePreview] = React.useState(null);
        const [message, setMessage] = React.useState(null);
        const [isSuccess, setIsSuccess] = React.useState(false);
        const [selectedAudience, setSelectedAudience] = React.useState('');
        const [selectedCategories, setSelectedCategories] = React.useState([]);
        const [isAnalyzing, setIsAnalyzing] = React.useState(false);
        const [analysisResults, setAnalysisResults] = React.useState(null);
        const [isDragging, setIsDragging] = React.useState(false);
        const messageRef = React.useRef(null);
        const resultsRef = React.useRef(null);
        const fileInputRef = React.useRef(null);

        // Scroll to results when analysis completes successfully, or to message on error
        React.useEffect(() => {
            if (!isAnalyzing) {
                if (analysisResults) {
                    // Scroll to results when analysis is complete
                    setTimeout(() => {
                        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                } else if (message && !isSuccess) {
                    // Scroll to error message if there's an error
                    setTimeout(() => {
                        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        }, [analysisResults, isAnalyzing, message, isSuccess]);

        // Process file after selection/paste/drop
        const processFile = (file) => {
            const result = analyzeFlyer(file);
            setMessage(result.message);
            setIsSuccess(result.success);
            if (result.success) {
                setFile(file);
                setAnalysisResults(null);
                
                // Create preview URL
                const reader = new FileReader();
                reader.onload = (e) => {
                    setFilePreview(e.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        // Handle clipboard paste
        React.useEffect(() => {
            const handlePaste = async (e) => {
                const items = e.clipboardData?.items;
                if (!items) return;

                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item.type.indexOf('image') !== -1) {
                        e.preventDefault();
                        const blob = item.getAsFile();
                        if (blob) {
                            // Convert blob to File object
                            const file = new File([blob], 'pasted-image.png', { type: blob.type });
                            processFile(file);
                        }
                        break;
                    }
                }
            };

            window.addEventListener('paste', handlePaste);
            return () => {
                window.removeEventListener('paste', handlePaste);
            };
        }, []);

        const handleUploadClick = () => {
            fileInputRef.current.click();
        };

        const handleFileChange = (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                processFile(selectedFile);
            }
        };

        // Drag and drop handlers
        const handleDragEnter = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(true);
        };

        const handleDragLeave = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
        };

        const handleDragOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };

        const handleDrop = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            const files = e.dataTransfer.files;
            if (files && files.length > 0) {
                const droppedFile = files[0];
                processFile(droppedFile);
            }
        };

        const handleRemoveFile = () => {
            setFile(null);
            setFilePreview(null);
            setSelectedCategories([]);
            setSelectedAudience('');
            setAnalysisResults(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        };

        const handleAnalyze = async () => {
            if (!file) {
                setMessage('Please upload a flyer before analyzing.');
                setIsSuccess(false);
                messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
            if (!selectedAudience) {
                setMessage('Please select a target audience before analyzing.');
                setIsSuccess(false);
                messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
            if (!selectedCategories || selectedCategories.length === 0) {
                setMessage('Please select at least one event category before analyzing.');
                setIsSuccess(false);
                messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
            
            setIsAnalyzing(true);
            setMessage('Analyzing your flyer... This may take a moment.');
            setIsSuccess(false);
            
            try {
                // Check if analysis service is available
                if (typeof window.analyzeFlyerWithAI === 'undefined') {
                    throw new Error('Analysis service not loaded. Please refresh the page.');
                }
                
                const result = await window.analyzeFlyerWithAI(file, selectedAudience, selectedCategories);
                
                if (result.success) {
                    setAnalysisResults(result.analysis);
                    setMessage('Analysis complete!');
                    setIsSuccess(true);
                } else {
                    // Display the error message from the API (already user-friendly)
                    let errorMsg = result.error || 'Analysis failed. Please try again.';
                    
                    // Add additional context for common errors
                    if (errorMsg.includes('PDF') && file.type === 'application/pdf') {
                        errorMsg = 'PDF files are not directly supported. Please convert your PDF to an image (JPG or PNG) first. You can take a screenshot of the PDF or use an online PDF-to-image converter.';
                    } else if (errorMsg.includes('413') || errorMsg.includes('too large')) {
                        errorMsg = 'File too large. Maximum size is 3MB. The image will be automatically compressed, but if it\'s still too large, please use a smaller file.';
                    } else if (errorMsg.includes('temporarily unavailable')) {
                        errorMsg += ' If this continues, please try again later.';
                    }
                    
                    setMessage(errorMsg);
                    setIsSuccess(false);
                }
            } catch (error) {
                console.error('Analysis error:', error);
                setMessage(error.message || 'An error occurred during analysis. Please try again.');
                setIsSuccess(false);
            } finally {
                setIsAnalyzing(false);
            }
            
            // Scroll to appropriate location after state updates
            React.useEffect(() => {
                if (analysisResults && !isAnalyzing) {
                    // Scroll to results when analysis is complete
                    setTimeout(() => {
                        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                } else if (message && !isSuccess && !isAnalyzing) {
                    // Scroll to error message if there's an error
                    setTimeout(() => {
                        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }, [analysisResults, isAnalyzing, message, isSuccess]);
        };

        return (
            <div className="file-uploader-section" data-name="file-uploader-section">
                <div className="container mx-auto px-4">
                    <div className="file-uploader" data-name="file-uploader">
                        {message && !isAnalyzing && (
                            <div 
                                ref={messageRef}
                                className={`message ${isSuccess ? 'success-message' : 'error-message'}`}
                                data-name="message"
                            >
                                {message}
                            </div>
                        )}

                        {!filePreview ? (
                        <div 
                            className={`upload-zone ${isDragging ? 'dragging' : ''}`}
                            onClick={handleUploadClick}
                            onDragEnter={handleDragEnter}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            data-name="upload-zone"
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".jpg,.jpeg,.png,.avif,.heic,.heif,.webp"
                                className="file-input"
                                data-name="file-input"
                            />
                            <i className="fas fa-cloud-upload-alt text-4xl mb-4"></i>
                            <p className="text-lg mb-2">Drop your flyer here or click to upload</p>
                            <p className="text-sm text-gray-500">Supported formats: JPG, PNG, AVIF, HEIC, WEBP (Max 3MB - images will be automatically compressed)</p>
                            <p className="text-xs text-amber-600 mt-1">Note: PDFs need to be converted to images first (take a screenshot or use a PDF-to-image converter)</p>
                        </div>
                        ) : (
                            <div className="file-preview-container">
                                <div className="file-preview-header">
                                    <h4 className="preview-title">Uploaded Flyer</h4>
                                    <button 
                                        className="remove-file-btn"
                                        onClick={handleRemoveFile}
                                        title="Remove file"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="file-preview">
                                    {file.type.startsWith('image/') ? (
                                        <img 
                                            src={filePreview} 
                                            alt="Flyer preview" 
                                            className="preview-image"
                                        />
                                    ) : (
                                        <div className="preview-pdf">
                                            <i className="fas fa-file-pdf text-6xl mb-4"></i>
                                            <p className="preview-filename">{file.name}</p>
                                        </div>
                                    )}
                                </div>
                        </div>
                        )}

                        {!filePreview && (
                            <div className="what-we-look-for">
                                <h3 className="what-we-look-for-title">What we look for</h3>
                                <div className="what-we-look-for-grid">
                                    <div className="what-we-look-for-item">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Text readability</span>
                                    </div>
                                    <div className="what-we-look-for-item">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Crowd visibility</span>
                                    </div>
                                    <div className="what-we-look-for-item">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Branding consistency</span>
                                    </div>
                                    <div className="what-we-look-for-item">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Contrast issues</span>
                                    </div>
                                    <div className="what-we-look-for-item">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Information hierarchy</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {filePreview && !isAnalyzing && (
                            <>
                                <EventCategorySelector
                                    selectedCategories={selectedCategories}
                                    onCategoryChange={setSelectedCategories}
                                />

                        <TargetAudienceSelector
                            selectedAudience={selectedAudience}
                            onAudienceChange={setSelectedAudience}
                        />

                        <button 
                            className="analyze-button"
                            onClick={handleAnalyze}
                                    disabled={isAnalyzing || selectedCategories.length === 0 || !selectedAudience}
                            data-name="analyze-button"
                        >
                                    <i className="fas fa-magic"></i>
                                    <span>Analyze Flyer</span>
                        </button>
                            </>
                        )}

                        {isAnalyzing && (
                            <div className="analyzing-overlay">
                                <div className="analyzing-content">
                                    <div className="spinner"></div>
                                    <h3 className="analyzing-title">Analyzing Your Flyer</h3>
                                    <p className="analyzing-subtitle">This may take 15-30 seconds. Please wait...</p>
                                    <div className="analyzing-steps">
                                        <div className="step active">
                                            <i className="fas fa-check-circle"></i>
                                            <span>Extracting text</span>
                                        </div>
                                        <div className="step active">
                                            <i className="fas fa-check-circle"></i>
                                            <span>Analyzing design</span>
                                        </div>
                                        <div className="step">
                                            <i className="fas fa-circle"></i>
                                            <span>Generating feedback</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {analysisResults && !isAnalyzing && (
                            <div ref={resultsRef} data-name="analysis-results-container">
                                <AnalysisResults analysis={analysisResults} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('FileUploader component error:', error);
        reportError(error);
        return null;
    }
}
