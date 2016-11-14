var fs = require('fs');

function smallcopy(src,dst){
    fs.writeFileSync(dst,fs.readFileSync(src));
}
module.exports = smallcopy;
