const {promises: {copyFile}} = require('fs');
const path = require('path');

const dir = path.resolve('./src/logs/test.json');
const  newDir= path.resolve('./src/logs/test1.json');


module.exports = async ()=>{

  try {
    await copyFile(dir, newDir);
  } catch (e) {

  }

}