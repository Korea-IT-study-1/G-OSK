function inList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/inout",
        dataType: "json",
        success: (response) => {
            if (localStorage.getItem("time") == "in") {
                alert("입실입실성공");
                responseData1 = response.data;
                responseData = responseData1[responseData1.length - 1];
                console.log(responseData);
                ininList(responseData);
            } else if (localStorage.getItem("time") == "out") {
                alert("퇴실성공");
                responseData1 = response.data;
                console.log(responseData1);
                responseData = responseData1[responseData1.length - 1];
                console.log(responseData);
                outload(responseData);
            }
            // responseData를 JSON 형식으로 보여주기
            // console.log(JSON.stringify(responseData[]));
        },
        error: (error) => {
            alert("퇴실 실패");
            console.log(error);
        },
    });
}
function outList() {

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
function ininList() {
    console.log(responseData);
    junho = responseData.user_update_date.split(/[-T:]/);
    junho1 = parseInt(junho[0]);
    junho2 = parseInt(junho[1]);
    junho3 = parseInt(junho[2]);
    junho4 = parseInt(junho[3]);
    junho5 = parseInt(junho[4]);
    junho6 = parseInt(junho[5]);

    console.log(junho1);
    console.log(junho2);
    console.log(junho3);
    console.log(junho4);
    console.log(junho5);
    console.log(junho6);

    time0 = responseData.user_time.split(/[:]/);
    time1 = parseInt(time0[0]);
    time2 = parseInt(time0[1]);
    time3 = parseInt(time0[2]);

    console.log(time1);
    console.log(time2);
    console.log(time3);
    timehour = junho4 + time1;
    timeminute = junho5 + time2;
    timesecond = junho6 +  time3;
    console.log(timehour);
    console.log(timeminute);
    console.log(timesecond);
    let goodtime ={
        timehour : time1,
        timeminute : time2,
        timesecond : time3,
    };
    console.log(goodtime);
    junholist(goodtime);

}
function junholist(goodtime) {
    console.log(goodtime);
    $.ajax({
        async: false,
        type: "put",
        url: "/api/inout/day",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(goodtime),
        success: (response) => {
            alert("시간 보내기 성공");
            // responseData2 = response.data;
            responseData2 = response.data.replace(/T/g, ' ');
            responseData2 = responseData2.split(/[.]/,1);
            // responseData2 = responseData2[0]+responseData2[1];
            // end_time = responseData2.substring(0, responseData2.lastIndexOf("."));
            console.log(responseData2);
            // inload(responseData1);
            inininList();

            // responseData를 JSON 형식으로 보여주기
            // console.log(JSON.stringify(responseData[]));
        },
        error: (error) => {
            alert("시간 보내기 실패");
            console.log(error);
            console.log(responseData);
        },
    });
}
function inininList() {

    $.ajax({
        async: false,
        type: "get",
        url: "/api/inout",
        dataType: "json",
        success: (response) => {
            alert("완전 보내기 성공");
            responseData1 = response.data;
            responseData = responseData1[responseData1.length - 1];
            console.log(responseData);
            inload(responseData);

            // responseData를 JSON 형식으로 보여주기
            // console.log(JSON.stringify(responseData[]));
        },
        error: (error) => {
            alert("완전 보내기 실패");
            console.log(error);
        },
        // responseData를 JSON 형식으로 보여주기
        // console.log(JSON.stringify(responseData[]));
    });
}

function inload(responseData) {
    timetime =responseData.user_update_date.replace(/T/g, ' ');
    timetime = timetime.split(/[.]/,1);
    const inoutBody = document.querySelector(".junho11");
    inoutBody.innerHTML += `
        <header class="inout-header">
        <i class="fa-solid fa-check"></i>
        <p>입실처리 완료</p>
        <div>회원님, 처리가 입실처리가 완료되었습니다.</div>
        </header>

        <section class="inout-content">
            <ul>
                <li>
                    <p><i class="fa-regular fa-clock"></i>입실(현재)시간</p>
                    <span>${timetime}</span>
                </li>
                <li>
                    <p><i class="fa-solid fa-hourglass-half"></i>총 잔여</p>
                    <span>${responseData.user_time}</span>
                </li>
                <li class="close">
                    <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                    <span>${responseData2}<span>
                </li>
                <li>
                    <p><i class="fa-solid fa-chair"></i>입석좌석</p>
                    <div>${responseData.seat_id}</div>
                </li>
            </ul>
        </section>
            `
}

function outload(responseData) {
    console.log(responseData);
    const inoutBody = document.querySelector(".junho11");

    if (responseData.receipt_time == 0) {
        inoutBody.innerHTML += `
            <header class="inout-header">
            <i class="fa-solid fa-check"></i>
            <p>퇴실처리 완료</p>
            <div>회원님, 처리가 퇴실처리가 완료되었습니다.</div>
        </header>

        <section class="inout-content">
            
            <ul>
                <li>
                    <p><i class="fa-solid fa-ticket"></i>기간이용권</p>
                    <span>${responseData.receipt_day}주권<span>
                </li>
                <li>
                    <p><i class="fa-regular fa-clock"></i>퇴실(현재)시간</p>
                    <span>${responseData.user_update_date}</span>
                </li>
                <li class="close">
                    <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                    <span>${responseData.user_date}<span>
                </li>
                <li>
                    <p><i class="fa-solid fa-chair"></i>퇴실좌석</p>
                    <div>${responseData.user_out}</div>
                </li>
            
            </ul>
        </section>
            `
    } else if (responseData.receipt_time != 0) {
        inoutBody.innerHTML += `
                <header class="inout-header">
                <i class="fa-solid fa-check"></i>
                <p>퇴실처리 완료</p>
                <div>회원님, 처리가 퇴실처리가 완료되었습니다.</div>
            </header>
    
            <section class="inout-content">
                
                <ul>
                    <li>
                        <p><i class="fa-solid fa-ticket"></i>시간이용권</p>
                        <span>${responseData.receipt_time}시간권<span>
                    </li>
                    <li>
                        <p><i class="fa-regular fa-clock"></i>퇴실(현재)시간</p>
                        <span>${responseData.user_update_date}</span>
                    </li>
                    <li class="close">
                        <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                        <span>${responseData.user_date}<span>
                    </li>
                    <li>
                        <p><i class="fa-solid fa-chair"></i>퇴실좌석</p>
                        <div>${responseData.user_out}</div>
                    </li>
                
                </ul>
            </section>
                `
    }

}


window.onload = () => {
    if (localStorage.getItem("time") == "in") {
        inList();
    } else if (localStorage.getItem("time") == "out") {
        outList();
    }

};

// window.onload = () => {
//     if (localStorage.getItem("time") == "in") {
//         inList();
//     } else if (localStorage.getItem("time") == "out") {
//         outList();
//     }

// };

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    localStorage.clear()
    console.log("로그아웃")
    location.replace("/logout");

}