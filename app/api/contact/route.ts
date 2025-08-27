import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Log the message for now (always works)
    console.log('📧 New contact form submission:')
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${message}`)
    console.log('---')

    // Email sending functionality with enhanced debugging
    let emailSent = false
    try {
      // Check if all environment variables are available
      const emailHost = process.env.EMAIL_HOST
      const emailUser = process.env.EMAIL_USER
      const emailPass = process.env.EMAIL_PASS

      console.log('🔍 Environment check:')
      console.log('EMAIL_HOST:', emailHost ? 'Set' : 'Missing')
      console.log('EMAIL_USER:', emailUser ? 'Set' : 'Missing')
      console.log('EMAIL_PASS:', emailPass ? 'Set' : 'Missing')

      if (emailHost && emailUser && emailPass) {
        console.log('🚀 Attempting to send email...')
        
        const transporter = nodemailer.createTransport({
          host: emailHost,
          port: 587,
          secure: false,
          auth: {
            user: emailUser,
            pass: emailPass,
          },
          tls: {
            rejectUnauthorized: false
          }
        })

        // Verify transporter
        await transporter.verify()
        console.log('✅ SMTP connection verified')

        // Send email
        const info = await transporter.sendMail({
          from: `"Portfolio Contact" <${emailUser}>`,
          to: 'tillarikamalsai@gmail.com',
          replyTo: email,
          subject: `Portfolio Contact: ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              <div style="background: white; padding: 20px; border-left: 4px solid #007bff;">
                <h3>Message:</h3>
                <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          `,
        })

        console.log('✅ Email sent successfully:', info.messageId)
        emailSent = true
      } else {
        console.log('⚠️ Email environment variables not configured')
      }
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError)
      // Continue without failing the request
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: emailSent 
          ? 'Thank you for your message! Email sent successfully - I\'ll get back to you soon.' 
          : 'Thank you for your message! It has been logged - I\'ll get back to you soon.',
        emailSent: emailSent
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
