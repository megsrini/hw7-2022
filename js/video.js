var video = document.querySelector('.video');
video.autoplay = false;
video.loop = false;

document.getElementById('play').addEventListener('click', playVid);

document.getElementById('pause').addEventListener('click', pauseVid);

document.getElementById('slower').addEventListener('click', slowVid);

document.getElementById('faster').addEventListener('click', speedVid);

document.getElementById('skip').addEventListener('click', skipVid);

document.getElementById('mute').addEventListener('click', muteVid);

document.getElementById('slider').addEventListener('change', volumeNumber);

document.getElementById('vintage').addEventListener('click', oldSchool);

document.getElementById('orig').addEventListener('click', origSchool);

function playVid() {
	video.play();
	var slider = document.getElementById('slider');
	document.getElementById('volume').innerHTML= slider.value + '%';
  }

function pauseVid() {
	video.pause();
  }

function slowVid() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
  }

function speedVid() {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
  }

function skipVid() {
	if (video.currentTime+10>video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime+=10;
	}
	console.log(video.currentTime);
  }

  function muteVid() {
	document.querySelector('#mute').innerHTML = 'Unmute';
	if (video.muted == true){
		document.querySelector('#mute').innerHTML = 'Mute';
		video.muted = false;
	} else {
		document.querySelector('#mute').innerHTML = 'Unmute';
		video.muted = true;
	}
  }

  function volumeNumber() {
	var slider = document.getElementById('slider');
	var output = document.getElementById('volume');
	output.innerHTML = slider.value;
  	output.innerHTML = this.value + '%';
	video.volume = this.value/100;
  }

  function oldSchool(){
	document.querySelector(".video").className= "video oldSchool";
  }

  function origSchool(){
	document.querySelector(".video").className= "video";
  }

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});


//document.querySelector("#play").addEventListener("click", function() {
	//console.log("Play Video");
 //});

