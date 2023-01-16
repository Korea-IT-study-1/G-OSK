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
const SOs1 = document.querySelector(".SOs1");
const SOs2 = document.querySelector(".SOs2");
const SOs3 = document.querySelector(".SOs3");
const SOs4 = document.querySelector(".SOs4");
const SOs5 = document.querySelector(".SOs5");
const SOs6 = document.querySelector(".SOs6");
const SOs7 = document.querySelector(".SOs7");
const SOs8 = document.querySelector(".SOs8");
const SOs9 = document.querySelector(".SOs9");
const SOs10 = document.querySelector(".SOs10");
const SOs11 = document.querySelector(".SOs11");
const SOs12 = document.querySelector(".SOs12");
const SOs13 = document.querySelector(".SOs13");
const SOs14 = document.querySelector(".SOs14");
const SOs15 = document.querySelector(".SOs15");
const SOs16 = document.querySelector(".SOs16");
const SOs17 = document.querySelector(".SOs17");
const SOs18 = document.querySelector(".SOs18");
const SOs19 = document.querySelector(".SOs19");
const SOs20 = document.querySelector(".SOs20");


function nullList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/inout",
        success: (response) => {
            responseData1 = response.data;
            console.log(response.data);
            responseData = responseData1[responseData1.length - 1];
            // 중복 체크
            if(response.data.length == 0) {
                userList();
            }else{
                if(localStorage.getItem("time") == "in"){
                    if(responseData.seat_id == null && responseData.reserved_seat_id == null){
                        userList();
                    }else {
                        alert("좌석이 있습니다.");
                        location.replace("/logout");
                    }  
                }else if(localStorage.getItem("time") == "seatmove") {
                    if(responseData.seat_id != null || responseData.reserved_seat_id != null){
                        userList();
                    }else {
                        alert("좌석이 없어서 불가능 합니다.");
                        location.replace("/logout");
                    }
                }else {
                    if(responseData.receipt_onoff == 0) {
                        userList();
                    }else {
                        alert("사용중인 이용권이 있습니다.");
                        location.replace("/logout");
                    }
                }
            }
            
              
        },
        error: (error) => {
            alert("유저 정보 가져오기 실패");
            console.log(response.data);
            console.log(error);
        },
    });
}

// ----------------------------일반석 유저정보 불러오기-------------------------------------------
function userList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check/user",
        success: (response) => {
            alert("일반석 유저정보 불러오기")
            
            console.log(response.data);
            responseData = response.data;
            userload(responseData);

        },
        error: (error) => {
            alert("입실 퇴실 in 실패");
            console.log(error);
        },
    });
}
function userload(responseData) {
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os1').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os1.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os1.classList.remove("org-btn");
                Os1.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os2').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os2.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os2.classList.remove("org-btn");
                Os2.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os3').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os3.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os3.classList.remove("org-btn");
                Os3.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os4').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os4.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os4.classList.remove("org-btn");
                Os4.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os5').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os5.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os5.classList.remove("org-btn");
                Os5.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os6').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os6.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os6.classList.remove("org-btn");
                Os6.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os7').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os7.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os7.classList.remove("org-btn");
                Os7.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os8').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os8.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os8.classList.remove("org-btn");
                Os8.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os9').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os9.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os9.classList.remove("org-btn");
                Os9.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os10').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os10.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os10.classList.remove("org-btn");
                Os10.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os11').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os11.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os11.classList.remove("org-btn");
                Os11.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os12').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os12.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os12.classList.remove("org-btn");
                Os12.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os13').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os13.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os13.classList.remove("org-btn");
                Os13.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os14').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os14.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os14.classList.remove("org-btn");
                Os14.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os15').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os15.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os15.classList.remove("org-btn");
                Os15.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os16').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os16.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os16.classList.remove("org-btn");
                Os16.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os17').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os17.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os17.classList.remove("org-btn");
                Os17.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os18').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os18.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os18.classList.remove("org-btn");
                Os18.classList.add("gray-btn");
                break;
            }  
        }
    }
    
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os19').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os19.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os19.classList.remove("org-btn");
                Os19.classList.add("gray-btn");
                break;
            }  
        }
    }
    
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os20').innerText == responseData[i].seat_id){
            if(responseData[i].user_id == 0) {
                Os20.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                Os20.classList.remove("org-btn");
                Os20.classList.add("gray-btn");
                break;
            }  
        }
    }
   
    seatuserList();
   
    
}
// ----------------------------지정석 유저정보 불러오기-------------------------------------------
function seatuserList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check/seatuser",
        success: (response) => {
            console.log(response.data);
            responseData = response.data;
            seatuserload(responseData);
        },
        error: (error) => {
            alert("지정석 사용중 불러오기 실패");
            console.log(error);
        },
    });
}
function seatuserload(responseData) {
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs1').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs1.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs1.classList.remove("org-btn");
                SOs1.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs2').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs2.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs2.classList.remove("org-btn");
                SOs2.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs3').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs3.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs3.classList.remove("org-btn");
                SOs3.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs4').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs4.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs4.classList.remove("org-btn");
                SOs4.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs5').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs5.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs5.classList.remove("org-btn");
                SOs5.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs6').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs6.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs6.classList.remove("org-btn");
                SOs6.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs7').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs7.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs7.classList.remove("org-btn");
                SOs7.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs8').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs8.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs8.classList.remove("org-btn");
                SOs8.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs9').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs9.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs9.classList.remove("org-btn");
                SOs9.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs10').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs10.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs10.classList.remove("org-btn");
                SOs10.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs11').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs11.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs11.classList.remove("org-btn");
                SOs11.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs12').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs12.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs12.classList.remove("org-btn");
                SOs12.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs13').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs13.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs13.classList.remove("org-btn");
                SOs13.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs14').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs14.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs14.classList.remove("org-btn");
                SOs14.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs15').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs15.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs15.classList.remove("org-btn");
                SOs15.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs16').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs16.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs16.classList.remove("org-btn");
                SOs16.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs17').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs17.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs17.classList.remove("org-btn");
                SOs17.classList.add("gray-btn");
                break;
            }  
        }
    }
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs18').innerText == responseData[i].reserved_seat_id){
            if(responseData[i].user_id == 0) {
                SOs18.classList.remove("org-btn");
                break;
            }
            else if(responseData[i].user_id == -1) {
                SOs18.classList.remove("org-btn");
                SOs18.classList.add("gray-btn");
                break;
            }  
        }
    }
    //요기에서 창배창석 설정
    if(localStorage.getItem("time") == "seatmove"){
        getList();
    }else if(localStorage.getItem("time") == "in") {
        getList();
    }else if (localStorage.getItem("time") == "oneday" || localStorage.getItem("time") == "commuter"){
        $('.basic').show();
        $('.special').hide();
        seatbasic.classList.remove("invisible");
        seatspecial.classList.add("invisible");
        special.classList.remove("sky-btn");
        basic.classList.add("sky-btn");
    }else if (localStorage.getItem("time") == "reserved") {
        $('.basic').hide();
        $('.special').show();
        seatspecial.classList.remove("invisible");
        seatbasic.classList.add("invisible");
        basic.classList.remove("sky-btn");
        special.classList.add("sky-btn");

    }
}
// ----------------------------현재 사용중인 이용권으로 이용석 지정석 구분 유저정보 불러오기-------------------------------------------
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
            } else if (responseData.receipt_kinds == "reserved_seat") {
                alert("지정석 입석");
                $('.basic').hide();
                $('.special').show();
                seatspecial.classList.remove("invisible");
                seatbasic.classList.add("invisible");
                basic.classList.remove("sky-btn");
                special.classList.add("sky-btn");            
            }

        },
        error: (error) => {
            alert("입실 퇴실 in 실패");
            console.log(error);
        },
    });
}

//선택한 좌석 클릭 시 버튼색깔 변경 및 좌석 이름 표시, org gray 버튼선택 불가능
$('.seat-content button').click(function () {
    if ($(this).hasClass('org-btn') == false) {
        if($(this).hasClass('gray-btn') == false) {
            if ($(this).hasClass('sky-btn') == true) {
                $(this).removeClass('sky-btn');
                $(".seat-select-name").attr('value', "");
            } else {
                $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
                $('.seat-select-name').attr('value', $(this).text());
            }
        }
    } else {
        $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
        $(".seat-select-name").attr('value', "");
    }
    if (localStorage.getItem("time") == "in") {
        const seatInput = document.querySelector(".seat-select-name");
        const inoutButton = document.querySelector(".next");

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
        const inoutButton = document.querySelector(".next");
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

// 홈으로 버튼 이벤트
$('.home-btn').click(function () {
    localStorage.clear();
    location.replace("/index");
});

// 다음단계 버튼 이벤트
$('.next-btn').click(function () {
    if ($('.seat-select-name').val() != "") {
        switch (localStorage.getItem("time")) {
            case "seatmove":
                localStorage.setItem("seatnum", $('.seat-select-name').val());
                location.href = "/index";
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


const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    console.log("로그아웃")
    location.replace("/logout");
}


//페이지가 실행될 때
window.onload = () => {
    nullList();
}