// pick random image from /images/the-perfect-veil

// pick a random number from 0 through 3
$('body').css('background-color', 'black')
let getRandomInt = max => {
  max = 3;
  return Math.floor(Math.random() * Math.floor(max));
};

console.log(window.innerHeight);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// every 5 seconds, let's pick a random number
let gifCounter = 0;
function appendImage() {
  $(".gifContainer").css("position", "relative");
  let imageNumber = getRandomInt();
  let image = $(`<img src="../images/the-perfect-veil/${imageNumber}.gif" />`);
  image
    .css("position", "absolute")
    .css("top", `${getRandomIntInclusive(0, window.innerHeight/1.7)}px`)
    .css("left", `${getRandomIntInclusive(0, window.innerWidth/1.5)}px`);
  $("#gifDiv").append(image);

  gifCounter++;
  console.log(gifCounter);
  if (gifCounter > 200) {
    //   console.log('stop!');
    stopAppending();
  }
}
let runAppend = setInterval(appendImage, 500);

console.log(gifCounter);

function stopAppending() {
  clearInterval(runAppend);
}

// append image to container
