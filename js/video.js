var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log("auto play is set to" + video.autoplay);
	console.log("loop is set to" + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
}
);

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
}
);

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.90;
	console.log("New speed is " + video.playbackRate.toFixed(2));
}
);

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.90;
	console.log("New speed is " + video.playbackRate.toFixed(2));
}
);

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("New time is " + video.currentTime.toFixed(2));
}
);

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
}
);

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Change Volume");
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
}
);

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change CSS");
	video.classList.add("oldSchool");
}
);

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change CSS");
	video.classList.remove("oldSchool");
}
);


