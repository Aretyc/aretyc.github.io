
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

                
                    <div class="aretycGalleryLeft aretycGalleryArrow">
                         <img class="no_drag" src="./img/aretycGallery/img/left.png" alt="close">
                    </div>

                    <div class="aretycGalleryImageConteiner">
                       
                    </div>  

                    <div class="aretycGalleryRight aretycGalleryArrow">
                        <img class="no_drag" src="./img/aretycGallery/img/right.png" alt="close">
                    </div>
                 <div>
             </div> `;
            $(body).append(text);  
        }

        function inner(href)
        {
            let imageConteiner = document.querySelector(".aretycGalleryImageConteiner");
            imageConteiner.innerHTML=
            ` 
            <img class="no_drag aretycGalleryFullImage" src="${href}" alt="kalkulator">
            <div class="aretycGalleryLoader"><div></div><div></div><div></div><div></div></div>
            `;
        }
        function close()
        {
            let element = document.querySelector('.aretycGalleryContainer').style.display='none';
        }

        function resize()
        {
          
            let img = document.querySelector('.aretycGalleryFullImage');
            
            //  get arrow 
            let left = document.querySelector('.aretycGalleryLeft');
            let right = document.querySelector('.aretycGalleryRight');

            if(similar[index]!=undefined)
            {
                console.log('ofset '+img.offsetWidth + ' window '+window.innerWidth);
               
             if(window.innerWidth<window.innerHeight)
             {
                 img.style.width="100%";
                 img.style.height="auto";

                 right.style.position="absolute";
                 right.style.right="0px";
                 right.style.padding="25px";

                 left.style.position="absolute";
                 left.style.left="0px";
                 left.style.padding="25px";

                 

             }
             else
             {
                img.style.width="auto";
                img.style.height="100%"; 

                right.style.position="relative"; 
                right.style.right="100px";
                right.style.padding="0px";

                left.style.position="relative"; 
                left.style.left="100px";
                left.style.padding="0px";
                
             }
            } 
        }

        // this funcion add loader to gallery 
        function loader()
        {
            let image = document.querySelector(".aretycGalleryFullImage");
            let loader = document.querySelector(".aretycGalleryLoader");
            let arrow = document.querySelectorAll(".aretycGalleryArrow");

            image.style.width=0;
            image.style.height=0;
            image.style.boxShadow="none";

            for(let i = 0; i<arrow.length; i++){arrow[i].style.display='none';}

            image.addEventListener("load",function(){

                this.style.width="auto";
                this.style.height="100%";
                this.style.boxShadow="0px 0px 4px 2px white";
                loader.style.display="none";
                for(let i = 0; i<arrow.length; i++){arrow[i].style.display='flex';}
                resize();
            });
            
        }
        


        function next()
        {
            console.log('next');
            index++;
            if(index>=length){ index=0;}
            inner(similar[index].href);
            loader();
            
        }
        function prev()
        {
            console.log('prev');
            index--;
            if(index<0){ index=(length-1);}
            inner(similar[index].href);
            loader();
          
        }


        function click(event,element)
        {
            event.preventDefault();
            inner(element.href);
            loader();
         

            // delete all elements from array 
            similar.splice(0,similar.length);

            //create new array 
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


            document.querySelector('.aretycGalleryContainer').style.display='flex';

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




