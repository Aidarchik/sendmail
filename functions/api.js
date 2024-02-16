const express = require("express");
const serverless = require("serverless-http");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: "aidar.mustaev@mail.ru",
    pass: "nLRU5AutWap0RGnnqTFz",
  },
});

async function main() {
  try {
    return await transporter.sendMail({
      from: "aidar.mustaev@mail.ru",
      to: "giper.kubik@yandex.ru",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
  } catch (error) {
    return error.message;
  }
}

const app = express();
const router = express.Router();
router.get("/", (req, res) => {
  res.send(main());
});
router.get("/hello", (req, res) => {
  res.send("Привет! Меня зовут Айдар");
});
app.use("/", router);
module.exports.handler = serverless(app);
// const port = 8080;
// app.listen(process.env.PORT || port, () => {
//   console.log(`Listening on port ${port}`);
// });
