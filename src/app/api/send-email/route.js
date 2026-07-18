import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, college, currentYear, internshipDomain, tenure, whyJoin, priorExperience, flexibleSchedule,studypassed } = body

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
      subject: `New Internship Application from ${name}`,
      html: `
        <h2>New Course Registration</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:600px;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>College/University</strong></td><td>${college}</td></tr>
          <tr><td><strong>Current Year</strong></td><td>${currentYear || 'N/A'}</td></tr>
          <tr><td><strong>Current year of study passed</strong></td><td>${studypassed || 'N/A'}</td></tr>

          <tr><td><strong>Domain</strong></td><td>${internshipDomain || 'N/A'}</td></tr>
          <tr><td><strong>Tenure</strong></td><td>${tenure}</td></tr>
          <tr><td><strong>Why Join</strong></td><td>${whyJoin || 'N/A'}</td></tr>
          <tr><td><strong>Prior Experience</strong></td><td>${priorExperience}</td></tr>
          <tr><td><strong>Flexible Schedule</strong></td><td>${flexibleSchedule}</td></tr>
        </table>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
