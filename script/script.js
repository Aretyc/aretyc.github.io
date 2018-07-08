$(document).ready(function(){

    $("#about_title_h1").css({
        left: "-1360px",
    });
    $("#about_title_h2").css({
        left: "1600px",
    });
    $("#about_title_p").css({
        opacity: '0',
    });
    $("#nav_ul").css({
       top: '-1000px',
      // transform: "rotate(-5deg)",
    });

    
 

    $("#about_title_h1").animate({left: '0px'},1000);
    $("#about_title_h2").delay(500).animate({left: '0px'},1000);
    $("#about_title_p").delay(1000).animate({opacity: '1',},2000);

    
    $("#nav_ul").delay(500).animate({  
       "top" : '0px', 
    },1000,function(){$("#nav_ul").addClass("Animate");});
    

});