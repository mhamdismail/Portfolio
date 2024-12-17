// src/app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!email || !message) {
    return new Response(JSON.stringify({ error: 'Email and message are required' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "bat9792@gmail.com",
      pass: "sarnynkmyczkitrp",  
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: 'mhamdismail1213@gmail.com',
    subject: `New message from ${name || 'Anonymous'}`, 
    text: `
      You have received a new message from ${name || 'Anonymous'}.
      
      Email: ${email}
      ${phone ? `Phone: ${phone}` : ''}
      
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), { status: 500 });
  }
}
