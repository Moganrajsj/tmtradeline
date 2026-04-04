import nodemailer from 'nodemailer';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message, company, quantity, isQuote, isNewsletter } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  let emailSubject = subject;
  if (isNewsletter) {
    emailSubject = `Newsletter Subscription: ${email}`;
  } else if (isQuote) {
    emailSubject = `Quote Request: ${subject}`;
  } else {
    emailSubject = `Contact Inquiry: ${subject}`;
  }

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO_EMAIL || 'tminternationaltradeline@gmail.com',
    replyTo: email,
    subject: emailSubject,
    text: `Name: ${name}\nEmail: ${email}\n${company ? `Company: ${company}\n` : ''}${quantity ? `Quantity: ${quantity}\n` : ''}Subject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #2b2118; border-bottom: 2px solid #b58d4d; padding-bottom: 10px;">
          ${isNewsletter ? 'New Newsletter Subscription' : isQuote ? 'New Quote Request' : 'New Contact Inquiry'}
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${quantity ? `<p><strong>Quantity:</strong> ${quantity}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p style="background: #f9f6f2; padding: 15px; border-radius: 5px; border-left: 4px solid #b58d4d;">
          <strong>Message:</strong><br/>
          ${message.replace(/\n/g, '<br/>')}
        </p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #888; text-align: center;">
          This email was sent from the TM International Tradeline website.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
}
