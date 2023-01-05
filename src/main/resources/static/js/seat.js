const seatbasic = document.querySelector(".seat-basic");
const seatspecial = document.querySelector(".seat-special");
const basic = document.querySelector(".basic");
const special = document.querySelector(".special");
const Os1 = document.querySelector(".Os1");
const Os2 = document.querySelector(".Os2");
const Os3 = document.querySelector(".Os3");
const Os4 = document.querySelector(".Os4");
const Os5 = document.querySelector(".Os5");
const Os6 = document.querySelector(".Os6");
const Os7 = document.querySelector(".Os7");
const Os8 = document.querySelector(".Os8");
const Os9 = document.querySelector(".Os9");
const Os10 = document.querySelector(".Os10");
const Os11 = document.querySelector(".Os11");
const Os12 = document.querySelector(".Os12");
const Os13 = document.querySelector(".Os13");
const Os14 = document.querySelector(".Os14");
const Os15 = document.querySelector(".Os15");
const Os16 = document.querySelector(".Os16");
const Os17 = document.querySelector(".Os17");
const Os18 = document.querySelector(".Os18");
const Os19 = document.querySelector(".Os19");
const Os20 = document.querySelector(".Os20");



function userList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check/user",
        // data: param,
        success: (response) => {
            console.log(response.data);
            responseData = response.data;
            // console.log(responseData[0].seat_id);
            // console.log(typeof(responseData[0].seat_id));
            // responseData[0].seat_id.classList.add('org-btn');
            // console.log(responseData[0].seat_id.classList.add('org-btn'));

            
            // for(i = 0; i < responseData.length; i++){
            //     basic // 기존 테이블 리스트
            //     responseData[i] // 가져온 것 (리스트)

            //     basicList > button [i] ==  responseData[j].value()
            //     basic.responseData[i].value().seat_id.classList.add("org-btn");
            // }
            // getList();
            testList(responseData);
        },
        error: (error) => {
            alert("입실 퇴실 in 실패");
            console.log(error);
        },
    });
}
function testList(responseData) {
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os1').innerText == responseData[i].seat_id){
            Os1.classList.remove("org-btn");
        }
        else if (document.getElementById('Os2').innerText == responseData[i].seat_id){
            Os2.classList.remove("org-btn");
        }
        else if (document.getElementById('Os3').innerText == responseData[i].seat_id){
            Os3.classList.remove("org-btn");
        }
        else if (document.getElementById('Os4').innerText == responseData[i].seat_id){
            Os4.classList.remove("org-btn");
        }
        else if (document.getElementById('Os5').innerText == responseData[i].seat_id){
            Os5.classList.remove("org-btn");
        }
        else if (document.getElementById('Os6').innerText == responseData[i].seat_id){
            Os6.classList.remove("org-btn");
        }
        else if (document.getElementById('Os7').innerText == responseData[i].seat_id){
            Os7.classList.remove("org-btn");
        }
        else if (document.getElementById('Os8').innerText == responseData[i].seat_id){
            Os8.classList.remove("org-btn");
        }
        else if (document.getElementById('Os9').innerText == responseData[i].seat_id){
            Os9.classList.remove("org-btn");
        }
        else if (document.getElementById('Os10').innerText == responseData[i].seat_id){
            Os10.classList.remove("org-btn");
        }
        else if (document.getElementById('Os11').innerText == responseData[i].seat_id){
            Os11.classList.remove("org-btn");
        }
        else if (document.getElementById('Os12').innerText == responseData[i].seat_id){
            Os12.classList.remove("org-btn");
        }
        else if (document.getElementById('Os13').innerText == responseData[i].seat_id){
            Os13.classList.remove("org-btn");
        }
        else if (document.getElementById('Os14').innerText == responseData[i].seat_id){
            Os14.classList.remove("org-btn");
        }
        else if (document.getElementById('Os15').innerText == responseData[i].seat_id){
            Os15.classList.remove("org-btn");
        }
        else if (document.getElementById('Os16').innerText == responseData[i].seat_id){
            Os16.classList.remove("org-btn");
        }
        else if (document.getElementById('Os17').innerText == responseData[i].seat_id){
            Os17.classList.remove("org-btn");
        }
        else if (document.getElementById('Os18').innerText == responseData[i].seat_id){
            Os18.classList.remove("org-btn");
        }
        else if (document.getElementById('Os19').innerText == responseData[i].seat_id){
            Os19.classList.remove("org-btn");
        }
        else if (document.getElementById('Os20').innerText == responseData[i].seat_id){
            Os20.classList.remove("org-btn");
        }

    }
   
    
    getList();
}

function getList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check",
        dataType: "json",
        success: (response) => {
            console.log(response.data);
            responseData1 = response.data;
            responseData = responseData1[responseData1.length - 1];
            console.log(responseData);
            if (responseData.receipt_kinds != "reserved_seat") {

                alert("일반석 입석");
                $('.basic').show();
                $('.special').hide();
                seatbasic.classList.remove("invisible");
                seatspecial.classList.add("invisible");
                special.classList.remove("sky-btn");
                basic.classList.add("sky-btn");
                // hidden_btn(localStorage.getItem("time"));
            } else if (responseData.receipt_kinds == "reserved_seat") {
                alert("지정석 입석");
                $('.basic').hide();
                $('.special').show();
                seatspecial.classList.remove("invisible");
                seatbasic.classList.add("invisible");
                basic.classList.remove("sky-btn");
                special.classList.add("sky-btn");
                // hidden_btn(localStorage.getItem("time"));
                
            }

        },
        error: (error) => {
            alert("입실 퇴실 in 실패");
            console.log(error);
        },
    });
}

//선택한 좌석 클릭 시 버튼색깔 변경 및 좌석 이름 표시
$('.seat-content button').click(function () {
    if ($(this).hasClass('org-btn') == false) {
        if ($(this).hasClass('sky-btn') == true) {
            $(this).removeClass('sky-btn');
            $(".seat-select-name").attr('value', "");
        } else {
            $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
            $('.seat-select-name').attr('value', $(this).text());
        }
    } else {
        $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
        $(".seat-select-name").attr('value', "");
    }
    if (localStorage.getItem("time") == "in") {
        const seatInput = document.querySelector(".seat-select-name");
        const inoutButton = document.querySelector(".junho");
        // const user_id = localStorage.id;
        // console.log(user_id)
        let userData = {}

        userData = seatInput.value
        console.log(userData)

        inoutButton.onclick = () => {
            console.log(userData)
            $.ajax({
                async: false,
                type: "put",
                url: "/api/seat/update",
                contentType: "application/json",
                data: JSON.stringify(userData),
                dataType: "json",
                success: (response) => {
                    alert("입실완료");
                    console.log(userData)

                },
                error: (error) => {
                    alert("입실 실패");
                    console.log(error);
                    console.log(userData)
                }
            });
        }
    }
    else if (localStorage.getItem("time") == "seatmove") {
        const seatInput = document.querySelector(".seat-select-name");
        const inoutButton = document.querySelector(".junho");
        // const user_id = localStorage.id;
        // console.log(user_id)
        let userData = {}

        userData = seatInput.value
        console.log(userData)

        inoutButton.onclick = () => {
            if(responseData.receipt_kinds != "reserved_seat") {
                console.log(userData)
            $.ajax({
                async: false,
                type: "put",
                url: "/api/seat/delete",
                contentType: "application/json",
                data: JSON.stringify(userData),
                dataType: "json",
                success: (response) => {
                    alert("자리 삭제완료");
                    console.log(userData)
                    $.ajax({
                        async: false,
                        type: "put",
                        url: "/api/seat/update",
                        contentType: "application/json",
                        data: JSON.stringify(userData),
                        dataType: "json",
                        success: (response) => {
                            alert("자리 변환완료");
                            console.log(userData)
        
                        },
                        error: (error) => {
                            alert("자리 변환 실패");
                            console.log(error);
                            console.log(userData)
                        }
                    });

                },
                error: (error) => {
                    alert("자리 변환 실패");
                    console.log(error);
                    console.log(userData)
                }
            });
            }else if(responseData.receipt_kinds == "reserved_seat") {
                console.log(userData)
            $.ajax({
                async: false,
                type: "put",
                url: "/api/seat/reserveddelete",
                contentType: "application/json",
                data: JSON.stringify(userData),
                dataType: "json",
                success: (response) => {
                    alert("지정석 자리 삭제완료");
                    console.log(userData)
                    $.ajax({
                        async: false,
                        type: "put",
                        url: "/api/seat/reservedupdate",
                        contentType: "application/json",
                        data: JSON.stringify(userData),
                        dataType: "json",
                        success: (response) => {
                            alert("지정석 자리 변환완료");
                            console.log(userData)
        
                        },
                        error: (error) => {
                            alert("지정석 자리 변환 실패");
                            console.log(error);
                            console.log(userData)
                        }
                    });

                },
                error: (error) => {
                    alert("자리 변환 실패");
                    console.log(error);
                    console.log(userData)
                }
            });
            }
            
        }
    }
    
})


//홈으로 버튼 이벤트
$('.home-btn').click(function () {
    localStorage.clear();
    location.replace("/index");
});

//다음단계 버튼 이벤트
$('.next-btn').click(function () {
    if ($('.seat-select-name').val() != "") {
        switch (localStorage.getItem("time")) {
            case "seatmove":
                localStorage.setItem("seatnum", $('.seat-select-name').val());
                break;
            case "in":
                localStorage.setItem("seatnum", $('.seat-select-name').val());
                location.href = "/inout";
                break;
            default:
                localStorage.setItem("seatnum", $('.seat-select-name').val());
                var time = localStorage.getItem("time");
                location.href = "/time/" + time;
        }
    }
});

//일반석, 지정석 종류 버튼 히든 이벤트
// function hidden_btn(time) {
//     if (time == "oneday" ||
//         time == "commuter" ||
//         time == "in") {
//         $('.basic').show();
//         $('.special').hide();
//         seatbasic.classList.remove("invisible");
//         seatspecial.classList.add("invisible");
//         special.classList.remove("sky-btn");
//         basic.classList.add("sky-btn");
//     } else {
//         $('.basic').hide();
//         $('.special').show();
//         seatspecial.classList.remove("invisible");
//         seatbasic.classList.add("invisible");
//         basic.classList.remove("sky-btn");
//         special.classList.add("sky-btn");
//     }
// };


const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    console.log("로그아웃")
    location.replace("/logout");
}


//페이지가 실행될 때
window.onload = () => {
    // hidden_btn(localStorage.getItem("time"));
    userList();
    // getList();
}