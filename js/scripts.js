$(function () {
  // *Carousel Pause/Play Button Script
  $(".carousel").carousel({
    interval: 2000,
  });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
  // !Carousel Pause/Play Button Script

  // Reserve Campsite Button/Modal script
  $("#reserveButton").click(function () {
    $("#reserveModal").modal("show");
  });

  // Login Button/Modal script
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });
});
