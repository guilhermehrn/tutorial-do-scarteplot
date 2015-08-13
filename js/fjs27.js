var dataset = [ [5, 20], [480, 90], [250, 50], [100, 33], [330, 95], 
	[410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [600, 150]]; 

var w = 600; 
var h = 500; 
var padding = 60; 

var scalax= d3.scale.linear() 
            .domain([0,d3.max(dataset,function(d){ 
            return d[0];})]) 
            .range([padding,w - padding * 2]); 

var scalay = d3.scale.linear() 
            .domain([0,d3.max(dataset,function(d){ 
            return d[1];})]) 
            .range([h-pad,pad]); 

var scalar = d3.scale.linear() 
                     .domain([0, d3.max(dataset, function(d) { return d[1]; })]) 
                     .range([2, 5]); 


var axeX = d3.svg.axis().scale(scalax).orient("bottom").ticks(5); 
var axeY = d3.svg.axis() 
                  .scale(scalay) 
                  .orient("left") 
                  .ticks(5); 




    var svg = d3.select("#fjs27") 
    .append("svg") 
    .attr("width", w) 
    .attr("height", h); 

    svg.selectAll("circle") 
    .data(dataset) 
    .enter() 
    .append("circle") 
    .attr("cx", function (d){return scalax(d[0]);}) 
    .attr("cy",function (d){return scalay(d[1]);}) 
    .attr("r", function (d) {return scalar(d[1]);} ); 

    svg.selectAll("text") 
    .data(dataset) 
    .enter() 
    .append("text").text(function (d){ 
    	return d[0] + " , " + d [1]; 
    }) 
    .attr("x", function (d){return scalax(d[0]);}) 
    .attr("y",function (d){return scalay(d[1]);}) 
    .attr("fill", "#8A9B0F") 
    .attr("font-seze", "11px"); 

    svg.append("g").attr("class", "axis")
       .attr("transform", "translate(0,"+(h - padding)+")")
       .call(axeX)
       .append("text") // aqui estamos adicionando os nomes dos eixos
       .attr("class", "label")
       .attr("transform", "rotate(-90)") //aqui estamos rotacionando os o nome do eixo y
       .attr("y", 6) //posição y do nome
       .attr("x",221) // posição x  do nome
       .attr("dy", ".71em") //distância do nome para o eixo y
       .style("text-anchor", "end")
       .text("Eixo Y");
    
    svg.append("g").attr("class", "axis")
       .attr("transform","translate(" + padding + ",0)")
       .call(axeY)
       .append("text") // aqui estamos adicionando os nomes dos eixos
       .attr("class", "label")
       .attr("x", 250) 
       .attr("y", h-20)
       .style("text-anchor", "end")
       .text("Eixo X");
    
    
    
    
    
    
    
    
    
    
    
    