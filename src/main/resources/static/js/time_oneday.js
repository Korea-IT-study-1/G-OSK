
//홈으로 버튼 이벤트
$('.home-btn').click(function () {
    localStorage.clear();
    location.replace("/index");
});

//원데이 이용권 선택
$('.time-content li').click(function () {
    localStorage.setItem("paytime", $(this).find('span').text());
    localStorage.setItem("pay", $(this).children('div').text());
    location.href = "/pay";
});

//페이지 실행 시 원데이이용권 리스트 불러오기
class OnedayService{

    static #instance = null;

    static getInstance() {
        if(this.#instance == null){
            this.#instance = new OnedayService();
        }

        return this.#instance;
    }

    #responseData = null;

    loadOnedayList(){
        this.responseData = OnedayApi.getInstance().getOneday();
        console.log(this.responseData);
        this.getOnedayList(this.responseData);
    }

    getOnedayList(responseData) {
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
    }
}

class OnedayApi{
    static #instance = null;

    static getInstance(){
        if(this.#instance == null) {
            this.#instance = new OnedayApi();
        }
        return this.#instance;
    }

    getOneday(){

        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/time/list",
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
    OnedayService.getInstance().loadOnedayList();
}

