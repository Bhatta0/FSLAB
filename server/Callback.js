const fs = require('fs');

// Function to add two numbers and return via callback
function add(a, b, callback) {
    const sum = a + b;
    callback(sum);
}

// Chain another callback to multiply by 10 and log
add(5, 3, (sum) => {
    const multiplied = sum * 10;
    console.log("After multiplying by 10:", multiplied);

    // Read file info.txt
    fs.readFile('info.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
        } else {
            console.log("File contents:\n", data);
        }
    });
});
