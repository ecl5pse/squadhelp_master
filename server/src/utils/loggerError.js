const {promises: {writeFile, appendFile, access, mkdir}} = require('fs');
const path = require('path');
const dir = path.resolve('./src/logs');
const dirog = path.resolve('./src/logs/test.json');


module.exports = async (err, req, res, next) => {
  const {message, code, stack} = err;
  const errorData = {
    message: message,
    code: code,
    time: new Date(),
    stackTrace: stack,
  };


    try {
      await access(dir);
      if (errorData) {
        await appendFile(dirog, JSON.stringify(errorData, null, 2));
        next()
      }
      next();
    } catch (e) {
      await mkdir(dir);
      await writeFile(dirog, JSON.stringify(errorData, null, 2));
      next();
    }

};

