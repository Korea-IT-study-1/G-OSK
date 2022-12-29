//홈 버튼 이벤트
$('.home-btn').click(function(){
    localStorage.clear();
    location.replace("/index");
});

//사물함 이용권 선택
$('.time-content li').click(function(){
    localStorage.setItem("paytime", $(this).find('span').text());
    localStorage.setItem("pay", $(this).children('div').text());
    location.href = "/pay";
});
