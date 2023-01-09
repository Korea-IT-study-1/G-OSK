// 전체 리스트 불러오기
const userTable = document.querySelector(".user-table");

function loadUserList() {

    $.ajax({
        async: false,
        type: "get",
        url: "/api/admin/loaduserlist",
        dataType: "json",
        success: (response) => {
            alert("성공");
            responseData = response.data;
            console.log(responseData);
        },
        error: (error) => {
            alert("실패");
            console.log(error);
        }
    })

    responseData.forEach((user, index) => {


        userTable.innerHTML += `
                    <tr>
                        <td>${user.user_phone}</td>
                        <td><button class="btn user-info-btn">정보</button></td>
                        <td><button class="btn update-btn">수정</button></td>
                        <td><button class="btn dlt-btn">삭제</button></td>
                    </tr>
    `



    })

}

function buttonClick() {

    const updateBtns = document.querySelectorAll(".update-btn");
    const popupBack = document.querySelector(".popup-back");
    const popupUpdateBtn = document.querySelector(".popup-update-btn");
    const popupCloseBtn = document.querySelector(".popup-close-btn");

    const beforeInput = document.querySelectorAll(".before-input")

    updateBtns.forEach((updateBtn, index) => {
        updateBtn.onclick = () => {
            popupBack.classList.remove("invisible");

            beforeInput[0].value = responseData[index].user_phone;







        }

    })


    popupCloseBtn.onclick = () => {
        popupBack.classList.add("invisible");
    }

    // 수정 팝업에서 수정버튼 클릭시
    let afterInputs = null;

    popupUpdateBtn.onclick = () => {
        alert("수정");
        const afterInput = document.querySelectorAll(".after-input");


        afterInputs = {
            user_phone: beforeInput[0].value,
            after_phone: afterInput[0].value,
            after_pw: afterInput[1].value
        }

        $.ajax({
            async: false,
            type: "put",
            url: "/api/admin/updateuser/" + beforeInput[0].value + "/" + afterInput[0].value + "/" + afterInput[1].value,
            contentType: "application/json",
            data: JSON.stringify(afterInputs),
            dataType: "json",
            success: (success) => {
                console.log(success);
                console.log(afterInputs);
            },
            error: (error) => {
                console.log(error);
            }

        })
    }


    const userInfoBtns = document.querySelectorAll(".user-info-btn");
    const infoPopupBack = document.querySelector(".info-popup-back");

    userInfoBtns.forEach((userInfoBtn, index) => {
        userInfoBtn.onclick = () => {
            infoPopupBack.classList.onclick = () => {

            }
        }
    })

    const dltBtns = document.querySelectorAll(".dlt-btn");

    dltBtns.forEach((dltBtn, index) => {
        dltBtn.onclick = () => {

            // console.log(responseData[index]);

            $.ajax({
                async: false,
                type: "delete",
                url: "/api/admin/deleteuser",
                data: responseData[index],
                dataType: "json",
                success: (response) => {
                    console.log(response);
                    location.reload();
                },
                error: (error) => {
                    console.log(error);
                }
            })


        }
    })



}






window.onload = () => {
    loadUserList();
    buttonClick();


}