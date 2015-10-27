var connect = require('connect');	//这句代码的必须需要node_modules中已经安装了connect模块，否则报错
var testSync = require('./testSync');

var app = connect();

app.use(testSync);

console.log('server listen at port 3002.');
app.listen(3002);

