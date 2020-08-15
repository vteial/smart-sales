$(function () {
  var navMain = $("#navbarDefault");
  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});
