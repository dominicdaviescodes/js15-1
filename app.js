const input1 = document.getElementById('input_1');
const input2 = document.getElementById('input_2');
const button = document.getElementById('button');
const displayRes = document.getElementById('container');

function takeName(username) {
  username = input1.value;
  return username;
}

function takeAge(age) {
  age = input2.value;
  return age * 365;
}

button.addEventListener('click', function () {
  event.preventDefault();
  var x = takeName();
  var y = takeAge();

  if (x && y) {
    displayRes.innerHTML = x + ' your age in days is ' + y;
  } else {
    displayRes.innerHTML = 'please insert your name and age';
  }
});
