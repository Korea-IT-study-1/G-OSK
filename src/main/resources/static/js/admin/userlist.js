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
                location.reload();
            },
            error: (error) => {
                console.log(error);
            }

        })
    }


    const userInfoBtns = document.querySelectorAll(".user-info-btn");
    const infoPopupBack = document.querySelector(".info-popup-back");
    const infoCloseBtn = document.querySelector(".info-close-btn");

    userInfoBtns.forEach((userinfoBtn, index) => {
        userinfoBtn.onclick = () => {
            infoPopupBack.classList.remove("invisible");

            console.log(responseData[index].user_phone);

            infoData = null;

            infoData = {
                user_phone: responseData[index].user_phone
            }

            console.log(infoData);


            const infoDiv = document.querySelector(".info-div");
            const userInfoTable = document.querySelector(".user-info-table");

            infoDiv.innerHTML = "";


            $.ajax({
                async: false,
                type: "get",
                url: "/api/admin/loaduserinfo",
                data: infoData,
                dataType: "json",
                success: (response) => {
                    alert("성공");
                    console.log(response);
                    responseInfoData = response.data;
                },
                error: (error) => {
                    alert("실패");
                    console.log(error);
                }
            })

            console.log(responseInfoData[0].user_phone);
            console.log(responseInfoData.slice(-1)[0].user_out);

            if (responseInfoData.slice(-1)[0].user_out != null) {
                infoDiv.innerHTML += `
                    <p>전화번호 : ${responseInfoData[0].user_phone}</p>
                    <p>사용중인 좌석 : ${responseInfoData.slice(-1)[0].user_out}</p>
                    
            `
            } else {
                infoDiv.innerHTML += `
                    <p>전화번호 : ${responseInfoData[0].user_phone}</p>
                    <p>사용중인 좌석 : 없음</p>
                    
            `
            }

            userInfoTable.innerHTML = "";

            let seatname = null;

            responseInfoData.forEach((data, index) => {

                if (data.receipt_kinds == "ondeday") {
                    seatname = "일반석";
                } else if (data.receipt_kinds == "commuter_day") {
                    seatname = "일반석";
                } else if (data.receipt_kinds == "commuter_time") {
                    seatname = "일반석";
                } else if (data.receipt_kinds == "reserved_seat") {
                    seatname = "지정석";
                } else if (data.receipt_kinds == "locker") {
                    seatname = "사물함";
                }

                if (data.receipt_time != 0) {
                    userInfoTable.innerHTML += `
                        <tr>
                            <td>${seatname}
                                <br>
                                ${data.receipt_time} 시간
                            </td>
                            <td>${data.receipt_price} 원</td>
                            <td>${data.receipt_start_date.split(" ")[0]}</td>
                        </tr>

                `

                } else if (data.receipt_day != 0) {
                    userInfoTable.innerHTML += `
                        <tr>
                            <td>${seatname}
                                <br>
                                ${data.receipt_day} 주
                            </td>
                            <td>${data.receipt_price} 원</td>
                            <td>${data.receipt_start_date.split(" ")[0]}</td>
                        </tr>

                `
                }




            })




        }

    })

    infoCloseBtn.onclick = () => {
        infoPopupBack.classList.add("invisible");
    }

    // 삭제
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