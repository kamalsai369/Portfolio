// Test script to verify email configuration
// Run this with: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🧪 Testing email configuration...');
  console.log('Email Host:', process.env.EMAIL_HOST);
  console.log('Email User:', process.env.EMAIL_USER);
  console.log('Email Pass:', process.env.EMAIL_PASS ? '***configured***' : 'NOT SET');

  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('❌ Email environment variables not properly configured');
    console.log('Please check your .env.local file');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!');

    // Send test email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'tillarikamalsai@gmail.com',
      subject: '🧪 Portfolio Contact Form Test',
      html: `
        <h3>Email Configuration Test</h3>
        <p>✅ Your email setup is working correctly!</p>
        <p>Contact form emails will now be delivered to this address.</p>
        <p><em>Time: ${new Date().toLocaleString()}</em></p>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.log('❌ Email test failed:', error.message);
    if (error.message.includes('Invalid login')) {
      console.log('💡 Tip: Make sure you\'re using an App Password, not your regular Gmail password');
    }
  }
}

testEmail();
