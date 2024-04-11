const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the content type based on the file extension
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        // Add more MIME types as needed
    };

    // Parse the URL to get the file path
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Serve index.html by default
    }

    // Get the file extension
    const extname = path.extname(filePath);

    // Check if the requested file exists
    fs.exists(filePath, (exists) => {
        if (exists) {
            // Read the file
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end(`Server Error: ${err}`);
                } else {
                    // Set the appropriate content type
                    res.writeHead(200, { 'Content-Type': contentType[extname] || 'text/plain' });
                    // Send the file data as the response
                    res.end(data);
                }
            });
        } else {
            // File not found
            res.writeHead(404);
            res.end('File Not Found');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
