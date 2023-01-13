const reserved = document.querySelector(".reserved");
const nomal = document.querySelector(".nomal");
const locker = document.querySelector(".locker");

const seatBasic = document.querySelector(".seat-basic");
const seatSpecial = document.querySelector(".seat-special");
const lockerManage = document.querySelector(".locker-management-content");

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

const AL01 = document.querySelector(".AL01");
const AL02 = document.querySelector(".AL02");
const AL03 = document.querySelector(".AL03");
const AL04 = document.querySelector(".AL04");
const AL05 = document.querySelector(".AL05");
const AL06 = document.querySelector(".AL06");
const AL07 = document.querySelector(".AL07");
const AL08 = document.querySelector(".AL08");
const AL09 = document.querySelector(".AL09");
const AL10 = document.querySelector(".AL10");
const AL11 = document.querySelector(".AL11");
const AL12 = document.querySelector(".AL12");
const BL01 = document.querySelector(".BL01");
const BL02 = document.querySelector(".BL02");
const BL03 = document.querySelector(".BL03");
const BL04 = document.querySelector(".BL04");
const BL05 = document.querySelector(".BL05");
const BL06 = document.querySelector(".BL06");
const BL07 = document.querySelector(".BL07");
const BL08 = document.querySelector(".BL08");
const BL09 = document.querySelector(".BL09");
const BL10 = document.querySelector(".BL10");
const BL11 = document.querySelector(".BL11");
const BL12 = document.querySelector(".BL12");
const CL01 = document.querySelector(".CL01");
const CL02 = document.querySelector(".CL02");
const CL03 = document.querySelector(".CL03");
const CL04 = document.querySelector(".CL04");
const CL05 = document.querySelector(".CL05");
const CL06 = document.querySelector(".CL06");
const CL07 = document.querySelector(".CL07");



const basicSeatBtns = document.querySelectorAll(".basic-seat-btn");
const specialSeatBtns = document.querySelectorAll(".special-seat-btn");
const lockerBtns = document.querySelectorAll(".locker-btn");

// 지정석만 조회
reserved.onclick = () => {
    seatuserList();
    alert("지정석");
    seatSpecial.classList.remove("invisible");
    lockerManage.classList.add("invisible");
    seatBasic.classList.add("invisible");

    basicSeatBtns.forEach((basicSeatBtn, index) => {
        if (basicSeatBtn.classList.contains("sky-btn")) {
            basicSeatBtn.classList.remove("sky-btn");
        }
    })

    lockerBtns.forEach((lockerBtn, index) => {
        if (lockerBtn.classList.contains("sky-btn")) {
            lockerBtn.classList.remove("sky-btn");
        }
    })

}

// 일반석만 조회
nomal.onclick = () => {
    alert("일반석");
    seatSpecial.classList.add("invisible");
    lockerManage.classList.add("invisible");
    seatBasic.classList.remove("invisible");


    specialSeatBtns.forEach((specialSeatBtn, index) => {
        if (specialSeatBtn.classList.contains("sky-btn")) {
            specialSeatBtn.classList.remove("sky-btn");
        }
    })

    lockerBtns.forEach((lockerBtn, index) => {
        if (lockerBtn.classList.contains("sky-btn")) {
            lockerBtn.classList.remove("sky-btn");
        }
    })


}

// 사물함만 조회
locker.onclick = () => {
    lockeruserList();
    alert("사물함");
    seatSpecial.classList.add("invisible");
    lockerManage.classList.remove("invisible");
    seatBasic.classList.add("invisible");


    basicSeatBtns.forEach((basicSeatBtn, index) => {
        if (basicSeatBtn.classList.contains("sky-btn")) {
            basicSeatBtn.classList.remove("sky-btn");
        }
    })

    specialSeatBtns.forEach((specialSeatBtn, index) => {
        if (specialSeatBtn.classList.contains("sky-btn")) {
            specialSeatBtn.classList.remove("sky-btn");
        }
    })


}





$('.seat-content button').click(function () {

    if ($(this).hasClass('sky-btn') == true) {
        $(this).removeClass('sky-btn');

    } else if ($(this).hasClass('org-btn') == true) {
        $(this).addClass('sky-btn').siblings().removeClass('sky-btn');

    }
    else {
        $(this).addClass('sky-btn').siblings().removeClass('sky-btn');

    }

})

$('.AL button').click(function () {

    $('.BL button').removeClass('sky-btn');
    $('.CL button').removeClass('sky-btn');
})

$('.BL button').click(function () {

    $('.AL button').removeClass('sky-btn');
    $('.CL button').removeClass('sky-btn');
})

$('.CL button').click(function () {

    $('.BL button').removeClass('sky-btn');
    $('.AL button').removeClass('sky-btn');
})





// 유지보수 버튼 클릭시
const repairBtn = document.querySelector(".repair-btn");

let repairSeat = null;

repairBtn.onclick = () => {
    const seatBtns = document.querySelectorAll(".seat-btn");

    seatBtns.forEach((seatBtn, index) => {
        // 일반석
        if (seatBtn.classList.contains("basic-seat-btn")) {
            if (seatBtn.classList.contains("sky-btn")) {
                repairSeat = {
                    seat_id: seatBtn.textContent,
                    seat_category: "basic"
                }
                console.log(repairSeat);
            }
        } else if (seatBtn.classList.contains("special-seat-btn")) {
            if (seatBtn.classList.contains("sky-btn")) {
                repairSeat = {
                    seat_id: seatBtn.textContent,
                    seat_category: "reserved"
                }
                console.log(repairSeat);
            }
        } else if (seatBtn.classList.contains("locker-btn")) {
            if (seatBtn.classList.contains("sky-btn")) {
                repairSeat = {
                    seat_id: seatBtn.textContent,
                    seat_category: "locker"
                }
                console.log(repairSeat);
            }
        }


    })

    responseData.forEach(data => {
        if (data.seat_id == repairSeat.seat_id) {
            repairSeat.user_id = data.user_id;
            return false;
        } else if (data.reserved_seat_id == repairSeat.seat_id) {
            repairSeat.user_id = data.user_id;
            return false;
        } else if (data.locker_id == repairSeat.seat_id) {
            repairSeat.user_id = data.user_id;
        }

    })
    // 업데이트해야함

    // 좌석 종류로 나누기
    if (repairSeat.seat_category == "basic") {
        $.ajax({
            async: false,
            type: "put",
            url: "/api/admin/repairbasic",
            contentType: "application/json",
            data: JSON.stringify({
                seat_id: repairSeat.seat_id,
                user_id: repairSeat.user_id
            }),
            dataType: "json",
            success: (response) => {
                console.log(response);
                alert("일반석 유지보수 설정 성공");
                console.log(repairSeat);
                location.reload();
            },
            error: (error) => {
                console.log(error);
            }
        })
        console.log(repairSeat);
    } else if (repairSeat.seat_category == "reserved") {
        $.ajax({
            async: false,
            type: "put",
            url: "/api/admin/repairreserved",
            contentType: "application/json",
            data: JSON.stringify({
                seat_id: repairSeat.seat_id,
                user_id: repairSeat.user_id
            }),
            dataType: "json",
            success: (response) => {
                console.log(response);
                alert("지정석 유지보수 설정 성공");
                console.log(repairSeat);
                location.reload();
            },
            error: (error) => {
                console.log(error);
            }
        })
        console.log(repairSeat);

    } else if (repairSeat.seat_category == "locker") {
        $.ajax({
            async: false,
            type: "put",
            url: "/api/admin/repairlocker",
            contentType: "application/json",
            data: JSON.stringify({
                seat_id: repairSeat.seat_id,
                user_id: repairSeat.user_id
            }),
            dataType: "json",
            success: (response) => {
                console.log(response);
                alert("사물함 유지보수 설정 성공");
                console.log(repairSeat);
                location.reload();
            },
            error: (error) => {
                console.log(error);
            }

        })
        console.log(repairSeat);
    }

    // 이미 유지보수중인 좌석 선택후 유지보수 버튼 클릭시



}

// 강제퇴장 버튼 
const exitBtn = document.querySelector(".exit-btn");

exitBtn.onclick = () => {
    const seatBtns = document.querySelectorAll(".seat-btn");

    seatBtns.forEach((seatBtn, index) => {

        if (seatBtn.classList.contains("basic-seat-btn")) {
            if (seatBtn.classList.contains("sky-btn")) {
                repairSeat = {
                    seat_id: seatBtn.textContent,
                    seat_category: "basic"
                }
                console.log(repairSeat);
            }
        } else if (seatBtn.classList.contains("special-seat-btn")) {
            if (seatBtn.classList.contains("sky-btn")) {
                repairSeat = {
                    seat_id: seatBtn.textContent,
                    seat_category: "reserved"
                }
                console.log(repairSeat);
            }
        } else if (seatBtn.classList.contains("locker-btn")) {
            if (seatBtn.classList.contains("sky-btn")) {
                repairSeat = {
                    seat_id: seatBtn.textContent,
                    seat_category: "locker"
                }
                console.log(repairSeat);
            }
        }

    })

    responseData.forEach(data => {
        if (data.seat_id == repairSeat.seat_id) {
            repairSeat.user_id = data.user_id;
            return false;
        } else if (data.reserved_seat_id == repairSeat.seat_id) {
            repairSeat.user_id = data.user_id;
            return false;
        } else if (data.locker_id == repairSeat.seat_id) {
            repairSeat.user_id = data.user_id;
        }
    })

    if (repairSeat.seat_category == "basic") {

        console.log(repairSeat);

        if (repairSeat.user_id != -1) {

            $.ajax({
                async: false,
                type: "put",
                url: "/api/admin/exitbasic",
                contentType: "application/json",
                data: JSON.stringify({
                    seat_id: repairSeat.seat_id,
                    user_id: repairSeat.user_id
                }),
                dataType: "json",
                success: (response) => {
                    console.log(response);
                    alert("일반석 강제퇴장 성공");
                    location.reload();
                },
                error: (error) => {
                    console.log(error);
                }
            })
        }


    } else if (repairSeat.seat_category == "reserved") {

        console.log(repairSeat);
        if (repairSeat.user_id != -1) {

            $.ajax({
                async: false,
                type: "put",
                url: "/api/admin/exitreserved",
                contentType: "application/json",
                data: JSON.stringify({
                    seat_id: repairSeat.seat_id,
                    user_id: repairSeat.user_id
                }),
                dataType: "json",
                success: (response) => {
                    console.log(response);
                    alert("지정석 강제퇴장 성공");
                    location.reload();
                },
                error: (error) => {
                    console.log(error);
                }
            })
        }
    } else if (repairSeat.seat_category == "locker") {

        console.log(repairSeat);
        if (repairSeat.user_id != -1) {
            $.ajax({
                async: false,
                type: "put",
                url: "/api/admin/exitlocker",
                contentType: "application/json",
                data: JSON.stringify({
                    seat_id: repairSeat.seat_id,
                    user_id: repairSeat.user_id
                }),
                dataType: "json",
                success: (response) => {
                    console.log(response);
                    alert("사물함 강제퇴장 성공");
                    location.reload();
                },
                error: (error) => {
                    console.log(error);
                }
            })
        }
    }

}


// 자리이동 팝업 띄우기

const moveBtn = document.querySelector(".move-btn");
const selCate = document.querySelector(".sel_cate");
const selList = document.querySelector(".sel_list");
const selList2 = document.querySelector(".sel_list2");

const popupBack = document.querySelector(".popup-back");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const popupRegisterBtn = document.querySelector(".popup-register-btn");

moveBtn.onclick = () => {
    popupBack.classList.remove("invisible");
}

closeBtn.onclick = () => {
    popupBack.classList.add("invisible");
}

// 이동 팝업에서 변경버튼 클릭시
popupRegisterBtn.onclick = () => {
    ListInsData = null;

    ListInsData = {
        product: $("#ctg option:selected").val(),
        change: $("#ctg_nm option:selected").text(),

        today: $("#ctg_nm2 option:selected").text(),
        todayval: $("#ctg_nm2 option:selected").val()
    }
    if($("#ctg option:selected").val() != "none"){
        $.ajax({
            async: false,
            type: "put",
            url: "/api/admin/nowchange",
            contentType: "application/json",
            data: JSON.stringify(ListInsData),
            dataType: "json",
            success: (response) => {
                alert("변경완료 확인해봥~");
                location.reload();
    
                // $('.popup-close-btn').click();
                // $('.table-container table tr').remove();
                // pageload();
            },
            error: (error) => {
                // alert("이용권 등록 실패");
                console.log(error);
            }
        });
    }else {
        alert("선택하세요");
    }

}


selCate.onchange = () => {
    categoryList(selCate.value);
}


function categoryList(sVal) {

    let junho = {}
    if (sVal == "") {
        num = new Array("변경좌석");
        vnum = new Array("");

    } else if (sVal == "special") {
        $.ajax({
            async: false,
            type: "get",
            url: "/api/seat/check/seatuser",
            success: (response) => {
                alert("지정석");
                console.log(response.data);
                responseData = response.data;
                // seatmoveload(responseData);
            },
            error: (error) => {
                alert("지정석 사용중 불러오기 실패");
                console.log(error);
            },
        });
        selList.innerHTML = "";
        for (let i = 0; i < responseData.length; i++) {
            console.log(responseData.length);
            if(responseData[i].user_id == 0) {
                console.log(responseData[i]);
                selList.innerHTML += `
                <option value="${responseData[i].user_id}">${responseData[i].reserved_seat_id}</option>
            `;
            } 
        }
        selList2.innerHTML = "";
        for (let i = 0; i < responseData.length; i++) {
            
            if(responseData[i].user_id != 0 && responseData[i].user_id != -1){
                selList2.innerHTML += `
                <option value="${responseData[i].user_id}">${responseData[i].reserved_seat_id}</option>
            `;
            }
            
        }

    } else if (sVal == "nomal") {
        $.ajax({
            async: false,
            type: "get",
            url: "/api/seat/check/user",
            success: (response) => {
                alert("일반석");
                console.log(response.data);
                responseData = response.data;
                // seatmoveload(responseData);
            },
            error: (error) => {
                alert("지정석 사용중 불러오기 실패");
                console.log(error);
            },
        });
        selList.innerHTML = "";
        for (let i = 0; i < responseData.length; i++) {
            console.log(responseData.length);
            if(responseData[i].user_id == 0) {
                console.log(responseData[i]);
                selList.innerHTML += `
                <option value="${responseData[i].user_id}">${responseData[i].seat_id}</option>
            `;
            } 
        }
        selList2.innerHTML = "";
        for (let i = 0; i < responseData.length; i++) {
            
            if(responseData[i].user_id != 0 && responseData[i].user_id != -1){
                selList2.innerHTML += `
                <option value="${responseData[i].user_id}">${responseData[i].seat_id}</option>
            `;
            }
            
        }

    } else if (sVal == "locker") {
        
        $.ajax({
            async: false,
            type: "get",
            url: "/api/seat/check/locker",
            success: (response) => {
                alert("사물함");
                console.log(response.data);
                responseData = response.data;
                // seatmoveload(responseData);
            },
            error: (error) => {
                alert("지정석 사용중 불러오기 실패");
                console.log(error);
            },
        });
        selList.innerHTML = "";
        for (let i = 0; i < responseData.length; i++) {
            console.log(responseData.length);
            if(responseData[i].user_id == 0) {
                console.log(responseData[i]);
                selList.innerHTML += `
                <option value="${responseData[i].user_id}">${responseData[i].locker_id}</option>
            `;

            } 
        }
        selList2.innerHTML = "";
        for (let i = 0; i < responseData.length; i++) {
            
            if(responseData[i].user_id != 0 && responseData[i].user_id != -1){
                selList2.innerHTML += `
                <option value="${responseData[i].user_id}">${responseData[i].locker_id}</option>
            `;
            }
            
        }

    }
    

}
// ----------------------------일반석 유저정보 불러오기-------------------------------------------
function loadSeat() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check/user",
        dataType: "json",
        success: (response) => {
            console.log(response);
            // alert("일반좌석 불러오기");
            responseData = response.data;
            console.log(responseData);
            userload(responseData);
        },
        error: (error) => {
            console.log(error);
        }
    })
}
function userload(responseData) {
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os1').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os1.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os1.classList.remove("org-btn");
                Os1.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os2').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os2.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os2.classList.remove("org-btn");
                Os2.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os3').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os3.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os3.classList.remove("org-btn");
                Os3.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os4').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os4.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os4.classList.remove("org-btn");
                Os4.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os5').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os5.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os5.classList.remove("org-btn");
                Os5.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os6').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os6.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os6.classList.remove("org-btn");
                Os6.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os7').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os7.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os7.classList.remove("org-btn");
                Os7.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os8').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os8.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os8.classList.remove("org-btn");
                Os8.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os9').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os9.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os9.classList.remove("org-btn");
                Os9.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os10').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os10.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os10.classList.remove("org-btn");
                Os10.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os11').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os11.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os11.classList.remove("org-btn");
                Os11.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os12').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os12.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os12.classList.remove("org-btn");
                Os12.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os13').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os13.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os13.classList.remove("org-btn");
                Os13.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os14').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os14.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os14.classList.remove("org-btn");
                Os14.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os15').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os15.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os15.classList.remove("org-btn");
                Os15.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os16').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os16.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os16.classList.remove("org-btn");
                Os16.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os17').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os17.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os17.classList.remove("org-btn");
                Os17.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os18').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os18.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os18.classList.remove("org-btn");
                Os18.classList.add("gray-btn");
                break;
            }
        }
    }

    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os19').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os19.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os19.classList.remove("org-btn");
                Os19.classList.add("gray-btn");
                break;
            }
        }
    }

    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os20').innerText == responseData[i].seat_id) {
            if (responseData[i].user_id == 0) {
                Os20.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                Os20.classList.remove("org-btn");
                Os20.classList.add("gray-btn");
                break;
            }
        }
    }
}

// ----------------------------지정석 유저정보 불러오기-------------------------------------------
function seatuserList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check/seatuser",
        success: (response) => {
            // alert("지정석");
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
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs1').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs1.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs1.classList.remove("org-btn");
                SOs1.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs2').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs2.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs2.classList.remove("org-btn");
                SOs2.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs3').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs3.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs3.classList.remove("org-btn");
                SOs3.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs4').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs4.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs4.classList.remove("org-btn");
                SOs4.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs5').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs5.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs5.classList.remove("org-btn");
                SOs5.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs6').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs6.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs6.classList.remove("org-btn");
                SOs6.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs7').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs7.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs7.classList.remove("org-btn");
                SOs7.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs8').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs8.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs8.classList.remove("org-btn");
                SOs8.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs9').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs9.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs9.classList.remove("org-btn");
                SOs9.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs10').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs10.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs10.classList.remove("org-btn");
                SOs10.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs11').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs11.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs11.classList.remove("org-btn");
                SOs11.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs12').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs12.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs12.classList.remove("org-btn");
                SOs12.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs13').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs13.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs13.classList.remove("org-btn");
                SOs13.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs14').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs14.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs14.classList.remove("org-btn");
                SOs14.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs15').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs15.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs15.classList.remove("org-btn");
                SOs15.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs16').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs16.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs16.classList.remove("org-btn");
                SOs16.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs17').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs17.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs17.classList.remove("org-btn");
                SOs17.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs18').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs18.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs18.classList.remove("org-btn");
                SOs18.classList.add("gray-btn");
                break;
            }
        }
    }

    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('SOs19').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs19.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs19.classList.remove("org-btn");
                SOs19.classList.add("gray-btn");
                break;
            }
        }
    }

    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('Os20').innerText == responseData[i].reserved_seat_id) {
            if (responseData[i].user_id == 0) {
                SOs20.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs20.classList.remove("org-btn");
                SOs20.classList.add("gray-btn");
                break;
            }
        }
    }
}
// ----------------------------사물함 유저정보 불러오기-------------------------------------------
function lockeruserList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check/locker",
        success: (response) => {
            // alert("사물함");
            console.log(response.data);
            responseData = response.data;
            lockeruserload(responseData);
        },
        error: (error) => {
            alert("지정석 사용중 불러오기 실패");
            console.log(error);
        },
    });
}
function lockeruserload(responseData) {
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL01').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL01.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL01.classList.remove("org-btn");
                AL01.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL02').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL02.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL02.classList.remove("org-btn");
                AL02.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL03').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL03.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL03.classList.remove("org-btn");
                AL03.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL04').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL04.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL04.classList.remove("org-btn");
                AL04.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL05').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL05.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL05.classList.remove("org-btn");
                AL05.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL06').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL06.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL06.classList.remove("org-btn");
                AL06.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL07').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL07.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                SOs7.classList.remove("org-btn");
                SOs7.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL08').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL08.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL08.classList.remove("org-btn");
                AL08.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL09').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL09.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL09.classList.remove("org-btn");
                AL09.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL10').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL10.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL10.classList.remove("org-btn");
                AL10.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL11').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL11.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL11.classList.remove("org-btn");
                AL11.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL12').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                AL12.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                AL12.classList.remove("org-btn");
                AL12.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL01').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL01.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL01.classList.remove("org-btn");
                BL01.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL02').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL02.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL02.classList.remove("org-btn");
                BL02.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL03').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL03.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL03.classList.remove("org-btn");
                BL03.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL04').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL04.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL04.classList.remove("org-btn");
                BL04.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL05').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL05.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL05.classList.remove("org-btn");
                BL05.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL06').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL06.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL06.classList.remove("org-btn");
                BL06.classList.add("gray-btn");
                break;
            }
        }
    }

    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL07').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL07.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL07.classList.remove("org-btn");
                BL07.classList.add("gray-btn");
                break;
            }
        }
    }

    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL08').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL08.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL08.classList.remove("org-btn");
                BL08.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL09').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL09.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL09.classList.remove("org-btn");
                BL09.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL10').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL10.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL10.classList.remove("org-btn");
                BL10.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL11').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL11.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL11.classList.remove("org-btn");
                BL11.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('BL12').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                BL12.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                BL12.classList.remove("org-btn");
                BL12.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('CL01').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                CL01.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                CL01.classList.remove("org-btn");
                CL01.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('CL02').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                CL02.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                CL02.classList.remove("org-btn");
                CL02.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('CL03').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                CL03.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                CL03.classList.remove("org-btn");
                CL03.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('CL04').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                CL04.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                CL04.classList.remove("org-btn");
                CL04.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('CL05').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                CL05.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                CL05.classList.remove("org-btn");
                CL05.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('CL06').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                CL06.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                CL06.classList.remove("org-btn");
                CL06.classList.add("gray-btn");
                break;
            }
        }
    }
    for (i = 0; i < responseData.length; i++) {
        if (document.getElementById('CL07').innerText == responseData[i].locker_id) {
            if (responseData[i].user_id == 0) {
                CL07.classList.remove("org-btn");
                break;
            }
            else if (responseData[i].user_id == -1) {
                CL07.classList.remove("org-btn");
                CL07.classList.add("gray-btn");
                break;
            }
        }
    }

}

window.onload = () => {
    loadSeat();
}