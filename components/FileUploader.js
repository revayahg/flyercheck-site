function FileUploader() {
    try {
        const [file, setFile] = React.useState(null);
        const [filePreview, setFilePreview] = React.useState(null);
        const [message, setMessage] = React.useState(null);
        const [isSuccess, setIsSuccess] = React.useState(false);
        const [selectedAudience, setSelectedAudience] = React.useState('');
        const [selectedCategory, setSelectedCategory] = React.useState('');
        const [isAnalyzing, setIsAnalyzing] = React.useState(false);
        const [analysisResults, setAnalysisResults] = React.useState(null);
        const messageRef = React.useRef(null);
        const fileInputRef = React.useRef(null);

        const handleUploadClick = () => {
            fileInputRef.current.click();
        };

        const handleFileChange = (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                const result = analyzeFlyer(selectedFile);
                setMessage(result.message);
                setIsSuccess(result.success);
                if (!result.success) {
                    messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setFile(null);
                    setFilePreview(null);
                } else {
                    setFile(selectedFile);
                    setAnalysisResults(null); // Reset previous analysis
                    
                    // Create preview URL
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        setFilePreview(e.target.result);
                    };
                    reader.readAsDataURL(selectedFile);
                }
            }
        };

        const handleRemoveFile = () => {
            setFile(null);
            setFilePreview(null);
            setSelectedCategory('');
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
            if (!selectedCategory) {
                setMessage('Please select an event category before analyzing.');
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
                
                const result = await window.analyzeFlyerWithAI(file, selectedAudience, selectedCategory);
                
                if (result.success) {
                    setAnalysisResults(result.analysis);
                    setMessage('Analysis complete!');
                    setIsSuccess(true);
                } else {
                    setMessage(result.error || 'Analysis failed. Please try again.');
                    setIsSuccess(false);
                }
            } catch (error) {
                console.error('Analysis error:', error);
                setMessage(error.message || 'An error occurred during analysis. Please try again.');
                setIsSuccess(false);
            } finally {
                setIsAnalyzing(false);
                messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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
                                className="upload-zone" 
                                onClick={handleUploadClick}
                                data-name="upload-zone"
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    className="file-input"
                                    data-name="file-input"
                                />
                                <i className="fas fa-cloud-upload-alt text-4xl mb-4"></i>
                                <p className="text-lg mb-2">Drop your flyer here or click to upload</p>
                                <p className="text-sm text-gray-500">Supported formats: JPG, PNG, PDF</p>
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

                        {filePreview && !isAnalyzing && (
                            <>
                                <EventCategorySelector
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={setSelectedCategory}
                                />

                                <TargetAudienceSelector
                                    selectedAudience={selectedAudience}
                                    onAudienceChange={setSelectedAudience}
                                />

                                <button 
                                    className="analyze-button"
                                    onClick={handleAnalyze}
                                    disabled={isAnalyzing || !selectedCategory || !selectedAudience}
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
                            <AnalysisResults analysis={analysisResults} />
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
