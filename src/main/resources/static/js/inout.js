//홈으로 버튼 이벤트
$('.home-btn').click(function(){
    localStorage.clear();
    location.replace("/index");
});