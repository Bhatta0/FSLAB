const fs = require('fs');

fs.writeFile('welcome.txt', 'Welcome to Node.js', (err) => {
    if (err) throw err;

    console.log("File written successfully");

    // Read the file content
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log("File content:\n", data);
    });
});
