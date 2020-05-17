require('./server/dbMongo/mongoose');
const http = require('http');
const express = require('express');
const router = require('./server/router');
const cors = require('cors');
const controller = require('./socketInit');
const handlerError = require('./server/handlerError/handler');
const fs = require('fs')
const PORT = process.env.PORT || 9632;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(handlerError);

const server = http.createServer(app);
server.listen(PORT)
/*() => console.log(`Example app listening on port ${ PORT }!`));*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
controller.createConnection(server);

const error =

fs.createWriteStream('log.json', JSON.stringify(error));