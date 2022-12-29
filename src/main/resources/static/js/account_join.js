//키패드 입력 시 휴대폰 번호가 11자리일 때 자동으로 -표시 및 비밀번호 칸으로 넘어가기
$('.join-keybord > button').click(function () {
    var phoneIdInput = $(".phone-id").val();
    var phonePwInput = $(".phone-pw").val();

    if (phoneIdInput.length != 13) {
        if ($(this).html() == "CLR") {
            $(".phone-id").val("");
        } else if ($(this).find("i").hasClass("fa-solid") == true) {
            $(".phone-id").val(phoneIdInput.substring(0, phoneIdInput.length - 1).replaceAll("-", ""));
        } else {
            $(".phone-id").val(phoneIdInput + $(this).html());
        }

        if ($(".phone-id").val().length == 11) {
            var phone = phoneFormat($(".phone-id").val());
            $(".phone-id").val(phone);
        }
    } else {
        if (phoneIdInput.length == 13 && phonePwInput.length == 0 && $(this).find("i").hasClass("fa-solid") == true) {
            $(".phone-id").val(phoneIdInput.substring(0, phoneIdInput.length - 1).replaceAll("-", ""));
        }

        if ($(".phone-pw").val().length == 4) {
            alert("비밀번호는 4자리 입니다.")
            $(".phone-pw").val(phoneIdInput.substring(0, phoneIdInput.length - 1));
        }
        if ($(this).html() == "CLR") {
            $(".phone-id").val("");
            $(".phone-pw").val("");
        } else if ($(this).find("i").hasClass("fa-solid") == true) {
            $(".phone-pw").val(phoneIdInput.substring(0, phonePwInput.length - 1).replaceAll("-", ""));
        } else {
            $(".phone-pw").val(phonePwInput + $(this).html());
        }

    }
});

function phoneFormat(phoneNumber) {
    // 특수문자 제거
    const value = phoneNumber.replace(/[^0-9]/g, '');

    // 00 OR 000 지정
    const firstLength = value.length > 9 ? 3 : 2;

    // ({2,3}) - ({3,4}) - ({4})
    return [
        // 첫번째 구간 (00 or 000)
        value.slice(0, firstLength),
        // 두번째 구간 (000 or 0000)
        value.slice(firstLength, value.length - 4),
        // 남은 마지막 모든 숫자
        value.slice(value.length - 4),
    ].join('-');
  }

  //가입취소 버튼 이벤트
  $('.account-cancel').click(function(){
    location.replace("/index");
  });

const phoneId = document.querySelector(".phone-id");
const phonePw = document.querySelector(".phone-pw");
const registerBtn = document.querySelector(".register-btn");

registerBtn.onclick = () => {

    let joinInfo = {
        userPhone: phoneId.value,
        userPw: phonePw.value
    }

    $.ajax({
        async: false,
        type: "post",
        url: "/api/account/join",
        contentType: "application/json",
        data: JSON.stringify(joinInfo),
        dataType: "json",
        success: (response) => {
            console.log(response);
            console.log(joinInfo);
            alert("성공");
        },
        error: (error) => {
            console.log(error);
            console.log(joinInfo);
        }

    })
}

// 에러메시지
function validationError(error) {
    const accountErrors = document.querySelector(".account-errors");
    const accountErrorList = accountErrors.querySelector(".errorUl");

    const errorValues = Object.values(error);

    accountErrorList.innerHTML = "";

    errorValues.forEach((value) => {
        accountErrorList.innerHTML += `
            <li>${value}</li>
        `;
    });

    accountErrors.classList.remove("errors-invisible");
}