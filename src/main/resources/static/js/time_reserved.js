//홈으로 버튼 이벤트
$('.home-btn').click(function(){
    localStorage.clear();
    location.replace("/index");
});

//정액권 이용권 선택
// $('.time-content li').click(function(){
//     localStorage.setItem("paytime", $(this).find('span').text());
//     localStorage.setItem("pay", $(this).children('div').text());
//     location.href = "/pay";
// });

//페이지 실행 시 지정석 이용권 리스트 불러오기
class ReservedService{

    static #instance = null;

    static getInstance() {
        if(this.#instance == null){
            this.#instance = new ReservedService();
        }

        return this.#instance;
    }

    #responseData = null;

    loadTimeList(){
        this.responseData = ReservedListApi.getInstance().getReservedList();
        console.log(this.responseData);
        this.getReserved(this.responseData);
    }

    getReserved(responseData) {
        console.log(responseData)

        const borders = document.querySelector(".reserved-list");

        responseData.forEach((border, index) => {

            borders.innerHTML += `
            <li>
                <p>
                    <i class="fa-solid fa-ticket"></i>&nbsp&nbsp&nbsp&nbsp&nbsp
                    <span>${border.time}주</span>
                </p>
                <div>${border.price}원</div>
            </li>
            `;

        });

        //지정석 이용권 선택
        $('.reserved-list li').click(function () {
            localStorage.setItem("paytime", $(this).find('span').text());
            localStorage.setItem("pay", $(this).children('div').text());
            location.href = "/pay";
        });

    }
}

class ReservedListApi{
    static #instance = null;

    static getInstance(){
        if(this.#instance == null) {
            this.#instance = new ReservedListApi();
        }
        return this.#instance;
    }

    getReservedList(){

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
                alert("지정석 이용권 불러오기");
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
    ReservedService.getInstance().loadTimeList();
}
