
// const instance = new Typewriter('#typewriter', {
//     strings: ['<span class="wrapper"><span class="span-1">Hello</span>, <span class="span-2">How</span> <span class="span-3">are</span> <span class="span-4">you</span>?</span>', '<span class="wrapper"><strong>Test</strong></span>'],
//     autoStart: true,
//     loop: true,
// });

function addRainbow(event){
    debugger;
    let title = document.getElementById("projects");
    for(i = 0; i < 20; i++){
        let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
        title.style.textDecorationColor = randomColor;
   }
}

// let title = document.getElementById("projects");
// debugger;
// title.addEventListener("click", addRainbow(event))



// add random colour
function rgb(num) {
  return Math.floor(Math.random() * num);
};
let colorChange = function (event) {

  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
};

document.body.onclick = colorChange;


// konami

// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  // document.body.style.backgroundImage = "url('images/cheatBackground.png')";
  document.getElementById("duck-pic").src = "./images/coolcat.png"

  var audio = new Audio('./audio/catindiana.mp3');
  audio.play();

  alert("cheats activated");


}
