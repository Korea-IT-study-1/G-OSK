// 등록 팝업
const registerBtn = document.querySelector(".register-btn");
const popup = document.querySelector(".popup");
const popupBack = document.querySelector(".popup-back");
const closeBtn = document.querySelector(".close-btn");
const popupRegisterBtn = document.querySelector(".popup-register-btn");

registerBtn.onclick = () => {
    // popup.classList.remove("invisible");
    popupBack.classList.remove("invisible");
}

closeBtn.onclick = () => {
    // popup.classList.add("invisible");
    popupBack.classList.add("invisible");
}

let productInfo = {
    seat: null,
    time: null,
    name: null,
    price: null
};

// 등록 팝업에서 등록버튼 클릭시
popupRegisterBtn.onclick = () => {
    alert("등록");

    const seatSelect = document.querySelector("#seat-select");
    const timeSelect = document.querySelector("#time-select");
    const productName = document.querySelector("#product-name");
    const productPrice = document.querySelector("#product-price");


    console.log(seatSelect.value);
    console.log(timeSelect.value);
    console.log(productName.value);
    console.log(productPrice.value);

    productInfo.seat = seatSelect.value;
    productInfo.time = timeSelect.value;
    productInfo.name = productName.value;
    productInfo.price = productPrice.value;



    console.log(productInfo);

    $.ajax({
        async: false,
        type: "post",
        url: "/api/admin/product/registration",
        data: productInfo,
        dataType: "json",
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
        }
    })




}

// 수정 팝업
const updateBtns = document.querySelectorAll(".update-btn");
const popupBack2 = document.querySelector(".popup-back2");
const popup2UpdateBtn = document.querySelector(".popup2-update-btn");
const popup2CloseBtn = document.querySelector(".popup2-close-btn");

updateBtns.forEach((updateBtn, index) => {
    updateBtn.onclick = () => {
        popupBack2.classList.remove("invisible");
    }

})

popup2CloseBtn.onclick = () => {
    popupBack2.classList.add("invisible");
}

// 수정 팝업에서 수정버튼 클릭시
popup2UpdateBtn.onclick = () => {
    alert("수정");
}

const reserved = document.querySelector(".reserved");
const nomal = document.querySelector(".nomal");

// 지정석만 조회
reserved.onclick = () => {
    $('.table-container table tr').remove();
    productList("지정석");
}

// 일반석만 조회
nomal.onclick = () => {
    $('.table-container table tr').remove();
    productList("일반석");
}

//상품리스트 불러오기
function productList(name) {

    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/productlist",
        data: { name: name },
        dataType: "json",
        success: (response) => {
            responseData = response.data;
            loadList(responseData, name);
            // responseData를 JSON 형식으로 보여주기
            // console.log(JSON.stringify(responseData[]));
        },
        error: (error) => {
            alert("상품 리스트 불러오기 실패");
            console.log(error);
        },
    });
}

function loadList(responseData, name) {

    const borders = document.querySelector(".prouct-table");

    responseData.forEach((border, index) => {

        borders.innerHTML += `
            <tr>
                <td>` + name + `</td>
                <td>${border.pdname}
                    <br>${border.time}
                </td>
                <td><span>${border.price}</span></td>
                <td><button class="btn update-btn">수정</button></td>
                <td><button class="btn dlt-btn">삭제</button></td>
            </tr>
        `;

    });
}

window.onload = () => {
    productList("지정석");
}


