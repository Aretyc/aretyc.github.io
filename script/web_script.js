var nav = {
   
    active:false,
    color: "rgba(0, 0, 0, 0.80)",
   

    show()
    {
        $("nav").finish();
       if(window.innerWidth<=768 && this.active==false){
       
            $('nav').animate({
                width : "200px",
                height: "100%",
            });

            $('nav').css({
             //   "background-color": this.color,
            });
        }
        if(window.innerWidth>768 && window.innerWidth<=1024)
        {
       
           
            $('nav').animate({
                width : "100%",
            });

            $('nav').css({
               // "background-color": "rgba(0, 0, 0, 0)",
            });
        }

        $('#nav_links').css({
            display: "flex",
        });
       
        $('.nav_button').addClass("nav_change");

        this.active=true;

    },
    hide()
    {
        $("nav").finish();

        $('nav').animate({
            width : "100%",
            height: "47px",
        });
       

       if(window.innerWidth<=768 ){
     
            $('nav').css({
                "background-color": this.color,
            });
        }

        this.active=false;

        $('#nav_links').css({
            display: "none",
        });
        $('.nav_button').removeClass("nav_change"); 

    },

}

$(document).ready(function(){

$('.no_drag').on('dragstart', function(event) { event.preventDefault(); });

$("#preloader").css({
    display : "flex",

});

// nav option


$("nav ul li").click( function(){

    if(window.innerWidth<769)
    {
    $("nav ul ").hide();
    $('.nav_button').removeClass("nav_change"); 
    }
        
});

$('.nav_button').click(function(){
if(nav.active==true){nav.hide()}
else{nav.show()}
});

// body start  propertis 
$('body').css({
    "min-height": window.innerHeight  +"px",
});

$('.background_shadow').css({
    height: document.getElementById('body').offsetHeight +"px",
});


//button 

$('.element_button').click(function(){

   $(this).parent().find(".more_content").toggle(1000,);
   //$(this).parent().find("video").delay(400).toggle(1000);
   //$(this).parent().find(".gallery").delay(400).toggle(1000);
   
   if(window.innerWidth<=768 ){
    $(this).parent().find(".less_content").toggle(1000);
    $(this).parents('.mainElements').find(".main_icons").delay(300).toggle(1000);
   }

});

// gallery 



});


// it's preload animation no page 
//

$(window).on('load',function(){
    
   
  
    // display preloader 
    $("#preloader").delay(500).fadeOut()


   // start animation 
  


});

window.addEventListener('resize',function(){


///////////////////////////////////////////////////////////////////////////


    $('body').css({
        //"min-height": window.innerHeight  +"px",
    });
    $('.background_shadow').css({
        height: document.getElementById('body').offsetHeight +"px",
    });


      // nav option 

    if(window.innerWidth>768){
        nav.hide();
        nav.show();
    }
    if(window.innerWidth<=768){
        nav.hide();
    }

});
