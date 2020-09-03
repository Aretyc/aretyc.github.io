class  AretycGalleryElement  {  
            constructor(image,miniature){
                this.image = image;
                this.miniature = miniature;
            }         
}

class AretycGallery{

    constructor()
    {
        this.elements = new Array();
        this.aretycGalleryContainer;
        this.aretycGalleryImageConteiner;
        this.active = null; 
        this.image;
    }

    addElement(image,miniature)
    {
        
        let elem = new AretycGalleryElement(image,miniature);
        this.elements.push(elem);
        
        let min = new Image();
        min.src = elem.miniature;
        
        min.addEventListener("click",()=>{
           this.active = elem;
           this.open(elem.image);    
        });

        return min;
    }

    
    open(element){

            console.log("open gallery");
            // create main container 
            this.aretycGalleryContainer = document.createElement("div");
            this.aretycGalleryContainer.classList.add('aretycGalleryContainer');

            // close button 
            let closeButton = document.createElement("div");
                closeButton.classList.add("aretycGalleryClose");
                let closeButtonImage = new Image();
                    closeButtonImage.src = "./img/aretycGallery/img/close.png";
                    closeButtonImage.alt = "close gallery";
                    closeButtonImage.addEventListener("drag",this.stopDrag(event));
                closeButton.appendChild(closeButtonImage);
                closeButton.addEventListener('click',this.close.bind(this));
            this.aretycGalleryContainer.appendChild(closeButton);


            // galery contentent 
            let aretycGalleryContent = document.createElement("div");
                aretycGalleryContent.classList.add("aretycGalleryContent");

                // arrow left 
                let arrowLeft = document.createElement("div");
                    arrowLeft.classList.add("aretycGalleryLeft");
                    arrowLeft.classList.add("aretycGalleryArrow");
                    let arrowLeftImage = new Image();
                        arrowLeftImage.src = "./img/aretycGallery/img/left.png";
                        arrowLeftImage.alt = "gallery previous";
                        arrowLeftImage.addEventListener("drag",this.stopDrag(event));
                    arrowLeft.appendChild(arrowLeftImage);
                    arrowLeft.addEventListener("click",this.prev.bind(this));


                aretycGalleryContent.appendChild(arrowLeft);

                // image container 
                this.aretycGalleryImageConteiner = document.createElement('div');
                    this.aretycGalleryImageConteiner.classList.add("aretycGalleryImageConteiner");
                    this.image = new Image();
                    this.image.src = element;
                    this.image.classList.add('aretycGalleryFullImage');
                    this.aretycGalleryImageConteiner.appendChild(this.image);

                    this.image.addEventListener('load',() =>{
                        loader.style.display = 'none';
                    });

                    let loader  = document.createElement("div");
                    loader.classList.add('aretycGalleryLoader');
                    loader.innerHTML = '<div></div><div></div><div></div><div></div>';
                
                aretycGalleryContent.appendChild(this.aretycGalleryImageConteiner);            

                //arrow right 
                let arrowRight = document.createElement("div");
                arrowRight.classList.add("aretycGalleryRight");
                arrowRight.classList.add("aretycGalleryArrow");
                let arrowRightImage = new Image();
                    arrowRightImage.src = "./img/aretycGallery/img/right.png";
                    arrowRightImage.alt = "gallery next";
                    arrowRightImage.addEventListener("drag",this.stopDrag(event));
                arrowRight.appendChild(arrowRightImage);
                arrowRight.addEventListener("click",this.next.bind(this));

                aretycGalleryContent.appendChild(arrowRight);
                
            this.aretycGalleryContainer.appendChild(aretycGalleryContent);
                
                console.log(element);    
                document.body.appendChild(this.aretycGalleryContainer);
                this.resize(this.image,arrowLeft,arrowRight);
    }

    stopDrag(e){
        e.preventDefault();
        console.log("drag")
    }



    close(){
        console.log('close gallery');
        this.aretycGalleryContainer.remove();
     }
    next(){
        console.log("next element");
        let index = this.elements.indexOf(this.active);

        if(index<this.elements.length-1) index++;
        else index=0;
        this.active = this.elements[index];
        this.image.src = this.active.image;
    };
    prev(){
        console.log("prev element");
        let index = this.elements.indexOf(this.active);

        if(index==0) index=this.elements.length-1;
        else index--;
        this.active = this.elements[index];
        this.image.src = this.active.image; 
    };

    resize(img,left,right)
    {
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
                img.style.width="100%";
                img.style.height="auto";

                right.style.position="relative"; 
                right.style.right="100px";
                right.style.padding="0px";

                left.style.position="relative"; 
                left.style.left="100px";
                left.style.padding="0px";
            }
        
    }

}


export {AretycGallery};










// (function(){

// let elements = new Array(0); // array with all elements 
// let similar = new Array(0);  //  temporary array with similar element 
// let length = 0;
// let index= 0;

//         function add() // add to page container with image 
//         {
//              const text = `
//              <div class="this.aretycGalleryContainer">
                 
//                 <div class="aretycGalleryClose">
//                     <img class="no_drag" src="./img/aretycGallery/img/close.png" alt="close">
//                 </div> 

//                  <div class="aretycGalleryContent">

                
//                     <div class="aretycGalleryLeft aretycGalleryArrow">
//                          <img class="no_drag" src="./img/aretycGallery/img/left.png" alt="close">
//                     </div>

//                     <div class="aretycGalleryImageConteiner">
                       
//                     </div>  

//                     <div class="aretycGalleryRight aretycGalleryArrow">
//                         <img class="no_drag" src="./img/aretycGallery/img/right.png" alt="close">
//                     </div>
//                  <div>
//              </div> `;
//             $(body).append(text);  
//         }

//         function inner(href)
//         {
//             let imageConteiner = document.querySelector(".aretycGalleryImageConteiner");
//             imageConteiner.innerHTML=
//             ` 
//             <img class="no_drag aretycGalleryFullImage" src="${href}" alt="kalkulator">
//             <div class="aretycGalleryLoader"><div></div><div></div><div></div><div></div></div>
//             `;
//         }
//         function close()
//         {
//             let element = document.querySelector('.this.aretycGalleryContainer').style.display='none';
//         }

//         function resize()
//         {
          
//             let img = document.querySelector('.aretycGalleryFullImage');
            
//             //  get arrow 
//             let left = document.querySelector('.aretycGalleryLeft');
//             let right = document.querySelector('.aretycGalleryRight');

            
//              if(window.innerWidth<window.innerHeight)
//              {
//                  img.style.width="100%";
//                  img.style.height="auto";

//                  right.style.position="absolute";
//                  right.style.right="0px";
//                  right.style.padding="25px";

//                  left.style.position="absolute";
//                  left.style.left="0px";
//                  left.style.padding="25px";

                 

//              }
//              else
//              {
//                 img.style.width="auto";
//                 img.style.height="100%"; 

//                 right.style.position="relative"; 
//                 right.style.right="100px";
//                 right.style.padding="0px";

//                 left.style.position="relative"; 
//                 left.style.left="100px";
//                 left.style.padding="0px";
                
//              }
            
//         }

//         // this funcion add loader to gallery 
//         function loader()
//         {
//             let image = document.querySelector(".aretycGalleryFullImage");
//             let loader = document.querySelector(".aretycGalleryLoader");
//             let arrow = document.querySelectorAll(".aretycGalleryArrow");

//             image.style.width=0;
//             image.style.height=0;
//             image.style.boxShadow="none";

//             for(let i = 0; i<arrow.length; i++){arrow[i].style.display='none';}

//             image.addEventListener("load",function(){

//                 this.style.width="auto";
//                 this.style.height="100%";
//                 this.style.boxShadow="0px 0px 4px 2px white";
//                 loader.style.display="none";
//                 for(let i = 0; i<arrow.length; i++){arrow[i].style.display='flex';}
//                 resize();
//             });
            
//         }
        


//         function next()
//         {
            
//             index++;
//             if(index>=length){ index=0;}
//             inner(similar[index].href);
//             loader();
            
//         }
//         function prev()
//         {
           

//             index--;
//             if(index<0){ index=(length-1);}
//             inner(similar[index].href);
//             loader();
          
//         }


//         function click(event,element)
//         {
//             event.preventDefault();
//             inner(element.href);
//             loader();
           
         

//             // delete all elements from array 
//             similar.splice(0,similar.length);

//             //create new array 
//             length = 0;
//             index = 0;
//             for(let i=0; i<elements.length; i++)
//             {
//                 if(elements[i].dataset.aretycGallery == element.dataset.aretycGallery)
//                 {
//                     similar[length]=elements[i];
//                     length++;
//                     if(elements[i] == element) { index=i;}
//                 }
//             }


//             document.querySelector('.this.aretycGalleryContainer').style.display='flex';
            
//         }

       

//         function init()
//         {
//             // gets all .aretycGallery to array 
//             elements = document.querySelectorAll('.aretycGallery');

//             // add click event to all elements in array  
//             for(let i = 0; i<elements.length;i++)
//             {
//                 elements[i].addEventListener("click",function(event){
//                     element=this;
//                     click(event,element);

//                 });
//             }
//             // add gallery container on page
//             add();

//            //  add event to close gallery
//            document.querySelector('.aretycGalleryClose').addEventListener("click",close);
//            // add event to next image 
//            document.querySelector('.aretycGalleryRight').addEventListener("click",next);
//            // add event to prev image 
//            document.querySelector('.aretycGalleryLeft').addEventListener("click",prev);
//         }


// window.addEventListener("DOMContentLoaded", init);
// window.addEventListener('resize',resize)


// })();




