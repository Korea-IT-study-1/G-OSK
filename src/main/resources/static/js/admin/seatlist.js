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


// 지정석만 조회
reserved.onclick = () => {
    alert("지정석");
    seatuserList();
    seatSpecial.classList.remove("invisible");
    lockerManage.classList.add("invisible");
    seatBasic.classList.add("invisible");
}

// 일반석만 조회
nomal.onclick = () => {
    alert("일반석");
    seatSpecial.classList.add("invisible");
    lockerManage.classList.add("invisible");
    seatBasic.classList.remove("invisible");
}

// 사물함만 조회
locker.onclick = () => {
    alert("사물함");
    lockeruserList();
    seatSpecial.classList.add("invisible");
    lockerManage.classList.remove("invisible");
    seatBasic.classList.add("invisible");

}

// const seatBtns = document.querySelectorAll(".seat-btn");

// seatBtns.forEach((seatBtn, index) => {
//     seatBtn.onclick = () => {
//          seatBtn.classList.toggle("selected-seat");
//          seatBtn.classList.toggle("seatborder");
//     }
// });

// const repairBtn = document.querySelector(".repair-btn");

// repairBtn.onclick = () => {
//     seatBtns.forEach((seatBtn, index) => {
//         if (seatBtn.classList.contains("selected-seat")) {
//              seatBtn.classList.add("repaire-seat");
//              seatBtn.classList.remove("seatborder");
//         } else if (seatBtn.classList.contains("repaire-seat")) {
//             seatBtn.classList.remove("repaire-seat");
//             seatBtn.classList.remove("seatborder");
//         }

//     })
// }


const basicSeatBtns = document.querySelectorAll(".basic-seat-btn");
const specialSeatBtns = document.querySelectorAll(".special-seat-btn");
const lockerBtns = document.querySelectorAll(".locker-btn");

basicSeatBtns.forEach((basicBtn, index) => {
    basicBtn.onclick = () => {
        console.log(basicBtn.textContent);
        basicBtn.classList.toggle("selected-seat");
        basicBtn.classList.toggle("seatborder");
    }
})
specialSeatBtns.forEach((specialSeatBtn, index) => {
    specialSeatBtn.onclick = () => {
        console.log(specialSeatBtn.textContent);
        specialSeatBtn.classList.toggle("selected-seat");
        specialSeatBtn.classList.toggle("seatborder");
    }
})
lockerBtns.forEach((lockerBtn, index) => {
    lockerBtn.onclick = () => {
        console.log(lockerBtn.textContent);
        lockerBtn.classList.toggle("selected-seat");
        lockerBtn.classList.toggle("seatborder");
    }
});







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
    alert("변경");
}


selCate.onchange = () => {
    categoryList(selCate.value);
}


function categoryList(sVal) {

    if (sVal == "") {
        num = new Array("소분류");
        vnum = new Array("");

    } else if (sVal == "special" || sVal == "nomal" || sVal == "locker") {

        selList.innerHTML = "";
        selList2.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            selList.innerHTML += `
            <option value="${i}">${i}</option>
            `;
        }

        for (let i = 0; i < 3; i++) {
            selList2.innerHTML += `
                <option value="2">DATA</option>
            `;
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
            alert("일반좌석 불러오기");
            responseData = response.data;
            userload(responseData);
        },
        error: (error) => {
            console.log(error);
        }
    })
}
function userload(responseData) {
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
}
// ----------------------------지정석 유저정보 불러오기-------------------------------------------
function seatuserList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check/seatuser",
        success: (response) => {
            alert("지정석");
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
            SOs1.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs2').innerText == responseData[i].reserved_seat_id){
            SOs2.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs3').innerText == responseData[i].reserved_seat_id){
            SOs3.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs4').innerText == responseData[i].reserved_seat_id){
            SOs4.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs5').innerText == responseData[i].reserved_seat_id){
            SOs5.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs6').innerText == responseData[i].reserved_seat_id){
            SOs6.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs7').innerText == responseData[i].reserved_seat_id){
            SOs7.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs8').innerText == responseData[i].reserved_seat_id){
            SOs8.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs9').innerText == responseData[i].reserved_seat_id){
            SOs9.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs10').innerText == responseData[i].reserved_seat_id){
            SOs10.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs11').innerText == responseData[i].reserved_seat_id){
            SOs11.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs12').innerText == responseData[i].reserved_seat_id){
            SOs12.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs13').innerText == responseData[i].reserved_seat_id){
            SOs13.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs14').innerText == responseData[i].reserved_seat_id){
            SOs14.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs15').innerText == responseData[i].reserved_seat_id){
            SOs15.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs16').innerText == responseData[i].reserved_seat_id){
            SOs16.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs17').innerText == responseData[i].reserved_seat_id){
            SOs17.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs18').innerText == responseData[i].reserved_seat_id){
            SOs18.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs19').innerText == responseData[i].reserved_seat_id){
            SOs19.classList.remove("org-btn");
        }
        else if (document.getElementById('SOs20').innerText == responseData[i].reserved_seat_id){
            SOs20.classList.remove("org-btn");
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
            alert("사물함");
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
    for(i = 0; i < responseData.length; i++) {
        if (document.getElementById('AL01').innerText == responseData[i].locker_id){
            AL01.classList.remove("org-btn");
        }
        else if (document.getElementById('AL02').innerText == responseData[i].locker_id){
            AL02.classList.remove("org-btn");
        }
        else if (document.getElementById('AL03').innerText == responseData[i].locker_id){
            AL03.classList.remove("org-btn");
        }
        else if (document.getElementById('AL04').innerText == responseData[i].locker_id){
            AL04.classList.remove("org-btn");
        }
        else if (document.getElementById('AL05').innerText == responseData[i].locker_id){
            AL05.classList.remove("org-btn");
        }
        else if (document.getElementById('AL06').innerText == responseData[i].locker_id){
            AL06.classList.remove("org-btn");
        }
        else if (document.getElementById('AL07').innerText == responseData[i].locker_id){
            AL07.classList.remove("org-btn");
        }
        else if (document.getElementById('AL08').innerText == responseData[i].locker_id){
            AL08.classList.remove("org-btn");
        }
        else if (document.getElementById('AL09').innerText == responseData[i].locker_id){
            AL09.classList.remove("org-btn");
        }
        else if (document.getElementById('AL10').innerText == responseData[i].locker_id){
            AL10.classList.remove("org-btn");
        }
        else if (document.getElementById('AL11').innerText == responseData[i].locker_id){
            AL11.classList.remove("org-btn");
        }
        else if (document.getElementById('AL12').innerText == responseData[i].locker_id){
            AL12.classList.remove("org-btn");
        }
        else if (document.getElementById('BL01').innerText == responseData[i].locker_id){
            BL01.classList.remove("org-btn");
        }
        else if (document.getElementById('BL02').innerText == responseData[i].locker_id){
            BL02.classList.remove("org-btn");
        }
        else if (document.getElementById('BL03').innerText == responseData[i].locker_id){
            BL03.classList.remove("org-btn");
        }
        else if (document.getElementById('BL04').innerText == responseData[i].locker_id){
            BL04.classList.remove("org-btn");
        }
        else if (document.getElementById('BL05').innerText == responseData[i].locker_id){
            BL05.classList.remove("org-btn");
        }
        else if (document.getElementById('BL06').innerText == responseData[i].locker_id){
            BL06.classList.remove("org-btn");
        }
        else if (document.getElementById('BL07').innerText == responseData[i].locker_id){
            BL07.classList.remove("org-btn");
        }
        else if (document.getElementById('BL08').innerText == responseData[i].locker_id){
            BL08.classList.remove("org-btn");
        }else if (document.getElementById('BL09').innerText == responseData[i].locker_id){
            BL09.classList.remove("org-btn");
        }else if (document.getElementById('BL10').innerText == responseData[i].locker_id){
            BL10.classList.remove("org-btn");
        }else if (document.getElementById('BL11').innerText == responseData[i].locker_id){
            BL11.classList.remove("org-btn");
        }else if (document.getElementById('BL12').innerText == responseData[i].locker_id){
            BL12.classList.remove("org-btn");
        }
        else if (document.getElementById('CL01').innerText == responseData[i].locker_id){
            CL01.classList.remove("org-btn");
        }
        else if (document.getElementById('CL02').innerText == responseData[i].locker_id){
            CL02.classList.remove("org-btn");
        }
        else if (document.getElementById('CL03').innerText == responseData[i].locker_id){
            CL03.classList.remove("org-btn");
        }else if (document.getElementById('CL04').innerText == responseData[i].locker_id){
            CL04.classList.remove("org-btn");
        }else if (document.getElementById('CL05').innerText == responseData[i].locker_id){
            CL05.classList.remove("org-btn");
        }else if (document.getElementById('CL06').innerText == responseData[i].locker_id){
            CL06.classList.remove("org-btn");
        }else if (document.getElementById('CL07').innerText == responseData[i].locker_id){
            CL07.classList.remove("org-btn");
        }

    }
}

window.onload = () => {
    loadSeat();
}