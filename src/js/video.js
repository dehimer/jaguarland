
window.onload = function() {
	var video = document.getElementsByTagName("video")[0];
	var videoContainer = video.parentElement;
	var resizeTimer;

	var videoSizes = {
		width: video.offsetWidth,
		height: video.offsetHeight
	};

	var updateVideoSizes = function () {
		if(videoSizes.width > videoContainer.offsetWidth && videoSizes.height > videoContainer.offsetHeight){
			var videoSidesK = videoSizes.width/videoSizes.height;
			var videoContainerSidesK = videoContainer.offsetWidth/videoContainer.offsetHeight;
			if(videoSidesK > videoContainerSidesK) {
				video.className = "fitHeight";
			}else{
				video.className = "fitWidth";
			}
		}else{
			video.className = "";
		}
	}
	
	window.onresize = function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(updateVideoSizes, 100);
	}

	updateVideoSizes();
}
