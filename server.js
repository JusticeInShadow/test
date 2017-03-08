var http = require("http"); //内置的http模块提供了HTTP服务器和客户端功能
var fs = require("fs");	
var path = require("path");  //内置的path模块提供了与文件系统路径相关的功能
var mine = require("mine");  //附加的mime模块有根据文件扩展名得出MIME类型的能力
var cache = {};

function send404(response) {
	response.writeHead(404,{"content-Type":"text/plain"});
	response.write("Error 404: resource not found.");
	response.end();
}

function sendFile(response,filePath,fileContents) {
	response.writeHead(200,{"content-Type": mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}
