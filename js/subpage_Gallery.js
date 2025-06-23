lucide.createIcons();

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

/* 2. 타입 */
$(function () {
  $(".filter-tab").click(function () {
    const target = $(this).data("filter");

    // 탭 활성화 변경
    $(".filter-tab").removeClass("active");
    $(this).addClass("active");

    // 현재 보이는 옵션 숨기기
    $(".filter-options.active").removeClass("active");

    // 약간의 딜레이 후 새 옵션 보이게
    setTimeout(function () {
      $(`.${target}-options`).addClass("active");
    }, 100);
  });
});

/* 3. 타입옵션 */

$(function () {
  // 필터 탭 전환
  $(".filter-tab").click(function () {
    const target = $(this).data("filter"); // 'emotion' or 'type'

    // 탭 UI 전환
    $(".filter-tab").removeClass("active");
    $(this).addClass("active");

    // 필터 옵션 전환
    $(".filter-options").removeClass("active");
    setTimeout(() => {
      $(`.${target}-options`).addClass("active");

      // 전환된 탭의 "전체" 버튼을 자동 클릭
      $(`.${target}-options .filter-option[data-category="all"]`).trigger(
        "click"
      );
    }, 100);

    // 탭 전환 시, 해당 탭이 아닌 카드 모두 숨김
    $(".gallery-card").each(function () {
      const cardTab = $(this).data("tab");
      if (cardTab !== target) {
        $(this).addClass("hide");
      }
    });
  });

  // 필터 옵션 클릭 시 카드 필터링
  $(".filter-option").click(function () {
    const selectedCategory = $(this).data("category"); // 필터 조건 (예: romantic)
    const currentTab = $(".filter-tab.active").data("filter"); // 'emotion' or 'type'

    $(".gallery-card").each(function () {
      const cardTab = $(this).data("tab");
      const emotion = $(this).data("emotion");
      const type = $(this).data("type");

      // 현재 탭이 아닌 카드는 모두 숨김
      if (cardTab !== currentTab) {
        $(this).addClass("hide");
        return;
      }

      // 선택된 필터 조건에 따라 해당되는 카드만 보여줌
      if (selectedCategory === "all") {
        $(this).removeClass("hide");
      } else {
        if (
          (currentTab === "emotion" && emotion === selectedCategory) ||
          (currentTab === "type" && type === selectedCategory)
        ) {
          $(this).removeClass("hide");
        } else {
          $(this).addClass("hide");
        }
      }
    });
  });

  // 하트 좋아요 토글
  $(".gallery-grid").on("click", ".like-btn", function () {
    $(this).find("i").toggleClass("fa-regular fa-solid");
  });
});

$(document).ready(function () {
  $(
    '.filter-options.emotion-options .filter-option[data-category="all"]'
  ).click();
});
