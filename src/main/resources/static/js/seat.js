function getList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/seat/check",
        dataType: "json",
        success: (response) => {
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


const seatbasic = document.querySelector(".seat-basic");
const seatspecial = document.querySelector(".seat-special");
const basic = document.querySelector(".basic");
const special = document.querySelector(".special");

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
    getList();
}