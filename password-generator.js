const generator = require("generate-password");

// generate a strong password
const password = generator.generate({
    length: 14,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true, // ensures at least one character from each selected pool
});

console.log("Generated password:", password);

// Generate multiple if i want:
const multiple = generator.generateMultiple(3, {
    length: 12,
    numbers: true,
});
console.log("More passwords:", multiple);