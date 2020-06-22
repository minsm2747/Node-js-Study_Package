var fs = require('fs');

fs.readFile('textfile.txt', 'utr-8', function (errer, data) {
    console.log(data);
});