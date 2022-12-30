//홈 버튼 이벤트
$('.home-btn').click(function () {
    location.replace("/index");
});

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    console.log("로그아웃")
    location.replace("/logout");
}