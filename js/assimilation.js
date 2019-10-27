console.log($("#assimilation-video").attr("width"));
console.log($(window).width());
if ($(window).width() <= 640) {
  $("#assimilation-video")
    .css("width", "75")
    .css("height", "132");
}
