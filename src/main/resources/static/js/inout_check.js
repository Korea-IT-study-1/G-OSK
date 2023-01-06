const cancelBtn = document.querySelector(".cancel-btn");
const goJoinBtn = document.querySelector(".go-join-btn");

function getuserList() {
    $.ajax({
        async: false,
        type: "get",
        url: "/api/inout",
        success: (response) => {
            alert("유저 정보 가져오기 성공")
            console.log(response.data);
            responseData1 = response.data;
            responseData = responseData1[responseData1.length - 1];
            console.log(responseData);
            userload(responseData);
        },
        error: (error) => {
            alert("유저 정보 가져오기 실패");
            console.log(response.data);
            console.log(error);
        },
    });
}

function userload(responseData) {
    if (responseData.receipt_kinds == "oneday" || responseData.receipt_kinds == "reserved_seat") {
        localStorage.setItem("commuter_out", "out");
        location.replace("/inout");
    }
}



// 그냥 퇴실
cancelBtn.onclick = () => {
    localStorage.setItem("commuter_out", "out");
    location.replace("/inout");
}
// 이용권 종료
goJoinBtn.onclick = () => {
    localStorage.setItem("commuter_out", "delete");
    $.ajax({
        async: false,
        type: "put",
        url: "/api/inout/check",
        contentType: 'application/json',
        dataType: "json",
        success: (response) => {
            alert("이용권완전 삭제 성공");
            location.replace("/inout");
        },
        error: (error) => {
            alert("이용권완전 삭제 실패");
            console.log(error);
            console.log(responseData);
        },
    });
    // location.replace("/inout");
}

window.onload = () => {
    getuserList();
}