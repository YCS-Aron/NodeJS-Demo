/*
 * 测试： 依次的异步读取文件，并将上一个文件的处理结果当做输入
*/
var fs = require('fs');
var path1 = './files/a.js';
var path2 = './files/b.js';

module.exports = function(req, res, next){
    fs.readFile(path1, function(err, data){
    	var o1 = JSON.parse(data.toString());
    	fs.readFile(path2, function(err, data){
    		var o2 = JSON.parse(data.toString());
    		//? 怎么将字符串转成JSON对象  JSON.parse，而且要注意属性名用单引号或者双引号
    		o1.a2 = o2;    		
    		res.statusCode = 200;
    		res.end(JSON.stringify(o1));
    		//? 怎么将JSON对象转成对应的字符串形式
    	});
    });
    //在NodeJS代码中十分需要注意的几点：
    //1. 在中间件的使用中，进入下一个中间件的唯一方法是调用next方法
};