const nodemailer = require("nodemailer");

async function main() {
    // Creation of one-time test account (no real credentials needed)
    const testAccount = await nodemailer.createTestAccount();

    // Creation of transporter using the Ethereal SMTP
    const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure, // true for 465, false for other ports
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    // Composition of the email
    const info = await transporter.sendMail({
        from: '"Node Checkpoint" <no-reply@example.com>',
        to: "your-email@example.com",
        subject: "Hello from Node.js (Ethereal Test)",
        text: "This is a plain text body.",
        html: "<h2>Hello from Node.js</h2><p>This is a test email using Nodemailer + Ethereal.</p>",
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);