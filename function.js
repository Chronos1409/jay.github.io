var vid = document.getElementById("bg-vid");
var pauseButton = document.querySelector("#vid-pause");

if (window.matchMedia("(prefers-reduced-motion)").matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.innerHTML = "Paused";
}

// function videoFade() {
//   vid.classList.add("stopfade");
// }

vid.addEventListener("ended", function () {
  vid.pause();
  vidFade();
});

pauseButton.addEventListener("click", function() {
    // vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      pauseButton.innerHTML = "Pause";
    } else {
      vid.pause();
      pauseButton.innerHTML = "Paused";
    }
})
  
  