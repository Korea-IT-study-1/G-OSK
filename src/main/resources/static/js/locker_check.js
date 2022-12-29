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
  //   $('.in-btn').click(function(){
  //     localStorage.setItem("time", $(this).val());
  //     location.href = "/locker/check";
  // });
  
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
      //   history.back();        
      console.log(userData)

      },
      error: (error) => {
        alert("입실 실패");
        console.log(error);
        console.log(userData)
      }
    });
      // localStorage.setItem("userData", JSON.stringify(userData));

      // location.href = "/inout";
    }

})




// function updateUser() {
//     const lockerInput = document.querySelector(".locker-select-name");
//     console.log(lockerInput.value)
// }

// window.onload = () => {
//     load();
// };