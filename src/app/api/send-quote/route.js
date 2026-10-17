import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const data = await req.json()
    const { name, email, phone, company, service, budget, timeline, message } = data

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Project Quote Request from ${name}`,
      html: `
        <h2>New Project Quote Request</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:600px; font-family:Arial,sans-serif;">
          <tr><td><strong>Name</strong></td><td>${name || 'N/A'}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email || 'N/A'}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || 'N/A'}</td></tr>
          <tr><td><strong>Company / Business</strong></td><td>${company || 'N/A'}</td></tr>
          <tr><td><strong>Service Needed</strong></td><td>${service || 'N/A'}</td></tr>
          <tr><td><strong>Budget Range</strong></td><td>${budget || 'N/A'}</td></tr>
          <tr><td><strong>Timeline</strong></td><td>${timeline || 'N/A'}</td></tr>
          <tr><td><strong>Project Details</strong></td><td>${(message || 'N/A').replace(/\n/g, '<br/>')}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:13px;">Sent from the thinklyedu.com quote page.</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: 'Quote request sent successfully' })
  } catch (error) {
    console.error('Quote email error:', error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
