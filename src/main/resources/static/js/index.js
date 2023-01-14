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



// 유저정보 가져오기
setInterval(function () {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/loaduserlist",
        dataType: "json",
        success: (response) => {
            responseData = response.data;
            userList(responseData);

        },
        error: (error) => {
            console.log(error);
        },

    });
}, 1000);

// 현재시간으로 변경
setInterval(function () {
    $.ajax({
        async: false,
        type: "put",
        url: "/api/admin/userday",
        dataType: "json",
        success: (response) => {
        },
        error: (error) => {
            console.log(error);
        },
    }); 
}, 1000);

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

$(".go-admin-btn").dblclick(function () {
    location.replace("/admin/productlist");
});

// 현재시간이랑 종료시간이랑 같으면 삭제
function userList(responseData) {

    responseData.forEach((user, index) => {
        if (user.user_create_date != null) {
            end_time = user.user_create_date.substring(0, user.user_create_date.lastIndexOf(":"));
            now_time = user.user_update_date.substring(0, user.user_update_date.lastIndexOf(":"));
            if(end_time  == now_time) {
                $.ajax({
                    async: false,
                    type: "put",
                    url: "/api/admin/usertime",
                    contentType: "application/json",
                    data: JSON.stringify(user.user_id),
                    dataType: "json",
                    success: (response) => {
                    },
                    error: (error) => {
                        console.log(error);
                    },
            
                }); 
                
            }
        }
        
    });
    
}