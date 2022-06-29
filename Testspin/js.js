var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

const mySong = document.getElementById("mysong");
const play = document.getElementById("play");
const quat = document.getElementById("quat");

play.onclick = function() {
    if (mySong.paused) {
        mySong.play()
        quat.classList.add("spin");
    } else {
        mySong.pause();
        quat.classList.remove("spin");
    }
}