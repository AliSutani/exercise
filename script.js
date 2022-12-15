var gifElements = document.querySelectorAll('img.gif');

function setPadding() {
	let w = window.innerWidth;
	let padding = (w-600)/2 - 15
	controlElement.style.left = padding+ "px";
}

for(var e in gifElements) {
  
	var element = gifElements[e];
	
	if(element.nodeName == 'IMG') {
		var supergif = new SuperGif({
			gif: element,
                        max_width: 600,
			progressbar_height: 0,
			auto_play: false,
		});

		var controlElement = document.createElement("div");
		controlElement.className = "gifcontrol loading g"+e;


		supergif.load((function(controlElement) {
			setPadding();
			controlElement.className = "gifcontrol paused";
			var playing = false;
			controlElement.addEventListener("click", function(){
				if(playing) {
					this.pause();
					playing = false;
					controlElement.className = "gifcontrol paused";
				} else {
                                        this.play();
					playing = true;
					controlElement.className = "gifcontrol playing";
				}
			}.bind(this, controlElement));
		
		}.bind(supergif))(controlElement));
    
                var canvas = supergif.get_canvas();		
		controlElement.style.width = canvas.width+"0";
		controlElement.style.height = canvas.height+"0";
                controlElement.style.left = canvas.offsetLeft+"0";
		var containerElement = canvas.parentNode;
		containerElement.appendChild(controlElement);
	
  }
}
