/**
 * Created by cqk on 2016/9/4.
 */


var fs = require('fs');
fs.open('info.txt','r',function(err,handle){
    var buf = new Buffer(100000);
    fs.read(handle,buf,0,100000,null,function(err,length){
        console.log(buf.toString('utf8',0,length));
        fs.close(handle,function(){
            console.log("关闭文件");
        });
    });
});
