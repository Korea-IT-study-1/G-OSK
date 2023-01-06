//원데이, 정액권 버튼 이벤트
$('.oneday-btn, .commuter-btn').click(function () {
    localStorage.setItem("time", $(this).val());
    location.href = "/seat";
});

//지정석 버튼 이벤트
$('.reserved-btn').click(function () {
    localStorage.setItem("time", $(this).val());
    location.href = "/seat";
});

//사물함 버튼 이벤트
$('.locker-btn').click(function () {
    localStorage.setItem("time", $(this).val());
    location.href = "/locker/check";
});

//입실 버튼 이벤트
$('.in-btn').click(function () {
    localStorage.setItem("time", $(this).val());
    location.href = "/seat";
});

//퇴실 버튼 이벤트
$('.out-btn').click(function () {
    localStorage.setItem("time", $(this).val());
    location.replace("/inout_check");
});

//회원가입 버튼 이벤트
$('.join-btn').click(function () {
    location.href = "/account/join";
});

//내정보 버튼 이벤트
$('.myinfo-btn').click(function () {
    location.href = "/mypage";
});

//자리이동 버튼 이벤트
$('.seatmove-btn').click(function () {
    localStorage.setItem("time", $(this).val());
    location.href = "/seat";
});


// 현재시간 안내 //// 현재시간 안내 //
setInterval(function () {
    $(".main-content > p").text(dateToStr(new Date()));

    
}, 1000);

dateToStr = (date) => {
    var week = new Array('일', '월', '화', '수', '목', '금', '토');

    var localTime = date.toLocaleTimeString();

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var dayName = week[date.getDay()];

    return year + '년 ' + month + '월 ' + day + '일 ' + dayName + '요일 ' + localTime;
}