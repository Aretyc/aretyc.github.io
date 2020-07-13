import {AretycGallery} from "./aretycgallery2.js";



class StandardElement {
        constructor(JSONobject){

            this.icon = JSONobject.icon;
            this.title = JSONobject.title;
            this.less_content = JSONobject.less_content;
            this.more_content = JSONobject.more_content;
            this.images =JSONobject.images;
            this.mainElements = null;
            // this.video = video;

        }

        createElement(){

           let main = document.querySelector('main');
           

            this.mainElements = document.createElement('div');
            this.mainElements.classList.add("mainElements");
                // element icon 
                let iconContainer = document.createElement('picture');
                    let icon = new Image();
                    icon.src = this.icon;
                    icon.classList.add("main_icons");
                    icon.classList.add("no_drag");

                iconContainer.appendChild(icon);
                this.mainElements.appendChild(iconContainer);

                let  mainElementsContent = document.createElement('div');
                mainElementsContent.classList.add("main_elements_content");
                this.mainElements.appendChild(mainElementsContent);

                    let title = document.createElement('h1');
                    title.innerText = this.title;
                    mainElementsContent.appendChild(title);

                    let lessContent = document.createElement('p');
                    lessContent.classList.add('less_content');
                    lessContent.innerText = this.less_content;
                    mainElementsContent.appendChild(lessContent);

                    let more_content = document.createElement('div');
                    more_content.classList.add("more_content");
                    mainElementsContent.appendChild(more_content);

                        let more_content_text = document.createElement('p');
                        more_content_text.innerText = this.more_content;
                        more_content.appendChild(more_content_text);

                        let gallery = document.createElement("div");
                        gallery.classList.add('gallery');
                        more_content.appendChild(gallery);

                        let imageGallery = document.createElement('div');
                        imageGallery.classList.add('aretycGallery');
                        imageGallery.classList.add('no_drag');
                        gallery.appendChild(imageGallery);

                        let aretycGallery = new AretycGallery();

                        this.images.forEach(element => {

                             let a = document.createElement('div');
                            // a.classList.add('aretycGallery');
                            // a.classList.add('no_drag');
                            // a.setAttribute('data-aretyc-gallery',this.title.replace(/ /g, ""));
                            // a.setAttribute("href",element[0]);
                            // let img = document.createElement("img");
                            // img.classList.add('no_drag');
                            // img.setAttribute('src',element[1]);
                            

                        //    img.addEventListener("click",()=>{
                        //        console.log("click image ")
                        //        aretycGallery.open(element[0]);
                        //    })
                            let img = aretycGallery.addElement(element[0],element[1]);
                              a.appendChild(img);
                              imageGallery.appendChild(a);
                        
                            
                        });

                    let button = document.createElement('button');
                    button.appendChild(document.createTextNode('Read More'));
                    button.classList.add('element_button');
                    button.addEventListener('click',function(){
                        console.log(more_content);
                        if(more_content.style.display == 'block') more_content.style.display = "none";
                        else more_content.style.display = "block";
                    });
                    mainElementsContent.appendChild(button);
           
          main.appendChild(this.mainElements);

        }


        delete()
        {
            this.mainElements.remove();
        }
}

class FotoElement
{
    constructor(JSONobject){

        this.text =JSONobject.text;
        this.imageUrl = JSONobject.imageUrl;
        this.miniature= JSONobject.miniature;
    }
}

async  function getDiy(){
    let array = new Array();

    await fetch('./json data/diy.json')
    .then(res => res.json())
    .then(res => {
        res.forEach(element => {
            let temp = new StandardElement(element)
             array.push(temp.createElement());
        });
    }).then( ()=>{
        
        return array;
    })  
}

async  function getFoto(){
    let array = new Array();

     fetch('./json data/foto.json')
    .then(res => res.json())
    .then(res => {
        res.forEach(element => {
            let temp = new FotoElement(element)
            //  foto.push(temp.createElement());
        });
    }).then(()=>{
        return array;
    })
}

 async function clear(diy,music,video,foto){
        
    for(let i=0;i<diy.length;i++)  diy[i].delete();
    
  }
document.addEventListener('DOMContentLoaded', async (e)=>{
   
    let diy = new Array();
    let music = new Array();
    let video = new Array();
    let foto = new Array();

    diy = await getDiy();
        // .then( () => {
        //         console.log(diy[0])
        // })
    

    foto = getFoto();

    

    let diyButton = document.getElementById("diy");
     diyButton.addEventListener("click",async () =>{
         console.log(await diy[0]);

        await clear(diy,music,video,foto);
     })   
    
   
    
   
})
