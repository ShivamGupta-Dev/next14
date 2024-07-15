const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "theshivam.7700@gmail.com",
    pass: "igck gfji svro xeak",
  },
});
const emailTemplate = (content: string): string => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 20px 0;
      background-color: #32de84;
      color: #ffffff;
      border-radius: 10px 10px 0 0;
    }
    .content {
      padding: 20px;
      font-size: 16px;
      line-height: 1.6;
      color: #333333;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      margin-top: 20px;
      background-color: #32de84;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #777777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>S7</h1>
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <p>&copy; 2024 S7. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export const sendPasswordResetEmail = async(
  email:string, token:string
)=>{
  const confirmLink = `https://s7-pearl.vercel.app/auth/new-password?token=${token}`
  const htmlContent = `
    <p>Click the button below to reset your password:</p>
    <a href="${confirmLink}" class="button">Reset Password</a>
    <p>If you did not request a password reset, please ignore this email.</p>
  `;

  await transporter.sendMail({
    from: '"S7 Reset Password" <maddison53@ethereal.email>', // sender address
    to: email, // list of receivers
    subject: "Reset Your Password", // Subject line
    text: `Click here to reset your password: ${confirmLink}`, // plain text body
    html: emailTemplate(htmlContent), // html body
  });
};


export const sendVerificationEmail = async(
    email:string, token:string
)=>{
    const confirmLink = `https://s7-pearl.vercel.app/auth/new-verification?token=${token}`
    const htmlContent = `
    <p>Click the button below to verify your email address:</p>
    <a href="${confirmLink}" class="button">Verify Email</a>
    <p>If you did not sign up for an account, please ignore this email.</p>
  `;

  await transporter.sendMail({
    from: '"Email Verification" <maddison53@ethereal.email>', // sender address
    to: email, // list of receivers
    subject: "Confirm Your Email", // Subject line
    text: `Click here to verify your email: ${confirmLink}`, // plain text body
    html: emailTemplate(htmlContent), // html body
  });
};

