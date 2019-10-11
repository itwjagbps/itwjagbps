// create an array of all artists

const artists = [
  { name: "Luisa Brandelli", piece: "5 Estrelas" },
  { name: "Alina Rancier", piece: "Ay!" },
  { name: "Elisa Bergel Melo", piece: "ok guarebel" },
  { name: "Javier Maria", piece: "Futuro Flotante" },
  { name: "Ray Ferreira", piece: "undipbienlazy-phantasiatransdermica" },
  { name: "Those Girls", piece: "The Wrong" }
];

// iteratively append artist names to #artist-list
artists.map(artist => {
  // declare a variable that will return a lowercased and kebab cased string for each piece of the artists

  let parsedPiece = artist.piece
    .split(" ")
    .map(d => d.toLowerCase())
    .join("-");

  let name = $(`<li class='list-group-item'>`).html(
    `${artist.name}: <a class='btn btn-primary' href='${parsedPiece}'>${artist.piece} </a>`
  );
  $("#artist-list").append(name);
});
