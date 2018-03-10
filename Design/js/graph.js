var mouseTrailX = [];
var mouseTrailY = [];
var graph = function(){
	var trace1 = {
	  x: mouseTrailX,
	  y: mouseTrailY, 
	  type: 'scatter'
	};
	var data = [trace1];
	Plotly.newPlot('graph', data);
	$("#graphShow").css("display", "inline-block");
	
}