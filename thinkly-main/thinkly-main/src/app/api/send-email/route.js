import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    // JSON ki jagah ab FormData aa rahi hai (kyunki file bhi bhej rahe hain)
    const formData = await req.formData()

    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const college = formData.get('college')
    const currentYear = formData.get('currentYear')
    const studypassed = formData.get('studypassed')
    const internshipDomain = formData.get('internshipDomain')
    const tenure = formData.get('tenure')
    const whyJoin = formData.get('whyJoin')
    const priorExperience = formData.get('priorExperience')
    const flexibleSchedule = formData.get('flexibleSchedule')
    const file = formData.get('file') // File object ya null

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Attachments array — file hai to usko buffer mein convert karke attach karenge
    const attachments = []
    if (file && typeof file === 'object' && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      attachments.push({
        filename: file.name,
        content: buffer,
      })
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Internship Application from ${name}`,
      html: `
        <h2>New Course Registration</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:600px;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || 'N/A'}</td></tr>
          <tr><td><strong>College/University</strong></td><td>${college}</td></tr>
          <tr><td><strong>Current Year</strong></td><td>${currentYear || 'N/A'}</td></tr>
          <tr><td><strong>Current year of study passed</strong></td><td>${studypassed || 'N/A'}</td></tr>
          <tr><td><strong>Domain</strong></td><td>${internshipDomain || 'N/A'}</td></tr>
          <tr><td><strong>Tenure</strong></td><td>${tenure}</td></tr>
          <tr><td><strong>Why Join</strong></td><td>${whyJoin || 'N/A'}</td></tr>
          <tr><td><strong>Prior Experience</strong></td><td>${priorExperience}</td></tr>
          <tr><td><strong>Flexible Schedule</strong></td><td>${flexibleSchedule}</td></tr>
          <tr><td><strong>Resume</strong></td><td>${file && file.name ? file.name + ' (attached)' : 'Not uploaded'}</td></tr>
        </table>
      `,
      attachments,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
