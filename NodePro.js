// process.argv
Process.argv.forEach(function (item, index) {
    // 출력
    console.log(index + ' : ' + typeof + (item) + ' : ' , item);

    // 실행 매개변수에 --exit가 있을 경우
    if (item == '--exit') {
        // 다음 실행 매개변수를 얻습니다.
        var exitTime = Number(process.argv[index + 1]);

        // 일정 시간 경과된 이후
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});