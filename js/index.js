/**
 * 
 */
//var escaped = $("html1").text(someHtmlString).html();

var w = 600;
var h = 500;

var dataset = [
[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
[410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

var svg = d3.select("#fjs5")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", function(d) {
       return d[0];
    })
    .attr("cy", function(d) {
	   return d[1];
    })
    .attr("r", 5);