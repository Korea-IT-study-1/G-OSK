const seatbasic = document.querySelector(".seat-basic");
const seatspecial = document.querySelector(".seat-special");
const basic = document.querySelector(".basic");
const special = document.querySelector(".special");

//선택한 좌석 클릭 시 버튼색깔 변경 및 좌석 이름 표시
$('.seat-content button').click(function(){
    if($(this).hasClass('org-btn') == false){
        if($(this).hasClass('sky-btn') == true){
            $(this).removeClass('sky-btn');
            $(".seat-select-name").attr('value',"");
        }else{
            $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
            $('.seat-select-name').attr('value',$(this).text());
        }
    } else {
        $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
        $(".seat-select-name").attr('value',"");
    }
    if(localStorage.getItem("time") == "in"){
        const seatInput = document.querySelector(".seat-select-name");
    const inoutButton = document.querySelector(".junho");
    const user_id = localStorage.id;
    console.log(user_id)
    let userData = {}

    userData=seatInput.value
    console.log(userData)
    inoutButton.onclick =()=> {
      console.log(userData)
      $.ajax({
        async: false,
        type: "put",
        url: "/api/seat/update/" + user_id,
        contentType: "application/json",
        data: JSON.stringify(userData),
        dataType: "json",
        success: (response) => {
          alert("입실완료");
        //   location.href = "/inout";
          // alert(JSON.stringify(response));
          // // history.back();        
          // // console.log(response.data);
          // console.log("1"+response);
          // console.log("2"+response.data);
        },
        error: (error) => {
          alert("입실 실패");
          console.log(error);
          console.log(userData)
        }
      });
    }
    
      // localStorage.setItem("userData", JSON.stringify(userData));
      // location.href = "/inout";
    }
})
    

//홈으로 버튼 이벤트
$('.home-btn').click(function(){
    localStorage.clear();
    location.replace("/index");
});

//다음단계 버튼 이벤트
$('.next-btn').click(function(){
    if($('.seat-select-name').val() != ""){
        switch(localStorage.getItem("time")){
            case "seatmove":
                localStorage.setItem("seatnum", $('.seat-select-name').val());
                break;
            case "in":
                localStorage.setItem("seatnum", $('.seat-select-name').val());
                location.href ="/inout";
                break;
            default:
                localStorage.setItem("seatnum", $('.seat-select-name').val());
                var time = localStorage.getItem("time");
                location.href = "/time/" + time;
        }
    }
});

//일반석, 지정석 종류 버튼 히든 이벤트
function hidden_btn(time){
    if(time == "oneday" ||
     time == "commuter" ||
     time == "in"){
        $('.basic').show();
        $('.special').hide();
        seatbasic.classList.remove("invisible");
        seatspecial.classList.add("invisible");
        special.classList.remove("sky-btn");
        basic.classList.add("sky-btn");
    } else {
        $('.basic').hide();
        $('.special').show();
        seatspecial.classList.remove("invisible");
        seatbasic.classList.add("invisible");
        basic.classList.remove("sky-btn");
        special.classList.add("sky-btn");
    }
};

//페이지가 실행될 때
window.onload = () => {
    hidden_btn(localStorage.getItem("time"));
}