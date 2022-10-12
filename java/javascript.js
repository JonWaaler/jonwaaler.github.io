$(document).ready(function () {
  $("#button").click(function () {
    $("#navigation").toggleClass("show");
  });

  function toggleMyWork(showGames) {
    // Add/Remove show-projects class to the specified container
    $(".container-projects").first().toggleClass("show-projects", showGames);
    $(".container-projects").last().toggleClass("show-projects", !showGames);

    // active project tab effects
    $("#show-games").toggleClass("btn-active", showGames);
    $("#show-websites").toggleClass("btn-active", !showGames);
  }

  toggleMyWork(true);

  $("#show-games").on("click", function () {
    console.log("GAMES");
    toggleMyWork(true);
  });

  $("#show-websites").click(function () {
    console.log("WEBSITES");
    toggleMyWork(false);
  });
});
