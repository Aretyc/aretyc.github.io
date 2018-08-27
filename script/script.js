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
                "background-color": this.color,
            });
        }
        if(window.innerWidth>768 && window.innerWidth<=1024)
        {
       
           
            $('nav').animate({
                width : "100%",
            });

            $('nav').css({
                "background-color": "rgba(0, 0, 0, 0)",
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


});


// it's preload animation no page 
//

$(window).on('load',function(){
    
   
    const about_title_h1 = new Standard_animation_2("#about_title_h1",-1360,1,1000,100);
    const about_title_h2 = new Standard_animation_2("#about_title_h2",1600,1,1000,500);
    const about_title_p = new Standard_animation_2("#about_title_p",0,0,2000,1000);
    const nav_links = new Standard_animation_1("#nav_links",-1000,1,1000,500);
     

    // display preloader 
    $("#preloader").delay(500).fadeOut()


   // start animation 
    
   about_title_h1.animation();
   about_title_h2.animation();
   about_title_p.animation();
  
    $("#nav_links").delay(500).animate({  
    "top" : '0px', 
    },1000,function(){$("#nav_links").addClass("Animate");});
   

    // body start  propertis 
    $('body').css({
        "min-height": window.innerHeight  +"px",
    });
    $('.background_shadow').css({
        height: document.getElementById('body').offsetHeight +"px",
    });


});

window.addEventListener('resize',function(){
console.log( document.getElementById('body').offsetHeight);




    $('body').css({
        "min-height": window.innerHeight  +"px",
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
