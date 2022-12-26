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

    $("#history_start_date, #history_end_date").datepicker("setDate", "today");
});


// 조회버튼
const searchBtn = document.querySelector(".search-btn");

const historyStartDate = document.querySelector("#history_start_date");
const historyEndDate = document.querySelector("#history_end_date");
const seatCategory = document.querySelector("#seat-category");


searchBtn.onclick = () => {
    console.log(historyStartDate.value);
    console.log(historyEndDate.value);
    console.log(seatCategory.value);
    alert("시작날짜 :" + historyStartDate.value + "끝 날짜 :" + historyEndDate.value + "좌석종류 : " + seatCategory.value);
}