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
    console.log( responseData);
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
                    <span>${responseData.seat_start_time}</span>
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
    console.log( responseData);
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
        }else if(responseData.receipt_time != 0) {
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

window.onload = () => {
    if (localStorage.getItem("time") == "in") {
        inList();
    } else if (localStorage.getItem("time") == "out") {
        outList();
    }

};

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    localStorage.clear()
    console.log("로그아웃")
    location.replace("/logout");
    
}
