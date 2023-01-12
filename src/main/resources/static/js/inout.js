function inList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/inout",
        dataType: "json",
        success: (response) => {
            if (localStorage.getItem("time") == "in") {
                alert("입실 in성공");
                console.log(response.data);
                responseData1 = response.data;
                responseData = responseData1[responseData1.length - 1];
                console.log(responseData);
                junholist();
            } else if (localStorage.getItem("time") == "out") {
                if(localStorage.getItem("commuter_out") == "out") {
                    responseData1 = response.data;
                    responseData = responseData1[responseData1.length - 1];
                    timetime =responseData.user_update_date.replace(/T/g, ' ');
                    console.log(timetime);
                    timetime = timetime.split(/[.]/,1);
                    console.log(timetime);
                    console.log(responseData);
                    alert("퇴실in 성공");
                    outload(responseData);
                }else if(localStorage.getItem("time") == "out") {
                    responseData1 = response.data;
                    responseData = responseData1[responseData1.length - 1];
                    timetime =responseData.user_update_date.replace(/T/g, ' ');
                    console.log(timetime);
                    timetime = timetime.split(/[.]/,1);
                    outload(responseData);
                }
                
                
            }

        },
        error: (error) => {
            alert("입실 퇴실 in 실패");
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
            alert("퇴실퇴실 성공");
            responseData = response.data;
            console.log("준호 짱짱맨:")
            console.log(responseData);
            inList();
        },
        error: (error) => {
            alert("퇴실 실패");
            console.log(response.data);
            console.log(error);
        },
    });
}

function junholist() {
    // console.log();
    $.ajax({
        async: false,
        type: "put",
        url: "/api/inout/day",
        contentType: 'application/json',
        dataType: "json",
        // data: JSON.stringify(goodtime),
        success: (response) => {
            alert("시간 보내기 성공");
            responseData2 = response.data.replace(/T/g, ' ');
            responseData2 = responseData2.split(/[.]/, 1);
            console.log(responseData2);
            inininList();
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

            responseData1 = response.data;
            responseData = responseData1[responseData1.length - 1];
            timetime = responseData.user_update_date.replace(/T/g, ' ');
            console.log(timetime);
            timetime = timetime.split(/[.]/, 1);
            console.log(responseData);
            if (localStorage.getItem("time") == "in") {
                alert("입실입실성공");
                inload(responseData);
            } else if (localStorage.getItem("time") == "out") {
                alert("퇴실성공");
                outload(responseData);
            }
        },
        error: (error) => {
            alert("완전 보내기 실패");
            console.log(error);
        },
    });
}

function inload(responseData) {
    // onsole.log(responseData);
    const inoutBody = document.querySelector(".junho11");
    if (responseData.receipt_time == 0) {
        week = responseData.user_date.replace(/T/g, ' ');
        week = week.split(/[.]/, 1);
        inoutBody.innerHTML += `
        <header class="inout-header">
        <i class="fa-solid fa-check"></i>
        <p>입실처리 완료</p>
        <div>회원님, 처리가 입실처리가 완료되었습니다.</div>
        </header>

        <section class="inout-content">
            <ul>
                <li>
                    <p><i class="fa-solid fa-hourglass-half"></i>구매권</p>
                    <span>${responseData.receipt_day}주</span>
                </li>
                <li>
                    <p><i class="fa-regular fa-clock"></i>입실(현재)시간</p>
                    <span>${timetime}</span>
                </li>
                <li class="close">
                    <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                    <span>${week}<span>
                </li>
                <li>
                    <p><i class="fa-solid fa-chair"></i>입석좌석</p>
                    <div>${responseData.seat_id}</div>
                </li>
            </ul>
        </section>
            `
    } else if (responseData.receipt_time != 0) {
        user_time =responseData.user_time;
        var hour = parseInt(user_time/3600);
        var min = parseInt((user_time%3600)/60);
        var sec = user_time%60;
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
                    <span>${hour}시${min}분${sec}초</span>
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

}

function outload(responseData) {

    const inoutBody = document.querySelector(".junho11");

    if (responseData.receipt_time == 0) {
        if(localStorage.getItem("commuter_out") == "out") {
            week = responseData.user_date.replace(/T/g, ' ');
            week = week.split(/[.]/, 1);
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
                        <span>${timetime}</span>
                    </li>
                    <li class="close">
                        <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                        <span>${week}<span>
                    </li>
                    <li>
                        <p><i class="fa-solid fa-chair"></i>퇴실좌석</p>
                        <div>${responseData.user_out}</div>
                    </li>
                
                </ul>
            </section>
                `
        }else if(localStorage.getItem("commuter_out") == "delete") {
            inoutBody.innerHTML += `
            <header class="inout-header">
            <i class="fa-solid fa-check"></i>
            <p>이용권 종료</p>
            <div>회원님, 처리가 이용권종료가 완료되었습니다.</div>
            </header>

            <section class="inout-content">
                
                <ul>
                    <li>
                        <p><i class="fa-solid fa-ticket"></i>기간이용권</p>
                        <span>${responseData.receipt_day}주권<span>
                    </li>
                    <li>
                        <p><i class="fa-regular fa-clock"></i>퇴실(현재)시간</p>
                        <span>${timetime}</span>
                    </li>
                    <li class="close">
                        <p><i class="fa-regular fa-calendar-xmark"></i>종료</p>
                        <span>이용권종료<span>
                    </li>
                    <li>
                        <p><i class="fa-solid fa-chair"></i>퇴실좌석</p>
                        <div>${responseData.user_out}</div>
                    </li>
                
                </ul>
            </section>
                `
        }
        
    } else if (responseData.receipt_time != 0) {
        user_time =responseData.user_time;
        var hour = parseInt(user_time/3600);
        var min = parseInt((user_time%3600)/60);
        var sec = user_time%60;
        if(localStorage.getItem("commuter_out") == "out") {
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
                        <span>${timetime}</span>
                    </li>
                    <li class="close">
                        <p><i class="fa-regular fa-calendar-xmark"></i>남은시간</p>
                        <span>${hour}시${min}분${sec}초<span>
                    </li>
                    <li>
                        <p><i class="fa-solid fa-chair"></i>퇴실좌석</p>
                        <div>${responseData.user_out}</div>
                    </li>
                
                </ul>
            </section>
                `
        }else if(localStorage.getItem("commuter_out") == "delete") {
            inoutBody.innerHTML += `
                <header class="inout-header">
                <i class="fa-solid fa-check"></i>
                <p>이용권 종료</p>
                <div>회원님, 처리가 이용권종료가 완료되었습니다.</div>
            </header>
    
            <section class="inout-content">
                
                <ul>
                    <li>
                        <p><i class="fa-solid fa-ticket"></i>시간이용권</p>
                        <span>${responseData.receipt_time}시간권<span>
                    </li>
                    <li>
                        <p><i class="fa-regular fa-clock"></i>퇴실(현재)시간</p>
                        <span>${timetime}</span>
                    </li>
                    <li class="close">
                        <p><i class="fa-regular fa-calendar-xmark"></i>남은시간</p>
                        <span>이용권 종료<span>
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

}


window.onload = () => {
    if (localStorage.getItem("time") == "in") {
        inList();
    } else if (localStorage.getItem("time") == "out") {
        if(localStorage.getItem("commuter_out") == "out"){
            outList();
        }else if(localStorage.getItem("commuter_out") == "delete") {
            inList();
        }
        
    }

};


const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    localStorage.clear()
    console.log("로그아웃")
    location.replace("/logout");

}