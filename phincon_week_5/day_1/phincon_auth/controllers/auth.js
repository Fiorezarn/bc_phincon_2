const { User } = require("@/models");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { generateVerificationToken } = require("@/controllers/token");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const registerUser = async (req, res) => {
  try {
    const { fullname, username, email, password, phoneNumber } = req.body;
    const newUser = await User.create({
      us_fullname: fullname,
      us_username: username,
      us_email: email,
      us_password: await bcrypt.hashSync(password, 10),
      us_phone_number: phoneNumber,
      us_active: true,
      us_created_on: new Date(),
      us_created_by: 1,
      us_updated_on: new Date(),
      us_updated_by: 1,
    });
    res.status(201).send({
      status: "success",
      code: 201,
      message: "Register Success",
      data: newUser,
    });

    const verificationToken = generateVerificationToken(
      newUser.us_id,
      newUser.us_email
    );

    const emailTemplateSource = fs.readFileSync(
      path.join(__dirname, "../views/templates/emailVerification.hbs"),
      "utf8"
    );
    const template = handlebars.compile(emailTemplateSource);
    const htmlToSend = template({
      logoUrl: `${process.env.BASE_URL}:${process.env.PORT}/images/logo-phincon-academy.png`,
      username: username,
      verificationLink: `${process.env.BASE_URL}:${process.env.PORT}/auth/verify-email?token=${verificationToken}`,
    });
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: "phinconacademy@gmail.com",
      to: email,
      subject: "Hello ✔",
      html: "<b>INI MASIH TEST VERIFIKASI</b>",
    };
    await transporter.sendMail(mailOptions);
    return res.send({
      status: "success",
      message: "Email sent",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "failed", message: error.message });
  }
};

module.exports = { registerUser };
