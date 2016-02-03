function ready() {
	var pointer = document.getElementById('pointer');
	var scaleBlock = document.getElementById('js-scale-block');


	function mouseMoveEvent(event){
		pointer.style.left = event.pageX - 300 + "px";
	};

	function mouseDownEvent(){
		scaleBlock.addEventListener("mousemove", mouseMoveEvent);
	};	

	function mouseOutEvent() {
		scaleBlock.removeEventListener("mousemove", mouseMoveEvent, false);
		if((event.pageX - 265) < 74) {
			pointer.style.left = "-5px";
		} else if((event.pageX - 265) >= 74 && (event.pageX - 265) < 266) {
			pointer.style.left = "141px";
		} else if((event.pageX - 265) >= 266 && (event.pageX - 265) <= 569) {
			pointer.style.left = "366px";
		} else if((event.pageX - 265) > 569) {
			pointer.style.left = "750px";
		}

		console.log("вышел за границу");
	}


	scaleBlock.addEventListener("mousedown", mouseDownEvent, false);
	scaleBlock.addEventListener("mouseup", mouseOutEvent);
}

document.addEventListener("DOMContentLoaded", ready);
	