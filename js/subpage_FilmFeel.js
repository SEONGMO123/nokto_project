lucide.createIcons();

/* home,화살표버튼 클릭시 배너로 이동 */
$(document).ready(function () {
  $("#scroll-home, #scroll-home-controls").on("click", function () {
    $("html, body").animate({ scrollTop: $("#hero").offset().top }, 600);
  });
});

/* 모달창 열기 닫기 */
$("#menu-toggle").on("click", function (e) {
  $("#sideMenu").addClass("active");
  $(".side-menu-inner").addClass("active");
  $("html").addClass("overflow-hidden");
});

$("#sideMenuClose").on("click", function () {
  $("#sideMenu").removeClass("active");
  $(".side-menu-inner").removeClass("active");
  $("html").removeClass("overflow-hidden");
});

/* 스크롤내렸을시 헤더 배경 바꾸기 */
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header-wrap").addClass("scroll");
  } else {
    $(".header-wrap").removeClass("scroll");
  }
});

/* AOS */
AOS.init({
  duration: 800,
  easing: "ease-out",
  once: true,
});

/*  */
