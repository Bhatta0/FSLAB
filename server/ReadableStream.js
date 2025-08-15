const fs = require('fs');

const readableStream = fs.createReadStream('data.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log("Chunk received:\n", chunk);
});

// Benefit of streams: Reads data in chunks, not whole file at once → saves memory for large files
