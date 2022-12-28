//원데이, 정액권 버튼 이벤트
$('.oneday-btn, .commuter-btn').click(function(){
    localStorage.setItem("time", $(this).val());
    location.href = "/seat";
});

//지정석 버튼 이벤트
$('.reserved-btn').click(function(){
    localStorage.setItem("time", $(this).val());
    location.href = "/seat";
});

//사물함 버튼 이벤트
$('.locker-btn').click(function(){
    location.href = "/locker/check";
    localStorage.clear();
});

//입실
$('.in-btn').click(function(){
    localStorage.setItem("time", $(this).val());
    location.href = "/seat";
});

//퇴실
$('.out-btn').click(function(){
    location.replace = "/inout";
});
