const fs = require("fs");
const path = require("path");

// Create welcome.txt with "Hello Node"
const welcomePath = path.join(__dirname, "welcome.txt");
fs.writeFileSync(welcomePath, "Hello Node", "utf8");
console.log("Created welcome.txt with content: 'Hello Node'");

// Read hello.txt (create it if it doesn't exist)
const helloPath = path.join(__dirname, "hello.txt");
if (!fs.existsSync(helloPath)) {
    fs.writeFileSync(helloPath, "Hello from hello.txt", "utf8");
    console.log("hello.txt did not exist. Created it with default content.");
}

// Read and log its content
const data = fs.readFileSync(helloPath, "utf8");
console.log("Content of hello.txt:", data);