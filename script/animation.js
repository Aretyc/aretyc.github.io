class Standard_animation_1{
    
    constructor(id,top,opacity,time,delay)
    {
        this.id = id;           // id, class or tag element 
        this.top = top +"px";   // start top 
        this.opacity=opacity;   // start opacity 
        this.time = time;       // time animation in ms 
        this.delay = delay;     // delay time in ms 
        this.status =  false;   // animation run ones 
        this.sittings()
    }

    sittings()
    {
        $(this.id).css({top: this.top ,opacity: this.opacity}); 
    }
    animation()
    {
        if (this.status == false)
        {
            this.sittings();
            $(this.id).delay(this.delay).animate({top: "0",opacity: "1"},this.time);
            this.status=true;
        }
        
    }
};

class Standard_animation_2{
    
    constructor(id,left,opacity,time,delay)
    {
        this.id = id;           // id, class or tag element 
        this.left = left +"px";   // start left 
        this.opacity=opacity;   // start opacity 
        this.time = time;       // time animation in ms 
        this.delay = delay;     // delay time in ms 
        this.status =  false;   // animation run ones 
        this.sittings()
    }

    sittings()
    {

        $(this.id).css({position: "relative", left: this.left ,opacity: this.opacity}); 
    }
    animation()
    {
        if (this.status == false)
        {
            this.sittings();
            $(this.id).delay(this.delay).animate({left: "0",opacity: "1"},this.time);
            this.status=true;
        }
        
    }
};



// text animation 

class TextAnimation1 {
    constructor(id,delay)
    {
        this.id = id;  // id element without #
        this.delayAnimation=delay;
        this.status =  false;  

        // css option 
        

        // 
        let textPom;
        let element = document.getElementById(this.id);
        let text = element.textContent;

        //Remove whitespace 
        text =  text.trim();

        // Split a string into an array of substrings
        text = text.split(' ');

        // add <span> between elenets 
        textPom="<span>"+text[0]+" </span>";
        for(let i=1; i<text.length;i++)
        {
            textPom = textPom+"<span>"+text[i]+" </span>";     
        }
        // inner html in element 
        element.innerHTML = textPom;
        $("#"+this.id+" span").css({left: "-20px", opacity : 0,});
    }

    animation()
    {
        if( this.status == false)
        {
           
            $("#"+this.id+" span").css({left: "-20px",opacity : 0,});
            

                $("#"+this.id+" span").each(function(i)
                {
                $(this).delay(i*50).animate({left: "0px", opacity: 1,},400);
                 });
            this.status=true;
        }
        
    }
};

