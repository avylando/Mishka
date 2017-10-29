var playButton = document.querySelector(".production__icon-play");
var video = document.querySelector(".production__media");

playButton.addEventListener("click", function (evt) {
  playButton.classList.add("production__icon-play--hide");
  video.classList.add("production__media--show");
  setTimeout(function() {
    $(video).trigger('click');
  }, 1000);
});
