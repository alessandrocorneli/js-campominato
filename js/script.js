var punti = 0;
var numeriUser = [];
var tentativi = 3;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

function inArray(array, element){
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] == element) {
      return true;
    }
  }
}
while (numeriUser.length < tentativi) {
  var userNumber = parseInt(prompt("Inserisci un numero da 1 a 100:"));
  if (true) {

  }
}
