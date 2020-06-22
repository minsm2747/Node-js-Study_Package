// 변수 선언
var onUncaughtException = function (error) {
    // 출력
    console.log('예외가 발생하였습니다..');

    // 이벤트 제거 (Event Remove)
    process.removeListener('uncaughtException', onUncaughtException);
};

// process 객체에 uncaughtException 이벤트 연결
process.on('uncaughtException', onUncaughtException);

// 2초 간격으로 예외 발생 시킨다.
var test = function () {
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test, 2000);