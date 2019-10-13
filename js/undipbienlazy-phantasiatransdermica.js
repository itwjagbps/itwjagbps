// create svg canvass dimensions
let height = 200,
  width = 1000;

// append a title svg text to the top-center of #body-container

let container = d3
  .select("body")
  .append("svg")
  .attr("height", height)
  .attr("width", width);

// append text element to container and add text
let title = container
  .append("text")
  .text("undipbienlazy-phantasiatransdermica")
  .style("fill", "white")
  .attr("transform", "translate(0,40)")
  .attr("font-size", "50");

//   append subtitle of author
let subtitle = container
  .append("text")
  .text("Ray Ferreira")
  .style("fill", "white")
  .attr("transform", `translate(${width/3.5},100)`)
  .attr("font-size", "40");
