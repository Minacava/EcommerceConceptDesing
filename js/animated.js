// Scroll de nav a contacto
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      } 
    });
  })


// Products
// select div and stylish the shadow 

$(document).hover(function() {
  $(".div1").mouseenter(function(){ 
    $(this).addClass('productShadow');
   });
   $(".div1").mouseleave(function(){ 
    $(this).removeClass('productShadow');
   });
});

// Buy Now Bottom //
$(document).hover(function() {
  $(".botonEvent").mouseenter(function(){ 
    $(this).addClass('botoncustom2');
   });
   $(".botonEvent").mouseleave(function(){ 
    $(this).removeClass('botoncustom2');
   });
});
$(document).hover(function() {
  $(".botonEvent1").mouseenter(function(){ 
    $(this).addClass('botoncustom3');
   });
   $(".botonEvent1").mouseleave(function(){ 
    $(this).removeClass('botoncustom3');
   });
});
// Video Review 
var obj = {"video": {
  "value": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='https://www.youtube.com/watch?v=OvVKnC6gGtg' frameborder='0' allowFullScreen></iframe>"
}}
$("#gallery").html(obj.video.value);
