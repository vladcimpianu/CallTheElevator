$(document).ready(function(){
	// Initial positions for lifts //
	var firstElevatorPosition = 1;
	var secondElevatorPosition = 7;

	class Elevator{
			callElevator(floorInput){
			var distFromFirst = diff(floorInput, firstElevatorPosition);
			var distFromSecond = diff(floorInput, secondElevatorPosition);
			// Comment the alerts if they are annoying //
			alert("Distance from first elevator is " + distFromFirst + " floor(s).");
			alert("Distance from second elevator is " + distFromSecond + " floor(s).");

			if(distFromFirst < distFromSecond){
				if(floorInput < firstElevatorPosition){
					$("#firstElevatorStatus").text("MOVING DOWN ↓").delay(6000);
					$("#firstElevatorStatus").css('color','red');
					setTimeout(function(){ $('#firstElevatorStatus').text('STILL').css('color', 'black').css('color', 'black'); }, 5000);	
					firstElevatorPosition = floorInput;	
					setTimeout(function(){ $('#firstElevator').text(firstElevatorPosition+" FLOOR"); }, 5000);	
				}else{
					$("#firstElevatorStatus").text("MOVING UP ").delay(6000);
					$("#firstElevatorStatus").css('color','red');
					setTimeout(function(){ $('#firstElevatorStatus').text('STILL').css('color', 'black'); }, 5000);
					firstElevatorPosition = floorInput;
					setTimeout(function(){ $('#firstElevator').text(firstElevatorPosition+" FLOOR"); }, 5000);

				}
			}else if(distFromFirst > distFromSecond){
				if(floorInput<secondElevatorPosition){
					$("#secondElevatorStatus").text("MOVING DOWN ↓").delay(6000);
					$("#secondElevatorStatus").css('color','red');
					setTimeout(function(){ $('#secondElevatorStatus').text('STILL').css('color', 'black'); }, 5000);
					secondElevatorPosition = floorInput;	
					setTimeout(function(){ $('#secondElevator').text(secondElevatorPosition+" FLOOR"); }, 5000);
				}else{
					$("#secondElevatorStatus").text("MOVING UP ").delay(6000);
					$("#secondElevatorStatus").css('color','red');
					setTimeout(function(){ $('#secondElevatorStatus').text('STILL').css('color', 'black'); }, 5000);
					secondElevatorPosition = floorInput;
					setTimeout(function(){ $('#secondElevator').text(secondElevatorPosition+" FLOOR"); }, 5000);
				}
				
			}else if(distFromFirst == distFromSecond){
				if(firstElevatorPosition < secondElevatorPosition){
					if(floorInput < firstElevatorPosition){
						$("#firstElevatorStatus").text("MOVING DOWN ↓").delay(6000);
						$("#firstElevatorStatus").css('color','red');
						setTimeout(function(){ $('#firstElevatorStatus').text('STILL').css('color', 'black'); }, 5000);
						firstElevatorPosition = floorInput;
						setTimeout(function(){ $('#firstElevator').text(firstElevatorPosition+" FLOOR"); }, 5000);	
					}else{
						$("#firstElevatorStatus").text("MOVING UP ").delay(6000);
						$("#firstElevatorStatus").css('color','red');
						setTimeout(function(){ $('#firstElevatorStatus').text('STILL').css('color', 'black'); }, 5000);
						firstElevatorPosition = floorInput;
						setTimeout(function(){ $('#firstElevator').text(firstElevatorPosition+" FLOOR"); }, 5000);
					}
				}else{
					if(floorInput<secondElevatorPosition){
						$("#secondElevatorStatus").text("MOVING DOWN ↓").delay(6000);
						$("#secondElevatorStatus").css('color','red');
						setTimeout(function(){ $('#secondElevatorStatus').text('STILL').css('color', 'black'); }, 5000);
						secondElevatorPosition = floorInput;	
						setTimeout(function(){ $('#secondElevator').text(secondElevatorPosition+" FLOOR"); }, 5000);

					}else{
						$("#secondElevatorStatus").text("MOVING UP ").delay(6000);
						$("#secondElevatorStatus").css('color','red');
						setTimeout(function(){ $('#secondElevatorStatus').text('STILL').css('color', 'black'); }, 5000);
						secondElevatorPosition = floorInput;
						setTimeout(function(){ $('#secondElevator').text(secondElevatorPosition+" FLOOR"); }, 5000);
					}	
				}	
			}
			}

		}
		function diff(a, b) {
		  	if (a > b) {
		    		return a - b
		 	} else {
		   		return b - a
		  	};
		}

		const obj = new Elevator();

		function submit(){
			var floorInput = $('#floorInput').val();
			obj.callElevator(floorInput);
		}

		$("#firstElevator").text("FLOOR " + firstElevatorPosition);
		$("#secondElevator").text("FLOOR " + secondElevatorPosition);

		$('#callButton').click(function(){
			submit();
		});

		$("#floorInput").keydown(function(event){
		   if( event.which == 13){
		   submit();       
		   };       
	});

});

