//홈 버튼 이벤트
$('.home-btn').click(function(){
    localStorage.clear();
    location.replace("/index");
});

//사물함 이용권 선택
// $('.time-content li').click(function(){
//     localStorage.setItem("paytime", $(this).find('span').text());
//     localStorage.setItem("pay", $(this).children('div').text());
//     location.href = "/pay";
// });

//페이지 실행 시 사물함 이용권 리스트 불러오기
class LockerService{

    static #instance = null;

    static getInstance() {
        if(this.#instance == null){
            this.#instance = new LockerService();
        }

        return this.#instance;
    }

    #responseData = null;

    loadTimeList(){
        this.responseData = LockerListApi.getInstance().getLockerList();
        console.log(this.responseData);
        this.getLocker(this.responseData);
    }

    getLocker(responseData) {
        console.log(responseData)

        const borders = document.querySelector(".locker-list");

        responseData.forEach((border, index) => {

            borders.innerHTML += `
            <li>
                <p>
                    <i class="fa-solid fa-ticket"></i>&nbsp&nbsp&nbsp&nbsp&nbsp
                    <span>${border.time}</span>
                </p>
                <div>${border.price}</div>
            </li>
            `;

        });

        //사물함 이용권 선택
        $('.locker-list li').click(function () {
            localStorage.setItem("paytime", $(this).find('span').text());
            localStorage.setItem("pay", $(this).children('div').text());
            location.href = "/pay";
        });

    }
}

class LockerListApi{
    static #instance = null;

    static getInstance(){
        if(this.#instance == null) {
            this.#instance = new LockerListApi();
        }
        return this.#instance;
    }

    getLockerList(){

        let responseData = null;
        let time = localStorage.getItem("time");

        $.ajax({
            async: false,
            type: "get",
            url: "/api/time/list",
            // data: JSON.stringify(listinfo),
            data: {listname: time},
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });

        return responseData;
    }
}

window.onload = () => {
    LockerService.getInstance().loadTimeList();
}

