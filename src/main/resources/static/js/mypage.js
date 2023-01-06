
const logOutBtn = document.querySelector(".logout-btn");

function getuserList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/mypage/receipt",
        success: (response) => {
            alert("유저 정보 가져오기 성공")
            console.log(response.data);
            responseData = response.data;
            userload(responseData);
        },
        error: (error) => {
            alert("유저 정보 가져오기 실패");
            console.log(response.data);
            console.log(error);
        },
    });
}
function userload(responseData) {
    const seat = document.querySelector(".sales-table");
    
    responseData.forEach((seat, index) => {
        if(seat.receipt_onoff == 1) {
            receipt_onoff ="사용중" 
        }else if(seat.receipt_onoff == 0) {
            receipt_onoff ="사용완료"
        }
        if(seat.receipt_time == 0){
            seat.innerHTML += `
            <table class="sales-table">
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${seat.index}</td>
                        <td>${seat.receipt_start_date}</td>
                        <td>${seat.receipt_day}주 권</td>
                        <td>${seat.receipt_price} 원</td>
                        <td>${ receipt_onoff}</td>
                    </tr>
                </table>
            `;
        }else if(seat.receipt_day==0) {
            seat.innerHTML += `
            <li>
                <p>
                    <i class="fa-solid fa-ticket"></i>&nbsp&nbsp&nbsp&nbsp&nbsp
                    <span>${border.time}</span>
                </p>
                <div>${border.price}</div>
            </li>
            `;
        }
    });
}

logOutBtn.onclick = () => {
    console.log("로그아웃")
    location.replace("/logout");
}
//홈 버튼 이벤트
$('.home-btn').click(function () {
    location.replace("/index");
});

window.onload = () => {
    getuserList();
}