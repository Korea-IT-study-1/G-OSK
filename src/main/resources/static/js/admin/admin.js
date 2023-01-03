const productInquiry = document.querySelectorAll(".product-inquiry");

productInquiry[0].onclick = () => {
    location.replace("/admin/productlist");
}
productInquiry[1].onclick = () => {
    location.replace("/admin/userlist");
}
productInquiry[2].onclick = () => {
    location.replace("/admin/seatlist");
}
productInquiry[3].onclick = () => {
    location.replace("/admin/saleslist");
}

$(".go-index-btn").dblclick(function () {
    location.replace("/index");
});