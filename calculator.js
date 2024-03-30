function combine(value) {
  var input = document.getElementById('inputb');
  input.value += value;
}

function clearInput() {
  document.getElementById("inputb").value = "";
}

function calculate() {
  var input = document.getElementById('inputb');
  var expression = input.value;

  try {
    var result = eval(expression);
    if (Number.isFinite(result)) {
      input.value = result;
    } else {
      input.value = 'Error';
    }
  } catch (error) {
    input.value = 'Error';
  }
}

function backspace() {
  var input = document.getElementById('inputb');
  var currentValue = input.value;
  input.value = currentValue.slice(0, -1);
}

function root() {
  var input = document.getElementById('inputb');
  var value = parseFloat(input.value);
  
  if (value >= 0) {
    input.value = Math.sqrt(value);
  } else {
    input.value = 'Error';
  }
}

