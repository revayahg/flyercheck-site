// Blocked path handler - returns 404 for development files and internal paths
// This endpoint handles blocked paths that shouldn't be publicly accessible
module.exports = async (req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
};
