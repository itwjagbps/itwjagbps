let giphyEmbedLink = "https://media.giphy.com/media/";

let gridData = [
  {
    gifLinks: [
      { name: "hsC2YwH3RMtzBn91uQ", class: "col-md-4 col-sm-12 gif" },
      { name: "hqTfCVz9dT03nrHsDc", class: "col-md-4 col-sm-12 gif" },
      { name: "hsC2YwH3RMtzBn91uQ", class: "col-md-4 col-sm-12 gif" }
    ],
    class: "row gif-row"
  },
  {
    gifLinks: [
      { name: "dy3hu2VUKFFxs2ZwzB", class: "col-md-4 col-sm-12 gif" },
      { name: "mGEjfBYzbInzcirJPo", class: "col-md-4 col-sm-12 gif" },
      { name: "ZZrk4gIW7qwb9YDFW1", class: "col-md-4 col-sm-12 gif" }
    ],
    class: "row gif-row"
  },
  {
    gifLinks: [
      { name: "QX1wdUMZUIpd7ZdiEg", class: "col-md-4 col-sm-12 gif" },
      { name: "hTJ7jWhx4npSJqNTQF", class: "col-md-4 col-sm-12 gif" },
      { name: "RhGhAisyQ0F9hGC8hX", class: "col-md-4 col-sm-12 gif" }
    ],
    class: "row gif-row"
  }
];

let linkEnd = "/giphy.gif";

let container = $("div.container");

gridData.map(row => {
  //   console.log(container);

  // create gifRow
  let gifRow = $(`<div class=${row.class}></div>`);

  // create a col-md-3 column
  let firstCol = $(`<div class=col-md-3 col-sm-3></div>`);

  // append firstCol to row
  gifRow.append(firstCol);

  //   console.log(gifRow);

  // map through gifLinks
  row.gifLinks.map(gif => {
    // console.log(gif);
    // and create divs and give appropriate attributes
    // console.log(gif.class);
    let gifDiv = $(`<div class="${gif.class}"></div>`);

    // create an image and give the appropriate links
    let image = $(
      `<img src=${giphyEmbedLink}${gif.name}${linkEnd} width=100% />`
    );

    // append image to gifDiv
    gifDiv.append(image);

    // console.log(gifDiv);

    // append gifDiv to gifRow

    gifRow.append(gifDiv);
  });

  // append firstCol to gifRow

  gifRow.append(firstCol);

  //   append gifRow to container
  container.append(gifRow);
});
