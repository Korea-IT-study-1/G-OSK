function inoutList() {
    const user_id = localStorage.id;
    console.log(user_id)
    $.ajax({
      async: false,
      type: "get",
      url: "/api/inout/"+ user_id,
      dataType: "json",
      success: (response) => {
        responseData = response.data;
        console.log(responseData);
        loadList(responseData);
  
        // responseData를 JSON 형식으로 보여주기
        // console.log(JSON.stringify(responseData[]));
      },
      error: (error) => {
        alert("배송지 리스트 불러오기 실패");
        console.log(error);
      },
    });
}
function loadList(responseData) {
    const inoutBody = document.querySelector(".inout-content");
    
    inoutBody.innerHTML=""
    responseData.forEach((inout, index) =>{
        if(inout.user_time != null){
            inoutBody.innerHTML+=`
            <ul>
                <li>
                    <p><i class="fa-regular fa-clock"></i>입실(현재)시간</p>
                    <span>${inout.user_update_date}</span>
                </li>
                <li>
                    <p><i class="fa-solid fa-hourglass-half"></i>총 잔여</p>
                    <span>${inout.user_time}</span>
                </li>
                <li class="close">
                    <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                    <span>${inout.receipt_end_date}<span>
                </li>
                <li>
                    <p><i class="fa-solid fa-chair"></i>입석좌석</p>
                    <div>${inout.seat_num}</div>
                </li>
            </ul>
            `
        }else if(inout.user_date != null) {
            inoutBody.innerHTML+=`
            <ul>
                <li>
                    <p><i class="fa-regular fa-clock"></i>입실(현재)시간</p>
                    <span>${inout.user_update_date}</span>
                </li>
                <li>
                    <p><i class="fa-solid fa-hourglass-half"></i>총 잔여</p>
                    <span>${inout.user_date}</span>
                </li>
                <li class="close">
                    <p><i class="fa-regular fa-calendar-xmark"></i>종료일자</p>
                    <span>${inout.receipt_end_date}<span>
                </li>
                <li>
                    <p><i class="fa-solid fa-chair"></i>입석좌석</p>
                    <div>${inout.seat_num}</div>
                </li>
            </ul>
            `
        }
    })
}
window.onload = () => {
    inoutList();
    // console.log(localStorage.getItem("address"))
};