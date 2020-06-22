// process 객체에 exit Event를 연결
process.on('exit', function (code) {
    console.log('Exit 이벤트가 실행됩니다.');
});

// process 객체에 uncaughtException Event를 연결
process.on('uncaughtException', function (error) {
    console.log('예외가 발생하였습니다.');
});

// 2초 간격으로 3번 예외를 발생시킴
var count = 0;
var test = function () {
    // 탈출 코드
    count = count + 1;

    if (count > 3) { return; }

    // 예외를 강제로 발생시킴
    setTimeout(test, 2000);
    error,error,error();
};

setTimeout(test, 2000);