$(document).ready(function() {
  $("form#suggester").submit(function() {
    event.preventDefault();
    var operator = $("input:radio[name=question3]:checked").val();
    var result;
    if (operator === "JavaScript") {
      result = $("#JavaScript").fadeToggle();
    } else if (operator === "Swift") {
      result = $("#Swift").fadeToggle();
    } else if (operator === "Python") {
      result = $("#Python").fadeToggle();
    }
  });
});

$(document).ready(function() {
  $("form#suggester").submit(function() {
    event.preventDefault();
    var operator = $("input:radio[name=surprise]:checked").val();
    var result;
    if (operator === "happypanda") {
      result = $("#happypanda").fadeToggle();
    } else if (operator === "sadpanda") {
      result = $("#sadpanda").fadeToggle();
    }
  });
});
