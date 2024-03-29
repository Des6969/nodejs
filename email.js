//sending email using node mailer npm
"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "yadavdes7@gmail.com",
    pass: "wcla vsfh brtz fhrj",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object

  const info = await transporter.sendMail({
    from: '"👻" <foo@example.com>', // sender address
    to: "tufanpande@gmail.com,yadavdes7@gmail.com", // list of receivers
    subject: "HAkuna maatata", // Subject line
    text: "Hello world?", // plain text body

    html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
    attachments: [
      {
        filename: "dmonsalyer.jpg",
        path: "D:/wallpaper/dmonsalyer.jpg",

        cid: "unique@nodemailer.com", //same cid value as in the html img src
      },
    ],

    filename: "Deslab3.pdf",
    path: "D:/Deslab3.pdf", // stream this file
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);
