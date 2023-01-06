let today = new Date();

let today2 = new Date();
let today3 = new Date();

let monthAgo = today2.setMonth(today2.getMonth() - 1);
let month3Ago = today3.setMonth(today3.getMonth() - 3);




const logOutBtn = document.querySelector(".logout-btn");

function getuserList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/mypage/receipt/all",
        success: (response) => {
            alert("유저 정보 가져오기 성공")
            console.log(response.data);
            responseData = response.data;
        },
        error: (error) => {
            alert("유저 정보 가져오기 실패");
            console.log(response.data);
            console.log(error);
        },
    });
}
// function userload(responseData) {
//     const seat = document.querySelector(".sales-table");

//     responseData.forEach((seat, index) => {
//         if (seat.receipt_onoff == 1) {
//             receipt_onoff = "사용중"
//         } else if (seat.receipt_onoff == 0) {
//             receipt_onoff = "사용완료"
//         }

//         if (seat.receipt_time == 0) {
//             seat.innerHTML += `
//             <table class="sales-table">
//                     <colgroup>
//                         <col width="20%">
//                         <col width="20%">
//                         <col width="20%">
//                         <col width="20%">
//                         <col width="20%">
//                     </colgroup>
//                     <tr>
//                         <td>${seat.index}</td>
//                         <td>${seat.receipt_start_date}</td>
//                         <td>${seat.receipt_day}주 권</td>
//                         <td>${seat.receipt_price} 원</td>
//                         <td>${receipt_onoff}</td>
//                     </tr>
//                 </table>
//             `;
//         } else if (seat.receipt_day == 0) {
//             seat.innerHTML += `
//             <li>
//                 <p>
//                     <i class="fa-solid fa-ticket"></i>&nbsp&nbsp&nbsp&nbsp&nbsp
//                     <span>${border.time}</span>
//                 </p>
//                 <div>${border.price}</div>
//             </li>
//             `;
//         }
//     });
// }

function loadList() {
    const listTable = document.querySelector(".sales-table");

    listTable.innerHTML = "";

    responseData.forEach((product, index) => {

        let test1 = new Date(product.receipt_start_date).toLocaleString()

        index = index + 1;

        if (product.receipt_kinds == "oneday") {
            receipt_kinds = "원데이";
        } else if (product.receipt_kinds == "commuter_time") {
            receipt_kinds = "정액권 시간권";
        } else if (product.receipt_kinds == "commuter_day") {
            receipt_kinds = "정액권 기간권";
        } else if (product.receipt_kinds == "reserved_seat") {
            receipt_kinds = "지정석";
        } else if (product.receipt_kinds == "locker") {
            receipt_kinds = "사물함";
        }

        if (product.receipt_onoff == 1) {
            receipt_onoff = "사용중"
        } else if (product.receipt_onoff == 0) {
            receipt_onoff = "사용완료"
        }

        // 사용권이 시간일때
        if (product.receipt_time != 0) {
            listTable.innerHTML += `
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${index}</td>
                        <td>${product.receipt_start_date.split("T")[0]}</td>
                        <td>${receipt_kinds}
                            <br>
                            ${product.receipt_time} 시간
                        </td>
                        <td>${product.receipt_price} 원</td>
                        <td>${receipt_onoff}</td>

                    </tr>
        `
            // 사용권이 기간일때
        } else if (product.receipt_day != 0) {
            listTable.innerHTML += `
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${index}</td>
                        <td>${product.receipt_start_date.split("T")[0]}</td>
                        <td>${receipt_kinds}
                            <br>
                            ${product.receipt_day} 주
                        </td>
                        <td>${product.receipt_price} 원</td>
                        <td>${receipt_onoff}</td>

                    </tr>
        `
        }
        // console.log(new Date(product.receipt_start_date).toLocaleString());
        let today = new Date().toLocaleString();
        // console.log(today);

        // if (today > new Date(product.receipt_start_date).toLocaleString()) {
        //     console.log("1");
        // } else {
        //     console.log("0");
        // }

    })



    const todayBtn = document.querySelector(".today-btn");
    const monthBtn = document.querySelector(".month-btn");
    const month3Btn = document.querySelector(".month3-btn");


    // 오늘
    todayBtn.onclick = () => {
        const listTable = document.querySelector(".sales-table");

        listTable.innerHTML = "";

        $.ajax({
            async: false,
            type: "get",
            url: "/api/mypage/receipt/today",
            success: (response) => {
                alert("유저 정보 가져오기 성공")
                console.log(response.data);
                responseData = response.data;
            },
            error: (error) => {
                alert("유저 정보 가져오기 실패");
                console.log(response.data);
                console.log(error);
            },
        });

        responseData.forEach((product, index) => {
            // let today = new Date().toISOString().substring(0, 10);

            index = index + 1;

            if (product.receipt_kinds == "oneday") {
                receipt_kinds = "원데이";
            } else if (product.receipt_kinds == "commuter_time") {
                receipt_kinds = "정액권 시간권";
            } else if (product.receipt_kinds == "commuter_day") {
                receipt_kinds = "정액권 기간권";
            } else if (product.receipt_kinds == "reserved_seat") {
                receipt_kinds = "지정석";
            } else if (product.receipt_kinds == "locker") {
                receipt_kinds = "사물함";
            }

            if (product.receipt_onoff == 1) {
                receipt_onoff = "사용중"
            } else if (product.receipt_onoff == 0) {
                receipt_onoff = "사용완료"
            }

            console.log(today);
            console.log(today.toISOString().substring(0, 10));
            if ((product.receipt_start_date.split("T")[0] == today.toISOString().substring(0, 10))) {
                // 사용권이 시간일때
                if (product.receipt_time != 0) {
                    listTable.innerHTML += `
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${index}</td>
                        <td>${product.receipt_start_date.split("T")[0]}</td>
                        <td>${receipt_kinds}
                            <br>
                            ${product.receipt_time} 시간
                        </td>
                        <td>${product.receipt_price} 원</td>
                        <td>${receipt_onoff}</td>

                    </tr>
        `
                    // 사용권이 기간일때
                } else if (product.receipt_day != 0) {
                    listTable.innerHTML += `
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${index}</td>
                        <td>${product.receipt_start_date.split("T")[0]}</td>
                        <td>${receipt_kinds}
                            <br>
                            ${product.receipt_day} 주
                        </td>
                        <td>${product.receipt_price} 원</td>
                        <td>${receipt_onoff}</td>

                    </tr>
        `
                }
            };

        })

    }
    // 1개월
    monthBtn.onclick = () => {
        const listTable = document.querySelector(".sales-table");


        listTable.innerHTML = "";

        $.ajax({
            async: false,
            type: "get",
            url: "/api/mypage/receipt/month",
            success: (response) => {
                alert("유저 정보 가져오기 성공")
                console.log(response.data);
                responseData = response.data;
            },
            error: (error) => {
                alert("유저 정보 가져오기 실패");
                console.log(response.data);
                console.log(error);
            },
        });

        responseData.forEach((product, index) => {

            index = index + 1;

            if (product.receipt_kinds == "oneday") {
                receipt_kinds = "원데이";
            } else if (product.receipt_kinds == "commuter_time") {
                receipt_kinds = "정액권 시간권";
            } else if (product.receipt_kinds == "commuter_day") {
                receipt_kinds = "정액권 기간권";
            } else if (product.receipt_kinds == "reserved_seat") {
                receipt_kinds = "지정석";
            } else if (product.receipt_kinds == "locker") {
                receipt_kinds = "사물함";
            }

            if (product.receipt_onoff == 1) {
                receipt_onoff = "사용중"
            } else if (product.receipt_onoff == 0) {
                receipt_onoff = "사용완료"
            }

            // console.log(today.toISOString().substring(0, 10));
            // console.log(today2.toISOString().substring(0, 10));

            // let today = new Date().toISOString().substring(0, 10);
            if ((product.receipt_start_date.split("T")[0] <= today.toISOString().substring(0, 10)) &&
                (product.receipt_start_date.split("T")[0] >= today2.toISOString().substring(0, 10))) {



                // 사용권이 시간일때
                if (product.receipt_time != 0) {
                    listTable.innerHTML += `
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${index}</td>
                        <td>${product.receipt_start_date.split("T")[0]}</td>
                        <td>${receipt_kinds}
                            <br>
                            ${product.receipt_time} 시간
                        </td>
                        <td>${product.receipt_price} 원</td>
                        <td>${receipt_onoff}</td>

                    </tr>
        `
                    // 사용권이 기간일때
                } else if (product.receipt_day != 0) {
                    listTable.innerHTML += `
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${index}</td>
                        <td>${product.receipt_start_date.split("T")[0]}</td>
                        <td>${receipt_kinds}
                            <br>
                            ${product.receipt_day} 주
                        </td>
                        <td>${product.receipt_price} 원</td>
                        <td>${receipt_onoff}</td>

                    </tr>
        `
                }



            };

        })

    }

    // 3개월
    month3Btn.onclick = () => {
        const listTable = document.querySelector(".sales-table");


        listTable.innerHTML = "";

        $.ajax({
            async: false,
            type: "get",
            url: "/api/mypage/receipt/month3",
            success: (response) => {
                alert("유저 정보 가져오기 성공")
                console.log(response.data);
                responseData = response.data;
            },
            error: (error) => {
                alert("유저 정보 가져오기 실패");
                console.log(response.data);
                console.log(error);
            },
        });

        responseData.forEach((product, index) => {

            index = index + 1;

            if (product.receipt_kinds == "oneday") {
                receipt_kinds = "원데이";
            } else if (product.receipt_kinds == "commuter_time") {
                receipt_kinds = "정액권 시간권";
            } else if (product.receipt_kinds == "commuter_day") {
                receipt_kinds = "정액권 기간권";
            } else if (product.receipt_kinds == "reserved_seat") {
                receipt_kinds = "지정석";
            } else if (product.receipt_kinds == "locker") {
                receipt_kinds = "사물함";
            }

            if (product.receipt_onoff == 1) {
                receipt_onoff = "사용중"
            } else if (product.receipt_onoff == 0) {
                receipt_onoff = "사용완료"
            }

            // let today = new Date().toISOString().substring(0, 10);
            if ((product.receipt_start_date.split("T")[0] <= today.toISOString().substring(0, 10)) &&
                (product.receipt_start_date.split("T")[0] >= today3.toISOString().substring(0, 10))) {



                // 사용권이 시간일때
                if (product.receipt_time != 0) {
                    listTable.innerHTML += `
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${index}</td>
                        <td>${product.receipt_start_date.split("T")[0]}</td>
                        <td>${receipt_kinds}
                            <br>
                            ${product.receipt_time} 시간
                        </td>
                        <td>${product.receipt_price} 원</td>
                        <td>${receipt_onoff}</td>

                    </tr>
        `
                    // 사용권이 기간일때
                } else if (product.receipt_day != 0) {
                    listTable.innerHTML += `
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                    </colgroup>
                    <tr>
                        <td>${index}</td>
                        <td>${product.receipt_start_date.split("T")[0]}</td>
                        <td>${receipt_kinds}
                            <br>
                            ${product.receipt_day} 주
                        </td>
                        <td>${product.receipt_price} 원</td>
                        <td>${receipt_onoff}</td>

                    </tr>
        `

                }
            }
        })

    }

}




logOutBtn.onclick = () => {
    console.log("로그아웃")
    location.replace("/logout");
}
//홈 버튼 이벤트
$('.home-btn').click(function () {
    location.replace("/index");
});

window.onload = () => {
    getuserList();
    loadList();


    console.log(today);
    console.log(today.toISOString().substring(0, 10));
    console.log(new Date(monthAgo).toISOString().substring(0, 10));
    console.log(new Date(month3Ago).toISOString().substring(0, 10));


}