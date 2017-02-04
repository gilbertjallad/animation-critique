dataset = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
//Width and height
var w = 1000;
var h = 500;
//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var bars = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("fill", "yellow")
   .attr("x", function(d, i) {
    return i * (w / dataset.length);
})
   .attr("y", h - 1)
   .attr("width", 40)
   .attr("height", 2);

bars.transition()
  .duration(1000)
  .delay(100)
  .attr("y", function(d) {
    return h - (d * 4);  //Height minus data value
})
   .attr("height", function(d) {
    return d * 4;
})

   dataset = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
//Width and height
var w = 1000;
var h = 500;
//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var bars = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("fill", "yellow")
   .attr("x", function(d, i) {
    return i * (w / dataset.length);
})
   .attr("y", h - 1)
   .attr("width", 40)
   .attr("height", 2);

bars.transition()
  .duration(1000)
  .delay(100)
  .attr("y", function(d) {
    return h - (d * 4);  //Height minus data value
})
   .attr("height", function(d) {
    return d * 4;
})

   dataset = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
//Width and height
var w = 1000;
var h = 500;
//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var bars = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("fill", "yellow")
   .attr("x", function(d, i) {
    return i * (w / dataset.length);
})
   .attr("y", h - 1)
   .attr("width", 40)
   .attr("height", 2);

bars.transition()
  .duration(1000)
  .delay(100)
  .attr("y", function(d) {
    return h - (d * 4);  //Height minus data value
})
   .attr("height", function(d) {
    return d * 4;
})