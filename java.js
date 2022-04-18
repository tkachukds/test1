


$(function() {
  $(document).on('mousemove', function(e) {
    $('h1').css({
      marginLeft: -e.pageX/10 + 100,
      marginTop: -e.pageY/10 + 100
    })
	  $('h2').css({
	    marginLeft: e.pageX/50 + 100,
	    marginTop: e.pageY/50 + 100
	  })

  })
})//timer
function timer1() {
  var delay = 5,
  output = document.querySelector('.time-left'),
  timer = setInterval(function() {
      output.textContent = --delay;
      if (!delay) {
          clearInterval(timer);
          window.location.href = "page/2.html";
      }
  }, 1000);
 
 output.textContent = delay;
}

function timer2() { setTimeout(function() { window.location.href = "page/2.html"; }, 5000); }
//mp3 

$(document).ready(function(){

var soundLink = $("#sound-link")[0];
window.onload = $(".pic").mouseenter(function() {
   soundLink.play();
    $(".kn").hide();
 // переход   

/* таймер виден
 timer1();
*/

//таймер не виден
timer2();

});

});

function onleft() {
 $(document).ready(function(){
 
  $(".word").slideUp('slow');
  });
};




// появления объектов



setTimeout(function() { $("h2").slideDown('slow'); }, 3000);

setTimeout(function() { $("h2").slideUp('slow'); }, 5000);

setTimeout(function() { onleft(); }, 6000);

    
setTimeout(function() { $(".box").show('slow'); }, 7000);


setTimeout(function() { $(".kn").slideDown('slow'); }, 6000);

setTimeout(function() { $(".svet").show('slow'); }, 8000);

// anim text

function animateWord(word){
  let text = word.dataset.text;
  text.split('').forEach((letter,ind) => {
  let div = document.createElement('div');
  div.innerText = letter;
  setTimeout(()=> word.append(div),ind*200);
})
}

const word = document.querySelector('.word');
animateWord(word);

