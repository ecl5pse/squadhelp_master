require('./dbMongo/mongoose');
const http = require('http');
const express = require('express');
const router = require('./router');
const cors = require('cors');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');
const loggerError  = require('./utils/loggerError.js')
const copy  = require('./utils/copyFile')

const PORT = process.env.PORT || 9632;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(loggerError);
app.use(handlerError);



const server = http.createServer(app);
server.listen(PORT);
controller.createConnection(server);
/*
const nodemailer = require("nodemailer");

app.use(main)


async function main() {


  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'squadhelp1.0@gmail.com',
        pass: 'test12345A'
      }


  });

  let info = await transporter.sendMail({
    from: 'sender@server.com',
    to: "fantamas20@gmail.com",
    subject: 'AMP4EMAIL message',
    text: 'For clients with plaintext support only',

  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);*/
