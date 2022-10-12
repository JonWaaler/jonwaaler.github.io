$(document).ready(function () {
  $("#button").click(function () {
    $("#navigation").toggleClass("show");
  });

  function toggletMyWork(showGames) {
    // Add/Remove show-projects class to the specified container
    $(".container-projects").first().toggleClass("show-projects", showGames);
    $(".container-projects").last().toggleClass("show-projects", !showGames);

    // active project tab effects
    $("#show-games").toggleClass("btn-active", showGames);
    $("#show-websites").toggleClass("btn-active", !showGames);
  }
  toggletMyWork(true);

  $("#show-games").on("click", function () {
    console.log("GAMES");
    toggletMyWork(true);
  });

  $("#show-websites").click(function () {
    console.log("WEBSITES");
    toggletMyWork(false);
  });
});
