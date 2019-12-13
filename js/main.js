// create an array of all artists

const artists = [
  {
    name: "🔗",
    piece: "",
    outerLink: ""
  },
  {
    name: "Ad Minoliti",
    piece: "Play Significant Otherness",
    outerLink: "/pso"
  },
   {
    name: ", 🔗",
    piece: "",
    outerLink: ""
  },
  {
    name: "Luisa Brandelli",
    piece: "5 Estrelas",
    outerLink: "/5-estrelas"
  },
  {
    name: ", 🔗",
    piece: "",
    outerLink: ""
  },
  { name: "Alina Rancier", piece: "Ay!", outerLink: "/ay!" },
  {
    name: ", 🔗",
    piece: "",
    outerLink: ""
  },
  {
    name: "Elisa Bergel Melo",
    piece: "ok guarebel",
    outerLink: "/ok-guarebel"
  },
  {
    name: ", 🔗",
    piece: "",
    outerLink: ""
  },
  {
    name: "Javier Maria",
    piece: "Futuro Flotante",
    outerLink: "/untitled"
  },
  {
    name: ", 🔗",
    piece: "",
    outerLink: ""
  },
  {
    name: "ray ferreira",
    piece: "undipbienlazy-phantasiatransdermica",
    outerLink: "/undipbienlazy-phantasiatransdermica"
  },
  {
    name: ", 🔗",
    piece: "",
    outerLink: ""
  },
  {
    name: "Gala Berger",
    piece: "The Light in the Foggy Coast",
    outerLink: "/the-light-in-the-foggy-coast"
  },
  {
    name: ", 🔗",
    piece: "",
    outerLink: ""
  },
  {
    name: "Those Girls",
    piece: "The Perfect Veil",
    outerLink: "/the-perfect-veil"
  },
  {
    name: ", 🔗",
    piece: "",
    outerLink: ""
  },
  {
    name: "Gabriella Torres-Ferrer",
    piece: "Assimilation",
    outerLink: "/itwjgbps?"
  }
  // {
  //   name: "Joiri Minaya",
  //   piece: "Redecode",
  //   outerLink: "/redecode.html"
  // }
];

// add &nbsp blank spaces in front of .artist-list to indent artist names

 //let i = 0;
 //while (i <= 1) {
 // $(".artist-list").append(`&nbsp;,`);
 // i++;
 //}

// iteratively append artist names to #div-col-artists
artists.map(artist => {
  // declare a variable that will return a lowercased and kebab cased string for each piece of the artists
  let pieceName = artist.piece
    .split(" ")
    .map(word => word.toLowerCase())
    .join("-");
  let name = $(`<li class='artist' data-piece=${pieceName}>`).html(
    `<a class="artist-link" id=${pieceName} href="${artist.outerLink}">${artist.name}</a>`
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
  .css("z-index", "-10")
  .css("top", "-100px")
  .css("left", "23%");

$("#div-col-artists").append(imageDiv);

$("li").mouseover(function() {
  console.log($(this).attr("class"));
  let pieceImage = $(
    `<img id=${$(this).attr("data-piece")} src='/images/stills/${$(this).attr(
      "data-piece"
    )}.png' />`
  );
  console.log(pieceImage.attr("height"));
  pieceImage.css("height", "75%").css("width", "75%");
  imageDiv.html(pieceImage);

  if (pieceImage.attr("id") === "the-perfect-veil") {
    imageDiv.css("left", "40%").css("top", "0px");
  } else if (pieceImage.attr("id") === "ok-guarebel") {
    imageDiv.css("left", "18%").css("top", "-50px");
  } else if (pieceImage.attr("id") === "5-estrelas") {
    imageDiv.css("left", "40%").css("top", "-50px");
    pieceImage.css("height", "30%").css("width", "30%");
  } else if (pieceImage.attr("id") === "ay!") {
    imageDiv.css("left", "34%").css("top", "-80px");
  } else if (pieceImage.attr("id") === "assimilation") {
    imageDiv.css("left", "25%").css("top", "-50px");
  }
  else if (pieceImage.attr("id") === "the-light-in-the-foggy-coast") {
    imageDiv.css("left", "25%").css("top", "-50px");
  }
  else {
    imageDiv.css("left", "20%").css("top", "-50px");
  }
});

$("li").mouseout(function() {
  imageDiv.empty();
});

