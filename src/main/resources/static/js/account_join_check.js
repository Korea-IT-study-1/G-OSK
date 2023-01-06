const cancelBtn = document.querySelector(".cancel-btn");
const goJoinBtn = document.querySelector(".go-join-btn");

cancelBtn.onclick = () => {
    location.replace("/index");
}

goJoinBtn.onclick = () => {
    location.replace("/account/join");
}