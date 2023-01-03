//결제페이지에 데이터 불러오기
function paydata(time) {

    if (time == "oneday") {
        $('.pay-content li').children('.product1').find('p').text('원데이결제');
        $('.pay-content li').children('.product2').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.product3').find('span').text(localStorage.getItem("pay"));
    } else if (time == "commuter") {
        $('.pay-content li').children('.product1').find('p').text('정액권결제');
        $('.pay-content li').children('.product2').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.product3').find('span').text(localStorage.getItem("pay"));
    } else if (time == "reserved") {
        $('.pay-content li').children('.product1').find('p').text('지정석결제');
        $('.pay-content li').children('.product2').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.product3').find('span').text(localStorage.getItem("pay"));
    } else if (time == "locker") {
        $('.pay-content li').children('.product1').find('p').text('사물함결제');
        $('.pay-content li').children('.product2').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.product3').find('span').text(localStorage.getItem("pay"));
    }
}

//결제취소 버튼 이벤트
const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    console.log("로그아웃");
    location.replace("/logout");
}

var IMP = window.IMP; // 생략 가능
IMP.init("imp83013747"); // 예: imp00000000



//결제하기 버튼 이벤트
window.onload = () => {
    paydata(localStorage.getItem("time"));
}

function requestPay() {
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay({ // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: Date.now() + Math.random(), // 주문번호 랜덤
        name: localStorage.getItem("time") + localStorage.getItem("paytime"),
        amount: 100,
        buyer_email: "test@email.com",
        buyer_name: "test",
        buyer_tel: localStorage.getItem("userPhone"),
    }, function (rsp) { // callback
        if (rsp.success) {
            // 결제 성공 시 로직
            alert("결제 성공");
            console.log(rsp);
            // location.replace("/logout");

        } else {
            alert("결제 성공(실패임)");
            // 결제 실패 시 로직
        }
    });
}

const payBtn = document.querySelector(".pay-btn");

payBtn.onclick = () => {
    requestPay();
}