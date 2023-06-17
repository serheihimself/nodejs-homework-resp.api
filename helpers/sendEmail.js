const nodemailer = require("nodemailer");

require("dotenv").config();

const { EMAIL_KEY, PASSWORD_KEY } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_KEY,
    pass: PASSWORD_KEY,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL_KEY };
  try {
    await transporter.sendMail(email);
    console.log("Succsess");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
