// create an array of all artists

const artists = [
  {
    name: "Ad Minolti",
    piece: "Play Significant Otherness",
    outerLink: "http://minoliti.com.ar/P_S_O/web-export/"
  },
  { name: "Luisa Brandelli", piece: "5 Estrelas", outerLink: false },
  { name: "Alina Rancier", piece: "Ay!", outerLink: false },
  { name: "Elisa Bergel Melo", piece: "ok guarebel", outerLink: false },
  {
    name: "Javier Maria",
    piece: "Futuro Flotante",
    outerLink: "https://fade-cut.github.io/futuroflotante/"
  },
  {
    name: "Ray Ferreira",
    piece: "undipbienlazy-phantasiatransdermica",
    outerLink: false
  },
  { name: "Those Girls", piece: "The Wrong", outerLink: false }
];

// iteratively append artist names to #artist-list
artists.map(artist => {
  // declare a variable that will return a lowercased and kebab cased string for each piece of the artists

  let parsedPiece = artist.outerLink
    ? artist.outerLink
    : artist.piece
        .split(" ")
        .map(d => d.toLowerCase())
        .join("-");

  let name = $(`<li class='list-group-item'>`).html(
    `${artist.name}: <a class='btn btn-primary' href='${parsedPiece}.html'>${artist.piece} </a>`
  );
  $("#artist-list").append(name);
});
