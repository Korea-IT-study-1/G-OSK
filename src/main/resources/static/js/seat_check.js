const seatbasic = document.querySelector(".seat-basic");
const seatspecial = document.querySelector(".seat-special");
const basic = document.querySelector(".basic");
const special = document.querySelector(".special");
const btn = document.querySelectorAll(".btn1");

special.onclick =() => {
    seatspecial.classList.remove("invisible");
    seatbasic.classList.add("invisible");
    basic.classList.remove("sky-btn");
    special.classList.add("sky-btn");
}
basic.onclick =() => {
    seatbasic.classList.remove("invisible");
    seatspecial.classList.add("invisible");
    special.classList.remove("sky-btn");
    basic.classList.add("sky-btn");
}

$(".seat-content button").click(function(){
    if($(this).hasClass('sky-btn') == true){
        $(this).removeClass('sky-btn');
        $(".locker-select-name").attr('value',"");
    }else{
        $(this).addClass('sky-btn').siblings().removeClass('sky-btn');
        $('.locker-select-name').attr('value',$(this).text());
    }
})

