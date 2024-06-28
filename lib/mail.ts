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

export const sendPasswordResetEmail = async(
  email:string, token:string
)=>{
  const confirmLink = `https://s7-pearl.vercel.app/auth/new-password?token=${token}`
  await transporter.sendMail({
      from: '"Reset Password" <maddison53@ethereal.email>', // sender address
      to: email, // list of receivers
      subject: "reset your password", // Subject line
      text: "reset your password", // plain text body
      html: `<p>Click <a href="${confirmLink}">here to reset password<a/><p/>`, // html body
    });

}


export const sendVerificationEmail = async(
    email:string, token:string
)=>{
    const confirmLink = `https://s7-pearl.vercel.app/auth/new-verification?token=${token}`
    await transporter.sendMail({
        from: '"Email Verification" <maddison53@ethereal.email>', // sender address
        to: email, // list of receivers
        subject: "Confirm your email", // Subject line
        text: "Confirm your email", // plain text body
        html: `<p>Click <a href="${confirmLink}">here<a/><p/>`, // html body
      });

}
