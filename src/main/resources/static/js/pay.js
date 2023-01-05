//결제페이지에 데이터 불러오기
let setSeatinfo = {
    seat_id: null,
    // user_id: null
    paytime: null
}
function paydata(time) {

    if (time == "oneday") {
        $('.pay-content li').children('.payment').find('p').text('원데이결제');
        $('.pay-content li').children('.product').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.price').find('span').text(localStorage.getItem("pay"));
    } else if (time == "commuter") {
        $('.pay-content li').children('.payment').find('p').text('정액권결제');
        $('.pay-content li').children('.product').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.price').find('span').text(localStorage.getItem("pay"));
    } else if (time == "reserved") {
        $('.pay-content li').children('.payment').find('p').text('지정석결제');
        $('.pay-content li').children('.product').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.price').find('span').text(localStorage.getItem("pay"));
    } else if (time == "locker") {
        $('.pay-content li').children('.payment').find('p').text('사물함결제');
        $('.pay-content li').children('.product').find('span').text(localStorage.getItem("paytime"));
        $('.pay-content li').children('.price').find('span').text(localStorage.getItem("pay"));
    }
}

//결제취소 버튼 이벤트
const logOutBtn = document.querySelector(".logout-btn");
let userPhone = null;

logOutBtn.onclick = () => {
    console.log("로그아웃");
    localStorage.clear();
    location.replace("/logout");
}

const payBtn = document.querySelector(".pay-btn");

//결제하기 버튼 이벤트
payBtn.onclick = () => {
    requestPay();
}

function loadUser() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/pay/loaduser",
        dataType: "json",
        success: (response) => {
            console.log(response);
            localStorage.setItem("userPhone", response.data);
        },
        error: (error) => {
            console.log(error);
        }
    })
}

var IMP = window.IMP; // 생략 가능
IMP.init("imp83013747"); // 예: imp00000000

function requestPay() {
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay({ // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: Date.now() + Math.random(), // 주문번호 랜덤
        name: localStorage.getItem("time") + localStorage.getItem("paytime"),
        amount: 100,
        buyer_email: "test@email.com",
        buyer_name: localStorage.getItem("userPhone"),
        buyer_tel: localStorage.getItem("userPhone"),
    }, function (rsp) { // callback
        if (rsp.success) {
            // 결제 성공 시 로직
            alert("결제 성공");
            console.log(rsp);

            payhistory();
            setSeat();
            // localStorage.clear();
            // location.replace("/logout");

            // location.replace("/logout");
        } else {
            alert("결제 성공(실패임)");
            // 결제 실패 시 로직
        }
    });
}

function payhistory() {

    let payhistoryinfo = null;

    if (localStorage.getItem("time") == "oneday") {
        payhistoryinfo = {
            receipt_kinds: "oneday",
            receipt_price: parseInt(localStorage.getItem("pay").replace("원", "").replace(",", "")),
            receipt_time: parseInt(localStorage.getItem("paytime").replace("시간", "")),
            receipt_day: 0
        }
    } else if (localStorage.getItem("time") == "commuter") {

        if (localStorage.getItem("paytime").includes("시간") == true) {
            payhistoryinfo = {
                receipt_kinds: "commuter_time",
                receipt_price: parseInt(localStorage.getItem("pay").replace("원", "").replace(",", "")),
                receipt_time: parseInt(localStorage.getItem("paytime").replace("시간", "")),
                receipt_day: 0
            }
        } else {
            payhistoryinfo = {
                receipt_kinds: "commuter_day",
                receipt_price: parseInt(localStorage.getItem("pay").replace("원", "").replace(",", "")),
                receipt_time: 0,
                receipt_day: parseInt(localStorage.getItem("paytime").replace("주", ""))
            }
        }

    } else if (localStorage.getItem("time") == "reserved") {
        payhistoryinfo = {
            receipt_kinds: "reserved_seat",
            receipt_price: parseInt(localStorage.getItem("pay").replace("원", "").replace(",", "")),
            receipt_time: 0,
            receipt_day: parseInt(localStorage.getItem("paytime").replace("주", ""))
        }

    } else if (localStorage.getItem("time") == "locker") {
        payhistoryinfo = {
            receipt_kinds: "locker",
            receipt_price: parseInt(localStorage.getItem("pay").replace("원", "").replace(",", "")),
            receipt_time: 0,
            receipt_day: parseInt(localStorage.getItem("paytime").replace("주(사물함)", ""))
        }
    }

    $.ajax({
        async: false,
        type: "post",
        url: "/api/pay/history",
        contentType: "application/json",
        data: JSON.stringify(payhistoryinfo),
        dataType: "json",
        success: (response) => {
            alert("히스토리 등록완료");
            console.log(response);
        },
        error: (error) => {
            alert("히스토리 등록실패");
            console.log(error);
        }
    })
}


function setSeat() {


    setSeatinfo.seat_id = (localStorage.getItem("seatnum"));
    // setSeatinfo.user_id = (parseInt(localStorage.getItem("userPhone")));
    setSeatinfo.paytime = (localStorage.getItem("paytime").replace("시간", ""));
    console.log(setSeatinfo);

    $.ajax({
        async: false,
        type: "put",
        url: "/api/pay/setseat",
        contentType: "application/json",
        data: JSON.stringify(setSeatinfo),
        dataType: "json",
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        }
    });
}

window.onload = () => {
    paydata(localStorage.getItem("time"));
    loadUser();

}