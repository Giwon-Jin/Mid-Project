$(document).ready(function(){

	$(".play-btn").on("click", function(){
		  var val = $(this).attr("sound-val");
		  $("."+val)[0].play();

	});

	var h1 = document.querySelector('h1');
        h1.addEventListener('input',function(){
            h1.setAttribute('data-content',h1.innerText);
        });
})


        

