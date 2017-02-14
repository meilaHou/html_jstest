var http = require("http");
var fs = require("fs");
//参考http://www.jb51.net/article/29855.htm
exports.start = function() {
    http.createServer(function (request, response) {
        fs.readFile('./index.html', 'utf-8', function (err, data) {//读取内容
            if (err) throw err;
            response.writeHead(200, {"Content-Type": "text/html"});//注意这里
            response.write(data);
            response.end();
            /*  response.writeHead(200, {"Content-Type": "text/html"});
              response.write("Hello World!");
              response.end();*/
        });
    }).listen(8088);
    console.log("Server running at http://localhost:8088/");
}
