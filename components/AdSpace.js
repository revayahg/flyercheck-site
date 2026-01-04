function AdSpace() {
    try {
        return (
            <div className="ad-space" data-name="ad-space">
                Google AdSense Ad Space
            </div>
        );
    } catch (error) {
        console.error('AdSpace component error:', error);
        reportError(error);
        return null;
    }
}
