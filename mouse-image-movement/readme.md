# about
Simple javaScript library that moves the image when you hover your mouse over it

# Usage
include  script `mouse-image-movement.js` in your  `head` section 
````html
<head>
    <script src="mouse-image-movement.js"></script>
</head>
````
in `body` 

````html
<body>
    ...
    <div class="picture-container">
         <img class="my-picture" src="image">
    </div>
    ...
</body>

````
in your script 
````js
const mp = new moveablePicture('.picture-container',{
       image: '.my-picture',
       translationX: 10, // number pixels default 20px 
       translationY: 10, // number pixels default 20px  
       time: "1000ms",  // time default 2s
   });
````