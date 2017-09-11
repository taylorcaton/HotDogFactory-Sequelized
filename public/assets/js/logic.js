console.log("js logic loaded");

$(".btn-hotdog").on("click", removeDog);

$("#btn-custom-hotdog").on("click", addDog);

function removeDog(e) {
  // e.preventDefault();
  var $button = $(this);

  if ($button.data("pressed") !== true) {
    console.log(`Sending ID: ${$(this).attr("value")} to the update script`);

    $.ajax({
      type: "PUT",
      url: "/",
      data: { id: $(this).attr("value") },
      success: function(res) {
        console.log("Ajax done.");
        location.reload();
      }
    });
  }
}

function addDog(e) {
  // e.preventDefault();
  var name = $("#hotdog_name").val();

  console.log(`Sending ID: ${name} to the add script`);

  $.ajax({
    type: "POST",
    url: "/",
    data: { name: name },
    success: function(res) {
      console.log("Ajax done.");
      location.reload();
    }
  });
}
