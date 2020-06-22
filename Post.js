// 모듈 추출
var http = require('http');

// 모듈 사용
http.createServer(function (request, response) {
    request.on('data', function (data) {
        console.log('POST Data: ', data)
    });
}).listen(52273);