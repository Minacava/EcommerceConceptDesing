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

//Botton 
