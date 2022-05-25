var colors = ["Green", "Red", "Purple", "Blue", "Pink", "Orange", "Yellow", "Coral", "Violet", "Lime", "Turquoise", "Crimson", "Chocolate", "Magenta", "Gold", "Salmon", "Tomato", "RoyalBlue", "Gray", "Olive"]; //20 cores
var btn = document.getElementById("botao");
var color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }