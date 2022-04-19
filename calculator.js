function clickButton(button) {
  let result = document.getElementById("result");
  let number = button.innerHTML;
  
  if (number == "AC") {
    result.innerHTML = "0";
  } else if (number == "=") {
    result.innerHTML = eval(result.innerHTML);
  } else if (number == "00") {
    
  } else {
    if (result.innerHTML == "0" && number == ".") {
      result.innerHTML = "0.";
    } else if (result.innerHTML == "0") {
      result.innerHTML = number;
    } else {
      result.innerHTML += number;
    }
  }
}

/*global $*/
$('#point, .operator').prop('disabled',true);

$('.number').click(function() {
  $('#point, .operator').prop('disabled', false);
});

$('#point, .operator').click(function() {
  $('#point, .operator').prop('disabled', true);
});

$('#clear').click(function() {
  $('#point, .operator').prop('disabled', true);
});