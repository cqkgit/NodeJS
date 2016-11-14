var events = require('events');

var eventEmitter = new  events.EventEmitter();

var connectHandler = function(){
    console.log('连接成功');
    eventEmitter.emit('data-received');
};


eventEmitter.on('connection',connectHandler);
eventEmitter.on('data-received',function(){
    console.log('数据接受成功');
});

eventEmitter.emit('connection');

console.log('执行结束');

fs.readFile('input.txt',function(err ,data) {
    
})
