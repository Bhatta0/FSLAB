// Create buffer
let buffer = Buffer.from("Node.js");
console.log("Hexadecimal form:", buffer.toString('hex'));

// Modify first letter
buffer[0] = 'C'.charCodeAt(0);
console.log("Modified buffer:", buffer.toString());
