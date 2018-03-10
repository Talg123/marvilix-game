		var time=0;
		var newTime;
		var mytime;
		var name;
		var arr;
		var flag=0;
		var flag1=0;
		var flag2=0;
		var flag3=0;
		var urlGet = "getScore.php";
		var urlPost = "sendScore.php";
		var date = new Date();
		var allData;
		var rerender;
		
$(document).ready(function(){
		var lamp = $("#lamp");
		var rocket = $("#rocket");
		var vitro = $("#vitro");
		
		lamp.click(function(){
			if(flag){
				flag1=1;
				var picUrl = "./Design/images/lamp_h.png"
				lamp.css("background-image", 'url('+picUrl+')');
			}
		})
		rocket.click(function(){
			if(flag){
				flag2=1;
				var picUrl = "./Design/images/rocket_h.png"
				rocket.css("background-image", 'url('+picUrl+')');
			}
		})
		vitro.click(function(){
			if(flag){
				flag3=1;
				var picUrl = "./Design/images/vitro_h.png"
				vitro.css("background-image", 'url('+picUrl+')');
			}
		})
		
		function resetall(){
				var picUrl1 = "./Design/images/lamp.png"
				var picUrl2 = "./Design/images/vitro.png"
				var picUrl3 = "./Design/images/rocket.png"
				lamp.css("background-image", 'url('+picUrl1+')');
				vitro.css("background-image", 'url('+picUrl2+')');
				rocket.css("background-image", 'url('+picUrl3+')');
				flag=0
				flag1=0;
				flag2=0;
				flag3=0;
				time=0;
		}

		var addtime = function(){
			time++;
			if(flag1 && flag2 && flag3 && flag) {
				window.clearInterval(mytime);
				clss.removeClass("animate");
				$("#myTable").css("visibility","visible");
				temp = time % 10;//the millisecounds
				temp2 = Math.floor(time / 10); //the secounds
				newTime = temp2 + '.' +temp; //the whole time
				name = prompt("Hey! please enter your name:");
				$("h2").css("visibility","visible");
				$(".set").css("visibility", "visible");
				
				//reset all
				resetall();
				//render
				sendScore(name , newTime);
			}
		};
		var clss = $('#pointer');
		
		var sendScore = function send(n , s){
			$.ajax({
				type:"POST",
				url:urlPost,
				data: {name: n, score: s, graphx: mouseTrailX, graphy: mouseTrailY},
				success: function(data){
					rerender();
				}
			})
		};
		rerender = function(){
			$('#myTable tbody').children().remove();
			$.ajax({
				type:"GET",
				url: urlGet,
				dataType: 'json',
				success:function(data){
					allData = data;
					$.each(data,function(i, d){
						$('#myTable tbody').append(`
											  <tr>
											  <td>${d.Date}</td>
											  <td>${d.Name}</td>
											  <td>${d.Score}</td>
											  <td><button class='graphXY' data=${d.id}>View</button></td>
											  </tr>`);
					})
				}
			});
		}
		
	$(window).keypress(function(e){
		if(e.keyCode == 0 || e.keyCode == 32){ // pressing SPACE
			e.preventDefault();
			if(!clss.hasClass("animate")){
				clss.addClass("animate");
				mytime = window.setInterval(addtime,100);
				flag=1;
			$(this).mousemove(function(e){// the graph points
				var x = e.clientX;
				var y = e.clientY;
				mouseTrailX.push(x);
				mouseTrailY.push(y);
			})
			}
		}
	})
})