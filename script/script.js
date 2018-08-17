

$(document).ready(function(){

$("#preloader").css({
    display : "flex",

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


});
