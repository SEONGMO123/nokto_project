lucide.createIcons();

/* 시작하기버튼 클릭시 감성필름으로 이동 */
$(document).ready(function () {
  $(".banner-btn-start").on("click", function (e) {
    e.preventDefault();
    const targetID = $(this).attr("href");
    const target = $(targetID);

    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        700
      );
    }
  });
});

/* home버튼 클릭시 배너로 이동 */
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

/* 호버 시 필터 효과 제거 떼면 나오기 */
$(".film-img").hover(
  function () {
    $(this).css("filter", "none");
  },
  function () {
    const className = $(this).attr("class").split(" ")[1];
    if (className === "retro") {
      $(this).css(
        "filter",
        "sepia(0.2) contrast(110%) brightness(95%) saturate(1.2)"
      );
    } else if (className === "bw") {
      $(this).css("filter", "grayscale(100%) contrast(120%)");
    } else if (className === "fade") {
      $(this).css(
        "filter",
        "brightness(105%) contrast(90%) saturate(0.7) sepia(0.1)"
      );
    }
  }
);

/* 갤러리 스와이퍼 */
const galleryBlockSwiper = new Swiper(".gallery-swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 섹션3(스토리) */
$(document).ready(function () {
  $(".story-card").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );
});

// 화면 크기에 따라 AOS 애니메이션 타입 변경하는 함수
function updateAOSAnimation() {
  const element = document.querySelector(".story-section");
  if (window.innerWidth < 1023) {
    element.setAttribute("data-aos", "fade-right");
  } else {
    // PC 환경
    element.setAttribute("data-aos", "fade-up");
  }
}

/* 갤러리 AOS */
document.addEventListener("DOMContentLoaded", function () {
  updateAOSAnimation();

  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
  });

  window.addEventListener("resize", function () {
    updateAOSAnimation();
    AOS.refresh();
  });
});

/* 메인섹션4(FAQ / CTA) */
$(document).ready(function () {
  $(".faq-item .question").on("click", function () {
    const $questionItem = $(this).closest(".faq-item");

    if ($questionItem.hasClass("active")) {
      $questionItem.removeClass("active");
    } else {
      $(".faq-item").removeClass("active");
      $questionItem.addClass("active");
    }
  });
});
