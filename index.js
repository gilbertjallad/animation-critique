
// background canvas effect
jQuery(document).ready(function($){

var windowXArray = [],
    windowYArray = [];

for (var i = 0; i < $(window).innerWidth(); i++) {
    windowXArray.push(i);
}
    
for (var i = 0; i < $(window).innerHeight(); i++) {
    windowYArray.push(i);
}

function randomPlacement(array) {
    var placement = array[Math.floor(Math.random()*array.length)];
    return placement;
}
    

var canvas = oCanvas.create({
   canvas: '#canvas',
   background: '#2c3e50',
   fps: 20
});

setInterval(function(){

var rectangle = canvas.display.ellipse({
   x: randomPlacement(windowXArray),
   y: randomPlacement(windowYArray),
   origin: { x: 'center', y: 'center' },
   radius: 10,
   fill: '#ffda10',
   opacity: 1
});

canvas.addChild(rectangle);

rectangle.animate({
  radius: 10,
  opacity: 0
}, {
  duration: '1000',
  easing: 'linear',
  callback: function () {
			this.remove();
		}
});

}, 100);

$(window).resize(function(){
canvas.width = $(window).innerWidth();
canvas.height = $(window).innerHeight();
});

$(window).resize();

});

// graph

dataset = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
//Width and height
var w = 500;
var h = 100;
//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var bars = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("fill", "red")
   .attr("x", function(d, i) {
    return i * (w / dataset.length);
})
   .attr("y", h - 1)
   .attr("width", 20)
   .attr("height", 1);

bars.transition()
  .duration(1000)
  .delay(100)
  .attr("y", function(d) {
    return h - (d * 4);  //Height minus data value
})
   .attr("height", function(d) {
    return d * 4;
})