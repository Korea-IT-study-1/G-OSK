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
                responseData1 = response.data;
                responseData = responseData1[responseData1.length - 1];
                console.log(responseData);
                inload(responseData);
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
function inload(responseData) {
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
                    <span>${responseData.user_update_date}</span>
                </li>
                <li>
                    <p><i class="fa-solid fa-hourglass-half"></i>총 잔여</p>
                    <span>${responseData.user_time}</span>
                </li>
                <li class="close">
                    <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                    <span>${responseData.receipt_start_date}<span>
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
                    <span>${responseData.user_create_date}</span>
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
                        <span>${responseData.user_create_date}</span>
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
// ********************************************************************************
function dayList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/inout",
        dataType: "json",
        success: (response) => {
            alert("유저 정보가져오기 성공");
            responseData1 = response.data;
            responseData = responseData1[responseData1.length - 1];
            console.log(responseData);
            hourload(responseData);
        },
        error: (error) => {
            alert("퇴실 실패");
            console.log(error);
        },
    }); 
}
function hourload() {
    console.log(responseData);
    junho = responseData.user_update_date.split(/[-T:]/);
    junho1 = parseInt(junho[0]);
    junho2 = parseInt(junho[1]);
    junho3 = parseInt(junho[2]);
    junho4 = parseInt(junho[3]);
    junho5 = parseInt(junho[4]);
    junho6 = parseInt(junho[5]);

    time0 = responseData.user_time.split(/[:]/);
    time1 = parseInt(time0[0]);
    time2 = parseInt(time0[1]);
    time3 = parseInt(time0[2]);

    timehour = junho4 + time1;
    timeminute = junho5 + time2;
    timesecond = junho6 +  time3;
    let goodtime ={
        timehour : time1,
        timeminute : time2,
        timesecond : time3,
    };
    addtime(goodtime);
};
function addtime(goodtime) {
    $.ajax({
        async: false,
        type: "post",
        url: "/api/inout/day",

        data: goodtime,
        dataType: "json",
        success: (response) => {
            // alert("퇴실퇴실 성공");
            responseData = response.data;
            console.log(responseData);
            returnload();

            // responseData를 JSON 형식으로 보여주기
            // console.log(JSON.stringify(responseData[]));
        },
        error: (error) => {
            alert("퇴실 실패");
            console.log(error);
        },
    });
}
function returnload() {
        if (localStorage.getItem("time") == "in") {
        inList();
    } else if (localStorage.getItem("time") == "out") {
        outList();
    }
}

window.onload = () => {
    dayList();
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
