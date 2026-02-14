const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP server address
    port: 587, // Replace with your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'your_email@example.com', // Replace with your email
        pass: 'your_password' // Replace with your email password
    }
});

// Function to send order confirmation email
function sendOrderConfirmation(to, orderDetails) {
    const mailOptions = {
        from: 'your_email@example.com', // Replace with your email
        to: to,
        subject: 'Order Confirmation',
        html: `<h1>Order Confirmation</h1><p>Your order #${orderDetails.id} has been confirmed.</p>`
    };

    return transporter.sendMail(mailOptions);
}

// Function to send shipment update email
function sendShipmentUpdate(to, shipmentDetails) {
    const mailOptions = {
        from: 'your_email@example.com', // Replace with your email
        to: to,
        subject: 'Shipment Update',
        html: `<h1>Shipment Update</h1><p>Your order #${shipmentDetails.id} has been shipped.</p>`
    };

    return transporter.sendMail(mailOptions);
}

// Function to send welcome email
function sendWelcomeEmail(to, userName) {
    const mailOptions = {
        from: 'your_email@example.com', // Replace with your email
        to: to,
        subject: 'Welcome!',
        html: `<h1>Welcome to Our Service</h1><p>Hello ${userName}, welcome to our platform!</p>`
    };

    return transporter.sendMail(mailOptions);
}

module.exports = { sendOrderConfirmation, sendShipmentUpdate, sendWelcomeEmail };