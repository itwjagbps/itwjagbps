// set redecode image as body background
let imageUrl = "../images/5-estrelas/gradient.jpg";
$("body")
  .css("background-image", `url(${imageUrl})`)
  .css("background-size", "100% 100%");
  .css("background-repeat", "no-repeat");


// iteratively add the images in their respective columns
let imageCounter = 1;

while (imageCounter < 6) {
  // create a new dom bootstrap column
  let column = $('<div class="col-md-2 col-sm-11"> </div>');

  //   create an image tag and assign css properties
  let imageElement = $(
    `<img class="story-image" src="/images/5-estrelas/${imageCounter}_story.jpg" />`
  );
  imageElement.css("top", window.innerHeight / 2.5);

  // append imageElement to column and column to #5-estrelas-row
  column.append(imageElement);

  $("#estrelas-row").append(column);
  imageCounter++;
}
