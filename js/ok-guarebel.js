// ----------------------------------------------------
// store the #content-row in a variable
let contentRow = $("#content-row");

// store a list of vimeo links to an array
let vimeoVideoArray = [
  "https://player.vimeo.com/video/369646188",
  "https://player.vimeo.com/video/369646627",
  "https://player.vimeo.com/video/369647145",
  "https://player.vimeo.com/video/369648560",
  "https://player.vimeo.com/video/369650964",
  "https://player.vimeo.com/video/369634206",
  "https://player.vimeo.com/video/369642546",
  "https://player.vimeo.com/video/369643078",
  "https://player.vimeo.com/video/369644694",
  "https://player.vimeo.com/video/369644869",
  "https://player.vimeo.com/video/369645205",
  "https://player.vimeo.com/video/369645584"
];

// store the iframe src format for vimeo embed links
let src = `?title=0&byline=0&portrait=0&autoplay=1"`;

// store width and height, frameborder, and allow parameter values of vimeo embed links
let width, height, frameborder, allow;
(width = "456"),
  (height = "257"),
  (frameborder = "0"),
  (allow = "autoplay; fullscreen");

// iterate over vimeoVideoArray
vimeoVideoArray.map((video, i) => {
  // store a bootstrap col-md-2 column in a variable
  let contentCol = $(`<div class="col-md-2 col-sm-4"></div>`);

  // create an iframe element with corresponding parameters
  let iframe = $(
    `<iframe src=${video}${src} width=${width} height=${height} frameborder=${frameborder} allow${allow} webkitallowfullscreen mozallowfullscreen allowfullscreen id="video-${i}" class="video"></iframe>`
  );

  // append iframe to contentCol and contentCol to contentRow
  contentCol.append(iframe);
  contentRow.append(contentCol);
});
