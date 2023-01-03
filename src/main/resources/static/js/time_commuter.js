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

//페이지 실행 시 정액권 이용권 리스트 불러오기
class CoummuterService{

    static #instance = null;

    static getInstance() {
        if(this.#instance == null){
            this.#instance = new CoummuterService();
        }

        return this.#instance;
    }

    #responseData = null;

    loadTimeList(){
        this.responseData = CommuterListApi.getInstance().getCommuterList();
        console.log(this.responseData);
        this.getCommuter(this.responseData);
    }

    getCommuter(responseData) {
        console.log(responseData)

        const borders = document.querySelector(".commuter-list");

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

        //정액권 이용권 선택
        $('.commuter-list li').click(function () {
            localStorage.setItem("paytime", $(this).find('span').text());
            localStorage.setItem("pay", $(this).children('div').text());
            location.href = "/pay";
        });

    }
}

class CommuterListApi{
    static #instance = null;

    static getInstance(){
        if(this.#instance == null) {
            this.#instance = new CommuterListApi();
        }
        return this.#instance;
    }

    getCommuterList(){

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
    CoummuterService.getInstance().loadTimeList();
}
