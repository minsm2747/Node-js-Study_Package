var express = require('express');
var app = express();
    app.use(express.static('public'));
const port = 3020;

app.get('/', function (req, res) {
    res.send('Hello Home Page!!!');
});

// app.get('/dynamic', function (req, res) {
//     res.send('<!DOCTYPE html>\
//     <html>\
//     <head>\
//     <meta charset="UTF-8">\
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">\
//     <title>The Dynamic</title>\
//     </head>\
//     <body>\
//         <h2>Hello Dynamic !!</h2>\
//     </body>\
//     </html>');
// });

// 위와 같은 주석 처리 한 코드는 일일이 입력한 모든 html 코드 뒤에 \를 붙여야 하므로 비효율적이다.
// 그러므로 `으로 대체 가능.
app.get('/dynamic', function (req, res) {
    var lis = '';
        for (var i = 0; i < 5; i++) {
            lis = lis + '<li>Coding</li>'
        }
    var time = Date();
    var output = `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Dynamic</title>
        </head>
        <body>
            <h2>Hello Dynamic !!</h2>
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
        </html>
    `;
    res.send('output');
});

app.get('/lonin', function(req, res) {
    res.send('<h1>Login Please</h1>');
});

app.listen(3020, function () {
    console.log('Conneted 3020 port! !');
});