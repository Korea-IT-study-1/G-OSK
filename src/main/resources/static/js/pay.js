//결제페이지에 데이터 불러오기
function paydata(time){

    if(time == "oneday"){
        $('.pay-content li').children('.product1').find('p').text('원데이결제');
        $('.pay-content li').children('.product2').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.product3').find('span').text(localStorage.getItem("pay"));
    } else if(time == "commuter"){
        $('.pay-content li').children('.product1').find('p').text('정액권결제');
        $('.pay-content li').children('.product2').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.product3').find('span').text(localStorage.getItem("pay"));
    } else if(time == "reserved"){
        $('.pay-content li').children('.product1').find('p').text('지정석결제');
        $('.pay-content li').children('.product2').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.product3').find('span').text(localStorage.getItem("pay"));
    } else if(time == "locker"){
        $('.pay-content li').children('.product1').find('p').text('사물함결제');
        $('.pay-content li').children('.product2').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.product3').find('span').text(localStorage.getItem("pay"));
    }
}

//결제취소 버튼 이벤트
$('.index-btn').click(function(){
    localStorage.clear();
    location.replace("/index");
})

//결제하기 버튼 이벤트
window.onload = () => {
    paydata(localStorage.getItem("time"));
}