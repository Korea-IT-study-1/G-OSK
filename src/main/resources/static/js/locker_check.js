// // 사용중인 자석
// function load() {
//     $.ajax({
//         async:false,
//         type:"get",
//         url:"api/locker/check",
//         dataType:"josn",
//         success: (response) => {
//             responseData = response.data;
//             loadUser(responseData);
//         },
//         error: (error) => {
//             alert("좌석정보 불러오기 실패");
//             console.log(error);
//         }
//     });
// }



//선택한 사물함 클릭 시 버튼색깔 변경 및 사물함 이름 표시
$(".locker-management-content button").click(function(){
    if($(this).hasClass('org-btn') == false){
        if($(this).hasClass('sky-btn') == true){
            $(this).removeClass('sky-btn');
            $(".locker-select-name").attr('value',"");
        }else{           
            $(this).parent().siblings().children().removeClass('sky-btn');
            $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
            $('.locker-select-name').attr('value',$(this).text());
        }
    }
})

//홈 버튼 이벤트
$('.home-btn').click(function(){
    localStorage.clear();
    location.replace("/index");
});

//다음단계 버튼 이벤트
$('.next-btn').click(function(){
    if($('.locker-select-name').val() != ""){
        localStorage.setItem("seatnum", $('.locker-select-name').val());
        var time = localStorage.getItem("time");
        location.href = "/" + time + "/time";
    }
});
  
    const lockerInput = document.querySelector(".locker-select-name");
    const inoutButton = document.querySelector(".junho");
    const id = localStorage.id;
    console.log(id)
    let userData = {}

    userData=lockerInput.value
    console.log(userData)
    inoutButton.onclick =()=> {
      $.ajax({
        async: false,
        type: "put",
        url: "/api/locker/check/update/" + id,
        contentType: "json",
        data: userData,
        dataType: "json",
        success: (response) => {
          alert("입실완료");       
          console.log(userData)

        },
        error: (error) => {
          alert("입실 실패");
          console.log(error);
          console.log(userData)
        }
      });
    }
