const reserved = document.querySelector(".reserved");
const nomal = document.querySelector(".nomal");
const locker = document.querySelector(".locker");

const seatBasic = document.querySelector(".seat-basic");
const seatSpecial = document.querySelector(".seat-special");
const lockerManage = document.querySelector(".locker-management-content");

// 지정석만 조회
reserved.onclick = () => {
    alert("지정석");
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

function loadSeat() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/loadseat",
        dataType: "json",
        success: (response) => {
            console.log(response);
            alert("좌석 불러오기");
        },
        error: (error) => {
            console.log(error);
        }
    })






}

window.onload = () => {
    loadSeat();
}