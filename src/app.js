/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var number = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
var pinta = [1, 2, 3, 4];
function random(array) {
  return [Math.floor(Math.random() * array.length)];
}

window.onload = function() {
  //write your code here
  let x = number[random(number)];
  let y = random(pinta);
  //console.log(y);

  let i = document.getElementById("numero");
  let j = document.getElementById("pintarriba");
  let k = document.getElementById("pintabajo");
  i.style.fontSize = "150px";
  j.style.fontSize = "70px";
  k.style.fontSize = "70px";

  i.innerHTML = x;

  if (y == 0) {
    j.innerHTML =
      '<img src="https://github.githubassets.com/images/icons/emoji/unicode/2666.png"></img>';
    k.innerHTML =
      '<img src="https://github.githubassets.com/images/icons/emoji/unicode/2666.png"></img>';
  } else if (y == 1) {
    j.innerHTML =
      '<img src="https://github.githubassets.com/images/icons/emoji/unicode/2665.png"></img>';
    k.innerHTML =
      '<img src="https://github.githubassets.com/images/icons/emoji/unicode/2665.png"></img>';
  } else if (y == 2) {
    j.innerHTML =
      '<img src="https://github.githubassets.com/images/icons/emoji/unicode/2660.png"></img>';
    k.innerHTML =
      '<img src="https://github.githubassets.com/images/icons/emoji/unicode/2660.png"></img>';
  } else {
    j.innerHTML =
      '<img src="https://github.githubassets.com/images/icons/emoji/unicode/2663.png"></img>';
    k.innerHTML =
      '<img src="https://github.githubassets.com/images/icons/emoji/unicode/2663.png"></img>';
  }
};
