//홈으로 버튼 이벤트

const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
    console.log("로그아웃")
    location.replace("/logout");
}

//정액권 이용권 선택
$('.time-content li').click(function () {
    localStorage.setItem("paytime", $(this).find('span').text());
    localStorage.setItem("pay", $(this).children('div').text());
    location.href = "/pay";
});

