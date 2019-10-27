// create an array of all artists

const artists = [
  {
    name: "Ad Minolti",
    piece: "Play Significant Otherness",
    outerLink: "https://minoliti.com.ar/P_S_O/web-export/"
  },
  {
    name: "Luisa Brandelli",
    piece: "5 Estrelas",
    outerLink: "/5-estrelas.html"
  },
  { name: "Alina Rancier", piece: "Ay!", outerLink: "/ay!.html" },
  { name: "Elisa Bergel Melo", piece: "ok guarebel", outerLink: false },
  {
    name: "Javier Maria",
    piece: "Futuro Flotante",
    outerLink: "https://fade-cut.github.io/futuroflotante/"
  },
  {
    name: "Ray Ferreira",
    piece: "undipbienlazy-phantasiatransdermica",
    outerLink: "/undipbienlazy-phantasiatransdermica.html"
  },
  {
    name: "Gabriella Torres-Ferrer",
    piece: "Assimilation",
    outerLink: "/assimilation.html"
  },
  {
    name: "Those Girls",
    piece: "The Perfect Veil",
    outerLink: "/the-perfect-veil.html"
  },
  {
    name: "Gala Berger",
    piece: "The Light in the Foggy Coast",
    outerLink: "/the-light-in-the-foggy-coast.html"
  },
  {
    name: "Joiri Minaya",
    piece: "Redecode",
    outerLink: "/redecode.html"
  }
];

// add &nbsp blank spaces in front of .artist-list to indent artist names

let i = 0;
while (i <= 10) {
  $(".artist-list").append(`&nbsp;`);
  i++;
}

// iteratively append artist names to #div-col-artists
artists.map(artist => {
  // declare a variable that will return a lowercased and kebab cased string for each piece of the artists
  let name = $(
    `<li class='artist' data-piece=${artist.piece
      .split(" ")
      .map(word => word.toLowerCase())
      .join("-")}>`
  ).html(
    `<a class="artist-link" href="${artist.outerLink}">${artist.name}</a>`
  );
  $(".artist-list").append(name);
});

// append 3 col-md-3 to #div-header iteratively

let col = 0;
let colList = [];

while (col < 3) {
  let divCol = $(`<div class='col-md-3 col-sm-3'>`);
  colList.push(divCol);
  console.log(divCol, col);
  $("#div-header").append(divCol);
  col++;
}

// iterate through each column of colList and add 4 items corresponding to artist pieces iteratively
// let items = 3;
// let artistBuckets = [];

// for (let i = 0; i < artists.length; i += items) {
//   artistBuckets.push(artists.slice(i, i + items));
// }

// colList.map((col, i) => {
//   if (i < artistBuckets.length) {
//     artistBuckets[i].map(d => {
//       console.log(d.piece);
//       let pieceName = $(`<a href='${d.outerLink}'><p>${d.piece}</p></a>`);
//       col.append(pieceName);
//     });
//   }
// });

// integrate mousover and mouseleave events to each list item

// append a div to #div-col-artists
let imageDiv = $(`<div class="img-div"></div>`)
  .css("position", "absolute")
  .css("z-index", "-5")
  .css("top", "0")
  .css("left", "20%");
$("#div-col-artists").append(imageDiv);

$("li").mouseover(function() {
  console.log($(this).attr("class"));
  let pieceImage = $(
    `<img src='./images/stills/${$(this).attr("data-piece")}.png' />`
  );
  console.log(pieceImage.attr("height"));
  pieceImage.css("height", "75%").css("width", "75%");
  imageDiv.html(pieceImage);
});

$("li").mouseout(function() {
  imageDiv.empty();
});
