import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// Function to send email notification
async function sendEmailNotification(Name, Email, Message) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'educatingslasher64@gmail.com',
      pass: 'iamslasher12@',
    },
  });

  const mailOptions = {
    from: `${Email}`,
    to: 'educatingslasher64@gmail.com', // Replace with your email address
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>Email:</strong> ${Email}</p>
      <p><strong>Message:</strong> ${Message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function POST(req) {
  const { Name, Email, Message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ Name, Email, Message });

    // Send email notification
    await sendEmailNotification(Name, Email, Message);

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
