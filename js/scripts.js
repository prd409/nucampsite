$(function () {
  // *Carousel Pause/Play Button
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
  // !Carousel Pause/Play Button

  // Reserve Campsite Button/Modal
  $("#reserveButton").click(function () {
    $("#reserveModal").modal("show");
  });

  // Login Button/Modal
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });
});
