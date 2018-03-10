	$(document).ready(function(){	
		var today            = new Date();
		today.setHours(0,0,0,0);
		var todayTime        = new Date().getTime();
		var month    = new Date().setDate(today.getDate()-30);
		var year    = new Date().setDate(today.getDate()-365);
		
		function orderDate(data, thedate){
			var result = data.filter(function (item) {
			 var itemTime = new Date(item.Date).getTime();
			 return itemTime >= thedate ; 
		  })
		  return result;
		}
		$("#today").click(function(){
			$('#myTable tbody').children().remove();
			arr = orderDate(allData, today);
			$.each(arr,function(i, d){
				$('#myTable tbody').append(`
									  <tr>
									  <td>${d.Date}</td>
									  <td>${d.Name}</td>
									  <td>${d.Score}</td>
									  <td><button class='graphXY' data=${d.id}>View</button></td>
									  </tr>`);
			})
			
		})
		
		$("#month").click(function(){
			$('#myTable tbody').children().remove();
			arr = orderDate(allData, month);
			$.each(arr,function(i, d){
				$('#myTable tbody').append(`
									  <tr>
									  <td>${d.Date}</td>
									  <td>${d.Name}</td>
									  <td>${d.Score}</td>
									  <td><button class='graphXY' data=${d.id}>View</button></td>
									  </tr>`);
			})
			
		})
		
		$("#year").click(function(){
			$('#myTable tbody').children().remove();
			arr = orderDate(allData, year);
			$.each(arr,function(i, d){
				$('#myTable tbody').append(`
									  <tr>
									  <td>${d.Date}</td>
									  <td>${d.Name}</td>
									  <td>${d.Score}</td>
									  <td><button class='graphXY' data=${d.id}>View</button></td>
									  </tr>`);
			})
			
		})
		
		$("#ever").click(function(){
			rerender();
		})
	})