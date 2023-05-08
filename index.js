let one = document.getElementById("score1");

function plusone() {
  newOne = parseInt(one.textContent) + 1;
  one.textContent = newOne;
}

function plusTwo() {
  newTwo = parseInt(one.textContent) + 2;
  one.textContent = newTwo;
}

function plusThree() {
  newThree = parseInt(one.textContent) + 3;
  one.textContent = newThree;
}

let GuestOne = document.getElementById("score2");

function guestOne() {
  newGone = parseInt(GuestOne.textContent) + 1;
  GuestOne.textContent = newGone;
}

function guestTwo() {
  newGtwo = parseInt(GuestOne.textContent) + 2;
  GuestOne.textContent = newGtwo;
}

function guestThree() {
  newGthree = parseInt(GuestOne.textContent) + 3;
  GuestOne.textContent = newGthree;
}
