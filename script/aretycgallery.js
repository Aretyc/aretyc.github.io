
(function(){

let elements = new Array(0); // array with all elements 
let similar = new Array(0);  //  temporary array with similar element 
let length = 0;
let index= 0;

        function add() // add to page container with image 
        {
             const text = `
             <div class="aretycGalleryContainer">
                 
                <div class="aretycGalleryClose">
                    <img class="no_drag" src="./img/aretycGallery/img/close.png" alt="close">
                </div> 

                 <div class="aretycGalleryContent">

                
                    <div class="aretycGalleryLeft">
                         <img class="no_drag" src="./img/aretycGallery/img/left.png" alt="close">
                    </div>

                    <div class="aretycGalleryImageConteiner">
                       
                    </div>  

                    <div class="aretycGalleryRight">
                        <img class="no_drag" src="./img/aretycGallery/img/right.png" alt="close">
                    </div>
                 <div>
             </div> `
            $(body).append(text);  
        }

        function inner(href)
        {
            let imageConteiner = document.querySelector(".aretycGalleryImageConteiner");
            imageConteiner.innerHTML=` <img class="no_drag aretycGalleryFullImage" src="${href}" alt="kalkulator">`;
        }
        function close()
        {
            let element = document.querySelector('.aretycGalleryContainer').style.display='none';
        }
        function next()
        {
            console.log('next');
            index++;
            if(index>=length){ index=0;}
            inner(similar[index].href);
        }
        function prev()
        {
            console.log('prev');
            index--;
            if(index<0){ index=(length-1);}
            inner(similar[index].href);
        }

        function click(event,element)
        {
            event.preventDefault();
            inner(element.href);

            // delete all elements from table 
            similar.splice(0,similar.length);

            length = 0;
            index = 0;
            for(let i=0; i<elements.length; i++)
            {
                if(elements[i].dataset.aretycGallery == element.dataset.aretycGallery)
                {
                    similar[length]=elements[i];
                    length++;
                    if(elements[i] == element) { index=i;}
                }
            }



            $(".aretycGalleryContainer").css({
                "display": "flex",
            });

        }

        function resize()
        {
          
            let img = document.querySelector('.aretycGalleryFullImage');
            if(similar[index]!=undefined)
            {
                console.log('ofset '+img.offsetWidth + ' window '+window.innerWidth);
               
               /*
                if(img.offsetWidth>=window.innerWidth)
                {
                    img.style.height="auto";
                    img.style.maxWidth= window.innerWidth-60+"px"; 
                }
                else
                {
                    
                    img.style.height="100%";
                    img.style.maxWidth= "auto";  
                }

                */





            } 
        }
       

        function init()
        {
            // gets all .aretycGallery to array 
            elements = document.querySelectorAll('.aretycGallery');

            // add click event to all elements in array  
            for(let i = 0; i<elements.length;i++)
            {
                elements[i].addEventListener("click",function(event){
                    element=this;
                    click(event,element);

                });
            }
            // add gallery container on page
            add();

           //  add event to close gallery
           document.querySelector('.aretycGalleryClose').addEventListener("click",close);
           // add event to next image 
           document.querySelector('.aretycGalleryRight').addEventListener("click",next);
           // add event to prev image 
           document.querySelector('.aretycGalleryLeft').addEventListener("click",prev);
        }


window.addEventListener("load", init);
window.addEventListener('resize',resize)


})();




