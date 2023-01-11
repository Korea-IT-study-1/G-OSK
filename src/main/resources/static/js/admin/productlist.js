// 등록 팝업
const registerBtn = document.querySelector(".register-btn");
const popup = document.querySelector(".popup");
const popupBack = document.querySelector(".popup-back");
const popupcloseBtn = document.querySelector(".popup-close-btn");
const popupRegisterBtn = document.querySelector(".popup-register-btn");
const pdname = document.querySelector(".pdname input");
const pdprice = document.querySelector(".pdprice input");

registerBtn.onclick = () => {
    popupBack.classList.remove("invisible");
}

popupcloseBtn.onclick = () => {
    popupBack.classList.add("invisible");
    pdname.value = null;
    pdprice.value = null;
    pageload();
}

function changeSelection(){
    if($("#seat-select option:selected").val() == "normal"){
        $("#time-select option").remove();
        $("#time-select").append("<option value='oneday'>원데이</option>");
        $("#time-select").append("<option value='time'>시간권</option>");
        $("#time-select").append("<option value='day'>기간권</option>");
    } else {
        $("#time-select option").remove();
        $("#time-select").append("<option value='day'>기간권</option>");
    }

    changePdname();
}

function changePdname(){
    if($("#time-select option:selected").val() == "day"){
        $(".pdname p").text("주");
    } else {
        $(".pdname p").text("시간");
    }
}

let productInfo = {
    seat: null,
    time: null,
    name: null,
    price: null
};

// 등록 팝업에서 등록버튼 클릭시
popupRegisterBtn.onclick = () => {

    if($(".pdname input").val() == "" || $(".pdprice input").val() == ""){
        alert("제품정보에 빈 값이 존재합니다. 입력해주세요!!")
        return;
    }

    let ListInsData = null;

    ListInsData = {
        name: $("#seat-select option:selected").text(),
        subname: $("#time-select option:selected").text(),
        time: $(".pdname input").val(),
        price: $(".pdprice input").val()
    }

    if (OverlapChk(ListInsData) == true){
        alert("이미 생성된 제품입니다!!");
        return;
    }

    $.ajax({
        async: false,
        type: "post",
        url: "/api/admin/listinsert",
        contentType: "application/json",
        data: JSON.stringify(ListInsData),
        dataType: "json",
        success: (response) => {
            alert("이용권 등록 완료");
            $('.table-container table tr').remove();
            pageload();
        },
        error: (error) => {
            alert("이용권 등록 실패");
            console.log(error);
        }
    });
}

function OverlapChk(ListInsData){
    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/pdoverlapchk",
        contentType: "application/json",
        data: JSON.stringify(ListInsData),
        dataType: "json",
        success: (response) => {
            alert("이용권 등록 완료");
            $('.table-container table tr').remove();
            pageload();
        },
        error: (error) => {
            alert("이용권 등록 실패");
            console.log(error);
        }
    });
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
const locker = document.querySelector(".locker");

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

//사물함만 조회
locker.onclick = () => {
    $('.table-container table tr').remove();
    productList("사물함");
}


//상품리스트 불러오기
function productList(name) {

    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/productlist",
        data: {name: name},
        dataType: "json",
        success: (response) => {
            responseData = response.data;
            console.log(responseData);
            loadList(responseData, name);
            delbtn();
        },
        error: (error) => {
            alert("상품 리스트 불러오기 실패");
            console.log(error);
        },
    });
}

function loadList(responseData, name){

    const borders = document.querySelector(".product-table");

    responseData.forEach((border, index) => {

        borders.innerHTML += `
            <tr class = "${border.id}">
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

$('.product-category li').click(function(){
    if ($(this).hasClass('org-li') == false){
        $(this).siblings().removeClass('org-li');
        $(this).addClass('org-li');
    }
})

function delbtn(){
    const dels = document.querySelectorAll(".dlt-btn");

    dels.forEach((del,index) => {

        del.onclick = () => {

            if(confirm("해당 이용권을 삭제하시겠습니까?") == true){
                btn_address("DELETE", index)
            }

        }
    })

}

function btn_address(btn_name, index){

    let ListData = null;

    ListData = {
        product_id: $('.product-table tr:eq('+index+')').attr("class"),
        product_name: $('.product-table tr:eq('+index+')').children('td:eq(0)').text(),
        product_secondname: $('.product-table tr:eq('+index+')').children('td:eq(1)').text().split("\n")[0]
    }

    if(btn_name == "DELETE"){
        $.ajax({
            async: false,
            type: "delete",
            url: "/api/admin/listdelete",
            contentType: "application/json",
            data: JSON.stringify(ListData),
            dataType: "json",
            success: (response) => {
                alert("이용권 삭제 완료");
                $('.table-container table tr').remove();
                pageload();
            },
            error: (error) => {
                alert("이용권 삭제 실패");
                console.log(error);
            }
        });
    } else {
        
    }
}

function pageload(){
    if($('.reserved').hasClass('org-li') == true){
        productList("지정석");
    } else if($('.nomal').hasClass('org-li') == true){
        productList("일반석");
    } else {
        productList("사물함");
    }
}

window.onload = () => {
    pageload();
}


