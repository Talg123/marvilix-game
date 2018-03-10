$(document).ready(function(){
	//function to display the graph
	$("#myTable").on('click','.graphXY',function(){
		var id = $(this).attr("data");
		$.each(allData, function(i, d){
			if(d.id == id){
				mouseTrailX = d.GraphX.split(",");
				mouseTrailY = d.GraphY.split(",");
				graph();	
			}
		})
	})
	$("#graphShow").on("click","#close",function(){
		$("#graphShow").css("display", "none");
	})
})