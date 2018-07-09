



function  start_animation()
{
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
    });
    $("#about_title_h1").animate({left: '0px'},1000);
    $("#about_title_h2").delay(500).animate({left: '0px'},1000);
    $("#about_title_p").delay(1000).animate({opacity: '1',},2000);

    $("#nav_ul").delay(500).animate({  
    "top" : '0px', 
    },1000,function(){$("#nav_ul").addClass("Animate");});
}

$(document).ready(function(){

$("#preloader").css({
    display : "flex",

});


/*
    
// tab 

    $('#nav_ul').each(function() {
        const $a = $(this).find('a');

        //po kliknięciu na link...
        $a.on('click', function(e) {
            //podstawiamy pod zmienną $this kliknięty link
            const $this = $(this);

            //pobieramy href klikniętego linka
            const href = $this.attr('href');
            //pobieramy treść na którą wskazuje link
            const $target = $(href);

            //jeżeli ta treść w ogóle istnieje...
            if ($target.length) {
                e.preventDefault(); //przerwij domyślną czynność jeżeli istnieje zawartość zakładki - inaczej niech dziala jak link

                //usuwamy z sąsiednich linków klasę active
                $this.siblings('a').removeClass('active');
                //klikniętemu linkowi dajemy klasę active
                $this.addClass('active');

                //podobne działanie robimy dla treści tabów
                $target.siblings('.tab-content').removeClass('active');
                $target.addClass('active');
            }

        });
    });
    */
});

$(window).on('load',function(){
    
    $("#preloader").css({
        display : "none",
    });
    start_animation();
});
/*
$(window).load(function() {
    
  //  $("#preloader").fadeOut()
});
*/