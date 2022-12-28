const seatbasic = document.querySelector(".seat-basic");
const seatspecial = document.querySelector(".seat-special");
const basic = document.querySelector(".basic");
const special = document.querySelector(".special");

//선택한 좌석 클릭 시 버튼색깔 변경 및 좌석 이름 표시
$(".seat-content button").click(function(){
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
})

//일반석, 지정석 종류 버튼 히든
function hidden_btn(time){
    if(time == "oneday" || time == "commuter" || time == "inout"){
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