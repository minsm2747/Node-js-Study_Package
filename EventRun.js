// Exit Event 연결
process.on('exit', function (code) {
    console.log('Good Bye !!');
});

// 이벤트 강제 발생
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// 프로그램 실행 중
console.log('프로그램 실행 중 입니다.');