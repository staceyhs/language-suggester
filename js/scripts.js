$(document).ready(function() {
  $("form#suggester").submit(function() {
    event.preventDefault();
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "JavaScript") {
      result = $("#JavaScript").fadeToggle();
    } else if (operator === "Swift") {
      result = $("#Swift").fadeToggle();
    } else if (operator === "Python") {
      result = $("#Python").fadeToggle();
    }
    $("#output").text(result);
  });
});