/**
 * 
 */

var w = 600;
var h = 500;
var padding = 60;

var dataset = [
[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
[410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
];
var scalax= d3.scale.linear()
            .domain([0,d3.max(dataset,function(d){
            return d[0];})])
            .range([padding,w - padding * 2]);

var scalay = d3.scale.linear()
               .domain([0,d3.max(dataset,function(d){
                  return d[1];})])
               .range([h-padding,padding]);

var scalar = d3.scale.linear() 
               .domain([0, d3.max(dataset, function(d) { return d[1]; })]) 
               .range([2, 5]);

var svg = d3.select("#fjs20")
.append("svg")
.attr("width", w)
.attr("height", h);


svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", function(d) {
	return scalax(d[0]);
})
.attr("cy", function(d) {
	return scalay(d[1]);
})
.attr("r", function (d) {
    return scalar(d[1]);
});

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d) {
	return d[0] + "," + d[1];
}).attr("x", function (d){return scalax(d[0]);})
  .attr("y",function (d){return scalay(d[1]);})
  .attr("font-family", "sans-serif")
.attr("font-size", "11px")
.attr("fill", "#8A9B0F");