let order_status = document.querySelector(".order-status-hidden").value;
let start_date = document.querySelector("#history_start_date_hidden").value;
let end_date = document.querySelector("#history_end_date_hidden").value;

console.log(order_status);
console.log(start_date);
console.log(end_date);

let data = null;
// datepicker
$(document).ready(function () {
    $.datepicker.setDefaults({
        closeText: "닫기",
        currentText: "오늘",
        prevText: "이전 달",
        nextText: "다음 달",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNames: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        weekHeader: "주",
        yearSuffix: "년",
    });
});

$(function () {
    $("#history_start_date, #history_end_date").datepicker({
        dateFormat: "yy-mm-dd",
        showOn: "button",
        buttonImage: "/static/images/admin/calendar.png",
        buttonImageOnly: true,
        showButtonPanel: true,
        maxDate: "today",
        minDate: "-2y",
    });
    console.log($("#history_start_date, #history_end_date").datepicker("setDate", "today"));
    $("#history_start_date, #history_end_date").datepicker("setDate", "today");
});



// 조회버튼
const searchBtn = document.querySelector(".search-btn");
const historyStartDate = document.querySelector("#history_start_date");
const historyEndDate = document.querySelector("#history_end_date");
const seatCategory = document.querySelector("#seat-category");
const table = document.querySelector(".table-container");



function userlist() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/saleslist",
        dataType: "json",
        // type:param,
        success: (response) => {
            alert("성공");
            responseData = response.data;
            // responseData = responseData.receipt_start_date.split(/[T]/, 1);
            console.log(responseData);
            inlist(responseData);
            data = responseData;
        },
        error: (error) => {
            alert("완전 보내기 실패");
            console.log(error);
        },
    });
}
let param = {
    status: order_status,
    history_start_date: start_date,
    history_end_date: end_date
};
function setParam() {
    if (param.status == '') {
    param.status = "all";
    }
}
const orderStatus = document.querySelector("#seat-category");
orderStatus.onchange = () => {
    param.status = orderStatus.value;
    console.log(param.status);
}


// 날짜 변경
function inlist(responseData) {
    table.innerHTML = "";
    console.log(responseData);
    let total1 = 0;
    responseData.forEach((user, index) => {
        console.log(param.status);
        let orderDate = new Date(user.receipt_start_date);
        let orderStatus2 = user.receipt_kinds;
        
        if (param.status != "all" ? orderStatus2 == param.status : true) {
            console.log(orderStatus2);
            console.log(param.status);

            let start = new Date(param.history_start_date);
            let end = new Date(param.history_end_date);
            console.log(start);
            console.log(end);
            
            if ((orderDate >= start && orderDate <= end) || (start == "Invalid Date" && end == "Invalid Date")) {
                total1 += user.receipt_price;
                if(user.receipt_kinds =="oneday"){
                    table.innerHTML += `
                                <table class="sales-table">
                                    <colgroup>
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                    </colgroup>
                                    <tr>
                                        <td>원데이</td>
                                        <td>${user.receipt_time}시간권</td>
                                        <td>${user.receipt_count} 회</td>
                                        <td>${user.receipt_count*user.receipt_price}원</td>
                                    </tr>
                                </table>
                    `;
                }else if(user.receipt_kinds == "commuter_time") {
                    table.innerHTML += `
                                <table class="sales-table">
                                    <colgroup>
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                    </colgroup>
                                    <tr>
                                        <td>정액권(시간)</td>
                                        <td>${user.receipt_time}시간권</td>
                                        <td>${user.receipt_count} 회</td>
                                        <td>${user.receipt_count*user.receipt_price}원</td>
                                    </tr>
                                </table>
                                `;
                }else if(user.receipt_kinds == "commuter_day") {
                    table.innerHTML += `
                                <table class="sales-table">
                                    <colgroup>
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                    </colgroup>
                                    <tr>
                                        <td>정액권(기간)</td>
                                        <td>${user.receipt_day}주권</td>
                                        <td>${user.receipt_count} 회</td>
                                        <td>${user.receipt_count*user.receipt_price}원</td>
                                    </tr>
                                </table>
                                `;
                }else if(user.receipt_kinds == "reserved_seat") {
                    table.innerHTML += `
                                <table class="sales-table">
                                    <colgroup>
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                    </colgroup>
                                    <tr>
                                        <td>지정석</td>
                                        <td>${user.receipt_day}주권</td>
                                        <td>${user.receipt_count} 회</td>
                                        <td>${user.receipt_count*user.receipt_price}원</td>
                                    </tr>
                                </table>
                                `;
                }else if(user.recipt_kinds == "loker") {
                    table.innerHTML += `
                                <table class="sales-table">
                                    <colgroup>
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                        <col width="25%">
                                    </colgroup>
                                    <tr>
                                        <td>사물함</td>
                                        <td>${user.receipt_day}주권</td>
                                        <td>${user.receipt_count} 회</td>
                                        <td>${user.receipt_count*user.receipt_price}원</td>
                                    </tr>
                                </table>
                                `;
                }
            }
        }
    });
    const total = document.querySelector(".total-price");
    total.innerHTML += `
                    <div><b>총 매출</b> ${total1}원</div>
                    `;
    const updateSelects = document.querySelectorAll(".order-status2");
      // 기존 select 값과 일치하는 value에 seleted 옵션을 줘라
    updateSelects.forEach((updateSelect, index) => {
        const selectLength = updateSelect.options.length;
        const optionValue = responseData[index].status;

        console.log(selectLength);
        console.log(optionValue);

        for (let i = 0; i < selectLength; i++) {
            if (optionValue == updateSelect.options[i].value) {
                updateSelect.options[i].selected = true;
            }
        }
    })
}


function setModel() {
    const statusSelect = document.querySelector("#seat-category");
    for (let i = 0; i < 6; i++) {
        if (statusSelect.options[i].value == testValue1) {
            statusSelect.options[i].selected = true;
        }
    }
  
    const startDate = document.querySelector("#history_start_date");
    startDate.value = testValue2;
  
    const endDate = document.querySelector("#history_end_date");
    endDate.value = testValue3;
}

searchBtn.onclick = () => {
    console.log(historyStartDate.value);
    console.log(historyEndDate.value);
    console.log(seatCategory.value);
    alert("시작날짜 :" + historyStartDate.value + "끝 날짜 :" + historyEndDate.value + "좌석종류 : " + seatCategory.value);
}


window.onload = () => {
    setParam();
    userlist();
    setModel();
};