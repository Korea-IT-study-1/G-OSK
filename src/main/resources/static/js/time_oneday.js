
//홈으로 버튼 이벤트
$('.home-btn').click(function () {
    localStorage.clear();
    location.replace("/index");
});

//페이지 실행 시 원데이 이용권 리스트 불러오기
class OnedayService{

    static #instance = null;

    static getInstance() {
        if(this.#instance == null){
            this.#instance = new OnedayService();
        }

        return this.#instance;
    }

    #responseData = null;

    loadTimeList(){
        this.responseData = OnedayListApi.getInstance().getOnedayList();
        console.log(this.responseData);
        this.getOneday(this.responseData);
    }

    getOneday(responseData) {
        console.log(responseData)

        const borders = document.querySelector(".oneday-list");

        responseData.forEach((border, index) => {

            borders.innerHTML += `
            <li>
                <p>
                    <i class="fa-solid fa-ticket"></i>&nbsp&nbsp&nbsp&nbsp&nbsp
                    <span>${border.time}시간</span>
                </p>
                <div>${border.price}원</div>
            </li>
            `;

        });

        //원데이 이용권 선택
        $('.oneday-list li').click(function () {
            localStorage.setItem("paytime", $(this).find('span').text());
            localStorage.setItem("pay", $(this).children('div').text());
            location.href = "/pay";
        });

    }
}

class OnedayListApi{
    static #instance = null;

    static getInstance(){
        if(this.#instance == null) {
            this.#instance = new OnedayListApi();
        }
        return this.#instance;
    }

    getOnedayList(){

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
                alert("원데이 이용권 불러오기");
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
    OnedayService.getInstance().loadTimeList();
}

