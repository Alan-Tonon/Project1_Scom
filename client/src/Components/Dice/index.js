function DiceRoll() {

var diceImage1 = 0;
var diceImage2 = 0;
var diceArray = [
  "Image_Dice/Dice1.png",
  "Image_Dice/Dice2.png",
  "Image_Dice/Dice3.png",
  "Image_Dice/Dice4.png",
  "Image_Dice/Dice5.png",
  "Image_Dice/Dice6.png"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var rollElement = document.getElementById("roll");
var imageDice1 = document.getElementById("diceimage1");
var imageDice2 = document.getElementById("diceimage2");

function kocokDadu() {
  diceImage1 = getRandomInt(6);
  diceImage2 = getRandomInt(6);
  imageDice1.src = diceArray[diceImage1];
  imageDice2.src = diceArray[diceImage2];
}

rollElement.addEventListener("click", function(event) {
  kocokDadu();
});

kocokDadu();

}

export default DiceRoll;