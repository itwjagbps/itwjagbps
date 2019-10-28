// ----------------------------------------------------
// store the #content-row in a variable
let contentRow = $("#content-row");

// store a list of vimeo links to an array
let vimeoVideoArray = [
  "https://player.vimeo.com/video/369189828",
  "https://player.vimeo.com/video/369190199",
  "https://player.vimeo.com/video/369190335",
  "https://player.vimeo.com/video/369190447",
  "https://player.vimeo.com/video/369190606"
];

// store the iframe src format for vimeo embed links
let src = `?title=0&byline=0&portrait=0"`;

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
    `<iframe src=${video}${src} width=${width} height=${height} frameborder=${frameborder} allow${allow} allowfullscreen id="video-${i}" class="video"></iframe>`
  );

  // append iframe to contentCol and contentCol to contentRow
  contentCol.append(iframe);
  contentRow.append(contentCol);
});
