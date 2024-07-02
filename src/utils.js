import mongoose from "mongoose";
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

export const toObjectId = (idString) => {
  try {
    return new mongoose.Types.ObjectId(idString);
  } catch (error) {
    throw new Error('Invalid ObjectId format');
  }
};

export function base64ToFile(base64String) {
  // Extracting mime type and data from base64 string
  const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    throw new Error('Invalid base64 string');
  }

  const mimeType = matches[1];
  const data = matches[2];

  // Determining file extension from mime type
  const extension = mimeType.split('/')[1];

  // Generating a random file name
  const fileName = `file_${Date.now()}.${extension}`;

  // Writing the file
  const filePath = path.join(process.cwd(), 'public', 'uploads/images', fileName);
  fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
  return filePath;
  // console.log(`File ${fileName} created successfully at ${filePath}.`);
}

export async function sendEmail(email, subject, text, html) {
  try {
   
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'optexsolutionsjamnagar@gmail.com',
        pass: 'edjc kucu kevk ugzj'
      }
    });

    const mailOptions = {
      from: email, // sender address
      to: 'optexsolutionsjamnagar@gmail.com', // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, data: info.response }
  } catch (error) {
    return { success: false, data: error }
  }
}