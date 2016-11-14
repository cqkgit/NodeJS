

var  fs = require('fs');

function fullcopy(src,dst){
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

module.exports = fullcopy;
