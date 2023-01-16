const AL01 = document.querySelector(".AL01");
const AL02 = document.querySelector(".AL02");
const AL03 = document.querySelector(".AL03");
const AL04 = document.querySelector(".AL04");
const AL05 = document.querySelector(".AL05");
const AL06 = document.querySelector(".AL06");
const AL07 = document.querySelector(".AL07");
const AL08 = document.querySelector(".AL08");
const AL09 = document.querySelector(".AL09");
const AL10 = document.querySelector(".AL10");
const AL11 = document.querySelector(".AL11");
const AL12 = document.querySelector(".AL12");
const BL01 = document.querySelector(".BL01");
const BL02 = document.querySelector(".BL02");
const BL03 = document.querySelector(".BL03");
const BL04 = document.querySelector(".BL04");
const BL05 = document.querySelector(".BL05");
const BL06 = document.querySelector(".BL06");
const BL07 = document.querySelector(".BL07");
const BL08 = document.querySelector(".BL08");
const BL09 = document.querySelector(".BL09");
const BL10 = document.querySelector(".BL10");
const BL11 = document.querySelector(".BL11");
const BL12 = document.querySelector(".BL12");
const CL01 = document.querySelector(".CL01");
const CL02 = document.querySelector(".CL02");
const CL03 = document.querySelector(".CL03");
const CL04 = document.querySelector(".CL04");
const CL05 = document.querySelector(".CL05");
const CL06 = document.querySelector(".CL06");
const CL07 = document.querySelector(".CL07");


// ----------------------------사물함 유저정보 불러오기---------------------
function lockeruserList() {
  $.ajax({
      async: false,
      type: "get",
      url: "/api/seat/check/locker",
      success: (response) => {
          // alert("사물함");
          console.log(response.data);
          responseData = response.data;
          lockeruserload(responseData);
      },
      error: (error) => {
          alert("지정석 사용중 불러오기 실패");
          console.log(error);
      },
  });
}
function lockeruserload(responseData) {
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL01').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL01.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL01.classList.remove("org-btn");
              AL01.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL02').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL02.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL02.classList.remove("org-btn");
              AL02.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL03').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL03.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL03.classList.remove("org-btn");
              AL03.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL04').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL04.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL04.classList.remove("org-btn");
              AL04.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL05').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL05.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL05.classList.remove("org-btn");
              AL05.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL06').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL06.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL06.classList.remove("org-btn");
              AL06.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL07').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL07.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              SOs7.classList.remove("org-btn");
              SOs7.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL08').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL08.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL08.classList.remove("org-btn");
              AL08.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL09').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL09.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL09.classList.remove("org-btn");
              AL09.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL10').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL10.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL10.classList.remove("org-btn");
              AL10.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL11').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL11.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL11.classList.remove("org-btn");
              AL11.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('AL12').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              AL12.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              AL12.classList.remove("org-btn");
              AL12.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL01').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL01.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL01.classList.remove("org-btn");
              BL01.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL02').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL02.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL02.classList.remove("org-btn");
              BL02.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL03').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL03.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL03.classList.remove("org-btn");
              BL03.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL04').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL04.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL04.classList.remove("org-btn");
              BL04.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL05').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL05.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL05.classList.remove("org-btn");
              BL05.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL06').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL06.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL06.classList.remove("org-btn");
              BL06.classList.add("gray-btn");
              break;
          }
      }
  }

  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL07').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL07.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL07.classList.remove("org-btn");
              BL07.classList.add("gray-btn");
              break;
          }
      }
  }

  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL08').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL08.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL08.classList.remove("org-btn");
              BL08.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL09').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL09.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL09.classList.remove("org-btn");
              BL09.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL10').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL10.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL10.classList.remove("org-btn");
              BL10.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL11').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL11.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL11.classList.remove("org-btn");
              BL11.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('BL12').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              BL12.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              BL12.classList.remove("org-btn");
              BL12.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('CL01').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              CL01.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              CL01.classList.remove("org-btn");
              CL01.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('CL02').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              CL02.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              CL02.classList.remove("org-btn");
              CL02.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('CL03').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              CL03.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              CL03.classList.remove("org-btn");
              CL03.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('CL04').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              CL04.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              CL04.classList.remove("org-btn");
              CL04.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('CL05').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              CL05.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              CL05.classList.remove("org-btn");
              CL05.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('CL06').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              CL06.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              CL06.classList.remove("org-btn");
              CL06.classList.add("gray-btn");
              break;
          }
      }
  }
  for (i = 0; i < responseData.length; i++) {
      if (document.getElementById('CL07').innerText == responseData[i].locker_id) {
          if (responseData[i].user_id == 0) {
              CL07.classList.remove("org-btn");
              break;
          }
          else if (responseData[i].user_id == -1) {
              CL07.classList.remove("org-btn");
              CL07.classList.add("gray-btn");
              break;
          }
      }
  }

}


//선택한 사물함 클릭 시 버튼색깔 변경 및 사물함 이름 표시
$(".locker-management-content button").click(function () {
  if ($(this).hasClass('org-btn') == false) {
    if ($(this).hasClass('sky-btn') == true) {
      $(this).removeClass('sky-btn');
      $(".locker-select-name").attr('value', "");
    } else {
      $(this).parent().siblings().children().removeClass('sky-btn');
      $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
      $('.locker-select-name').attr('value', $(this).text());
    }
  }
})

//홈 버튼 이벤트
$('.home-btn').click(function () {
  localStorage.clear();
  location.replace("/index");
});

//다음단계 버튼 이벤트
$('.next-btn').click(function () {
  if ($('.locker-select-name').val() != "") {
    localStorage.setItem("seatnum", $('.locker-select-name').val());
    var time = localStorage.getItem("time");
    location.href = "/" + time + "/time";
  }
});

const lockerInput = document.querySelector(".locker-select-name");
const inoutButton = document.querySelector(".next");
const user_id = localStorage.id;
console.log(user_id)
let userData = {}

userData = lockerInput.value
console.log(userData)

inoutButton.onclick = () => {
  console.log(userData)
  $.ajax({
    async: false,
    type: "put",
    url: "/api/locker/check/update/" + user_id,
    contentType: "application/json",
    data: JSON.stringify(userData),
    dataType: "json",
    success: (response) => {
      alert("입실완료");
      location.href = "/inout";
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
  // localStorage.setItem("userData", JSON.stringify(userData));
  // location.href = "/inout";
}




// function updateUser() {
//     const lockerInput = document.querySelector(".locker-select-name");
//     console.log(lockerInput.value)
// }

// window.onload = () => {
//     load();
// };


const logOutBtn = document.querySelector(".logout-btn");

logOutBtn.onclick = () => {
  localStorage.clear()
  console.log("로그아웃")
  location.replace("/logout");

}

window.onload = () => {
  lockeruserList();
}