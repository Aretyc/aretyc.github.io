class moveablePicture{
    constructor(element,properties){

        this.oldX = 0;
        this.oldY = 0;

        this.translationX = 20;
        this.translationY = 20;
        this.time ='2s';

        if(properties.hasOwnProperty('translationX')) this.translationX = properties.translationX;
        if(properties.hasOwnProperty('translationY')) this.translationY = properties.translationY;
        if(properties.hasOwnProperty('time')) this.time = properties.time;
        

        this.error = false;
        this.element = document.querySelector(element);
        if(this.element==null){
            console.error(`I can't find ${element} element`);
            this.error = true
        } 
        this.image = document.querySelector(properties.image);
        if(this.image==null){
            console.error(`I can't find ${properties.image} element`);
            this.error = true
        }
        this.image.style.transition = this.time;

        if(!this.error)
            this.element.addEventListener('mousemove',(e)=>{
                this.move(e);
            });
    }

    move(e){
        let x = 0;
        let y = 0;
        if (this.oldX < e.pageX) x= -1*this.translationX; else x=this.translationX;
        if (this.oldY < e.pageY) y= -1*this.translationY; else y=this.translationY;
        this.image.style.transform= `translate(${x}px, ${y}px)`;

        this.oldX = e.pageX;
        this.oldY = e.pageY;
    }
}