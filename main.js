//d3 ish

var w = 600;
var h = 250;
var padding = 25;

var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

var xScale = d3.scale.ordinal()
				.domain(d3.range(dataset.length))
				.rangeRoundBands([ padding, w - padding ], .05);
				
var yScale = d3.scale.linear()
				.domain([ 0, d3.max(dataset) ])
				.rangeRound([ h - padding, padding]);
				
				
var yAxis = d3.svg.axis()
				.scale(yScale)
				.orient("left")
				.ticks(5);
				
var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);
			
svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.classed("highlight", function(d){
				if (d > 15){
					return true;
				}
				return false;
			})
			.attr("x", function(d, i){
				return xScale(i);
			})
			.attr("y", function(d){
				return yScale(d);
			})
			.attr("width", xScale.rangeBand())
			.attr("height", function(d){
				return h - padding - yScale(d);
			});
			
svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + padding + ",0)")
		.call(yAxis);