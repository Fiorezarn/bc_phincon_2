const { User } = require("@/models");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { generateToken } = require("@/controllers/token");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { Op } = require("sequelize");

const registerUser = async (req, res) => {
  try {
    const { fullname, username, email, password, phoneNumber } = req.body;
    const newUser = await User.create({
      us_fullname: fullname,
      us_username: username,
      us_email: email,
      us_password: await bcrypt.hashSync(password, 10),
      us_phone_number: phoneNumber,
      us_active: false,
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

    const verificationToken = generateToken(
      newUser.us_id,
      newUser.us_email,
      "VERIFICATION",
      "1h"
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
      html: htmlToSend,
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

const loginUser = async (req, res) => {
  try {
    const { input, password } = req.body;
    const user = await User.findOne({
      attributes: [
        "us_id",
        "us_password",
        "us_username",
        "us_email",
        "us_phone_number",
        "us_fullname",
        "us_active",
      ],
      where: {
        [Op.or]: [
          { us_username: input },
          { us_email: input },
          { us_phone_number: input },
        ],
      },
    });
    const loginToken = generateToken(user.us_id, user.us_email, "LOGIN", "1d");

    const isActive = user.us_active;

    if (!isActive) {
      return res.status(401).send({
        status: "failed",
        code: 401,
        message: "Please verify your email first",
      });
    }

    if (!user) {
      return res.status(404).send({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.us_password);
    if (!isValidPassword) {
      return res.status(401).send({
        status: "failed",
        code: 401,
        message: "Invalid credentials",
      });
    }
    delete user.dataValues.us_password;
    user.dataValues.token = loginToken;
    const options = {
      expires: new Date(Number(new Date()) + 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.cookie("user", user, options).status(200).send({
      status: "success",
      code: 200,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ status: "failed", code: 500, message: error.message });
  }
};

module.exports = { registerUser, loginUser };
