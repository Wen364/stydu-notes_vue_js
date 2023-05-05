window.addEventListener('load',function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,  // 切换页面所需时间
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // 点击小圆点允许切换图片
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
})