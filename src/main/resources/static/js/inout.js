function inList() {
    // const user_id = localStorage.id;
    // console.log(user_id)
    $.ajax({
        async: false,
        type: "get",
        url: "/api/inout",
        dataType: "json",
        success: (response) => {
            if (localStorage.getItem("time") == "in") {
                alert("입실입실성공");
            } else if (localStorage.getItem("time") == "out") {
                alert("퇴실성공");
            }
            
            responseData = response.data;
            console.log(responseData);
            inload(responseData);

            // responseData를 JSON 형식으로 보여주기
            // console.log(JSON.stringify(responseData[]));
        },
        error: (error) => {
            alert("퇴실 실패");
            console.log(error);
        },
    });
}
function inload(responseData) {
    const inoutBody = document.querySelector(".inout-content");

    inoutBody.innerHTML = ""
    responseData.forEach((inout, index) => {
        if (localStorage.getItem("time") == "in") {
            inoutBody.innerHTML += `
            <ul>
                <li>
                    <p><i class="fa-regular fa-clock"></i>입실(현재)시간</p>
                    <span>${inout.seat_start_time}</span>
                </li>
                <li>
                    <p><i class="fa-solid fa-hourglass-half"></i>총 잔여</p>
                    <span>${inout.user_time}</span>
                </li>
                <li class="close">
                    <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                    <span>${inout.receipt_start_date}<span>
                </li>
                <li>
                    <p><i class="fa-solid fa-chair"></i>입석좌석</p>
                    <div>${inout.seat_id}</div>
                </li>
            </ul>
            `
        }
        
        else if (localStorage.getItem("time") == "out") {
            inoutBody.innerHTML += `
            <ul>
                <li>
                    <p><i class="fa-regular fa-clock"></i>퇴실(현재)시간</p>
                    <span>${inout.user_create_date}</span>
                </li>
                <li>
                    <p><i class="fa-solid fa-hourglass-half"></i>총 잔여</p>
                    <span>${inout.user_time}</span>
                </li>
                <li class="close">
                    <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                    <span>${inout.receipt_start_date}<span>
                </li>
            
            </ul>
            `
        }
    })
}
function outList() {
    // const user_id = localStorage.id;
    // console.log(user_id)
    $.ajax({
        async: false,
        type: "put",
        url: "/api/inout",
        dataType: "json",
        success: (response) => {
            // alert("퇴실퇴실 성공");
            responseData = response.data;
            console.log(responseData);
            inList();

            // responseData를 JSON 형식으로 보여주기
            // console.log(JSON.stringify(responseData[]));
        },
        error: (error) => {
            alert("퇴실 실패");
            console.log(error);
        },
    });
}
// function outload(responseData) {
//     const inoutBody = document.querySelector(".inout-content");

//     inoutBody.innerHTML = ""
//     responseData.forEach((inout, index) => {
//             inoutBody.innerHTML += `
//             <ul>
//                 <li>
//                     <p><i class="fa-regular fa-clock"></i>퇴실(현재)시간</p>
//                     <span>${inout.seat_start_time}</span>
//                 </li>
//                 <li>
//                     <p><i class="fa-solid fa-hourglass-half"></i>총 잔여</p>
//                     <span>${inout.user_time}</span>
//                 </li>
//                 <li class="close">
//                     <p><i class="fa-regular fa-calendar-xmark"></i>퇴실종료일자</p>
//                     <span>${inout.receipt_start_date}<span>
//                 </li>
//                 <li>
//                     <p><i class="fa-solid fa-chair"></i>입석좌석</p>
//                     <div>${inout.seat_id}</div>
//                 </li>
//             </ul>
//             `
        
//         // else if (inout.user_date != null) {
//         //     inoutBody.innerHTML += `
//         //     <ul>
//         //         <li>
//         //             <p><i class="fa-regular fa-clock"></i>입실(현재)시간</p>
//         //             <span>${inout.user_update_date}</span>
//         //         </li>
//         //         <li>
//         //             <p><i class="fa-solid fa-hourglass-half"></i>총 잔여</p>
//         //             <span>${inout.user_time}</span>
//         //         </li>
//         //         <li class="close">
//         //             <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
//         //             <span>${inout.receipt_end_date}<span>
//         //         </li>
//         //         <li>
//         //             <p><i class="fa-solid fa-chair"></i>입석좌석</p>
//         //             <div>${inout.seat_num}</div>
//         //         </li>
//         //     </ul>
//         //     `
//         // }
//     })
// }

window.onload = () => {
    if (localStorage.getItem("time") == "in") {
        inList();
    } else if (localStorage.getItem("time") == "out") {
        outList();
    }

    // console.log(localStorage.getItem("address"))
};

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    localStorage.clear()
    console.log("로그아웃")
    location.replace("/logout");
    
}
