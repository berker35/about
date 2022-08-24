import data from "./info.json" assert { type: "json" };

$(".card,.get-menu ").click(function (e) {
  $(".wrapper").fadeTo("fast", 0, function () {
    $(".overview-page").css({ display: "grid" });
    $(".overview-page").load("./info.html", function () {
      $(".cards-section").css("display", "none");
      $(".overview-main > img").attr("src", data[e.currentTarget.id].image);
      $(".overview-aside > h1").html(data[e.currentTarget.id].name);
      $(".overview-aside > p").html(data[e.currentTarget.id].description);
      $(".rotation").html(data[e.currentTarget.id].rotation);
      $(".revolution").html(data[e.currentTarget.id].revolution);
      $(".temp").html(data[e.currentTarget.id].temp);
      $(".radius").html(data[e.currentTarget.id].radius);
      $(".wrapper").fadeTo("fast", 1, infoToggler());
    });
  });
});

function infoToggler() {
  $(".planet").click(function (e) {
    $(".wrapper").fadeTo("fast", 0, function () {
      $(".overview-main > img").attr("src", data[e.currentTarget.id].image);
      $(".overview-aside > h1").html(data[e.currentTarget.id].name);
      $(".overview-aside > p").html(data[e.currentTarget.id].description);
      $(".rotation").html(data[e.currentTarget.id].rotation);
      $(".revolution").html(data[e.currentTarget.id].revolution);
      $(".temp").html(data[e.currentTarget.id].temp);
      $(".radius").html(data[e.currentTarget.id].radius);
      $(".wrapper").fadeTo("fast", 1);
    });
  });
}
