const CLASSNAME = "-visible";
const DELAY = 1500;
const $target = $(".title");

// 初回のアニメーション実行
$target.addClass(CLASSNAME);

function PageTopCheck() {
    var winScrollTop = $(this).scrollTop();
    var secondTop = $(".area2").offset().top - 150;
    if (winScrollTop >= secondTop) {
      $(".js-scroll").removeClass("scroll-view");
      $(".js-pagetop").addClass("scroll-view");
    } else {
      //元に戻ったら
      $(".js-scroll").addClass("scroll-view");
      $(".js-pagetop").removeClass("scroll-view");
    }
  }
  
  //クリックした際の動き
  $(".scroll-top a").click(function () {
    var elmHash = $(this).attr("href");
    if (elmHash == "#about") {
      var pos = $(elmHash).offset().top;
      $("body,html").animate({ scrollTop: pos }, pos);
    } else {
      $("body,html").animate({ scrollTop: 0 }, 500);
    }
    return false;
  });
  
  $(window).scroll(function () {
    PageTopCheck();
  });
  
  $(window).on("load", function () {
    PageTopCheck();
  });

  $(window).scroll(function () {
    $("#fadeIn-img, #fadeIn-img2").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 120) {
        $(this).addClass("active");
      }
    });
  });

  $(window).scroll(function () {
    $("#fadeIn-text, #fadeIn-text2,#fadeIn-text3, #fadeIn-text4, #fadeIn-text5").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  });

  $(window).scroll(function () {
    $("#fadeIn-box, #fadeIn-box2, #fadeIn-box3").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  });

  $(window).scroll(function (){
    $(".js-markerScrollAnimation").each(function(){
      var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
      var scroll = $(window).scrollTop(); //スクロールの位置を取得
      var windowHeight = $(window).height(); //ウインドウの高さを取得
      if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
        $(this).addClass('is-active'); //クラス「active」を与える
      }
    });
  });


  $('.slider-container').slick({
    autoplay: false,
    centerMode: false,
    centerPadding: '20px',
    slidesToShow: 5,
    slidesToScroll:1,
    swipe:true,
    focusOnSelect: true,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
});