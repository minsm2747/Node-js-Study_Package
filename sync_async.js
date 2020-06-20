var  fs = require('fs');
    // 동기 방식 (Sync)
        console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf-8'});
    console.log(data);

    // 비동기 방식 (Async)
        console.log(2);
        fs.readFile('data.txt', {encoding: 'utf8'}, function(err, data) {
            console.log(3);
            console.log(data);
        });
        console.log(4);