<template>
    <div>

          <div class="mainElements" v-for="article in data" v-bind:key="article.title">
              <div>
                <img class="main-icons"   v-bind:src="article.icon" v-bind:alt="article.title" draggable="false">
              </div>
              <div class="main-elements-content">
                <h1>{{article.title}}</h1>
                <p class="less_content">{{article.content}}</p>
                <transition name="toggle">
                  <div class="more-content" v-if="article.show">
                    <p>{{article.moreContent}}</p>
                    <div class="mytable">
                      <div class="mytable-column">
                        <p class="mytable-row1 mytable-row">Date</p>
                        <p class="mytable-row2 mytable-row" >{{article.date}}</p>
                      </div>
                      <div class="mytable-column">
                        <p class="mytable-row1 mytable-row">technology</p>
                        <p class="mytable-row2 mytable-row" >{{article.technology}}</p>
                      </div>
                      <div class="mytable-column">
                        <p class="mytable-row1 mytable-row">Page</p>
                        <p class="mytable-row2 mytable-row" ><a href="">link</a></p>
                      </div>
                      <div class="mytable-column">
                        <p class="mytable-row1 mytable-row">Project</p>
                        <p class="mytable-row2  mytable-row">none</p>
                      </div>
                      <div class="mytable-column">
                        <p class="mytable-row1 mytable-row">GitHub</p>
                        <p class="mytable-row2  mytable-row"><a href="">link</a></p>
                      </div>
                    </div>
                    <div class="gallery">
                      <div class="gallery-image">
                        <a  v-for="image in article.gallery" 
                            v-bind:key="image" 
                            v-bind:data-aretyc-gallery="article.title" 
                            v-bind:href="image.full">
                              <img draggable="false" v-bind:src="image.mini" v-bind:alt="article.title">
                        </a>
                      </div>
                    </div>
                </div>
              </transition>
              <button class="element_button" v-on:click="article.show=!article.show">
                <span v-if="!article.show">read more</span>
                <span v-else>read less</span>
              </button>
            </div>
          </div>      
    </div>
</template>


<script>
    export default {
      props: ['data']
    }

</script>
<style scoped>
  .toggle-enter-active{
    animation: show .7s ;
  }
  .toggle-leave-active{
    animation: hide .7s ;
  }
</style>



<style scoped>
.mainElements
{
    display: flex;
    margin-bottom: 50px;
    width: 100%;
}
.main-icons
{
    width: 200px;
    height: 200px;
    box-shadow: 0px 0px 6px -2px black

}
.main-elements-content
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-left: 90px;
    padding-right: 30px;
    font-family: "Segoe UI",Arial,sans-serif;
   
}

.main-elements-content h1
{
    margin: 0;
    font-size: 50px;
    width: 100%;
    font-weight: normal;
    margin-top: -10px;
    text-transform: uppercase;
}
.main-elements-content p
{
    margin: 0;
    text-align: justify;
    font-weight: lighter;
    font-size: 19px;
}
.main-elements-content ul li
{
    font-weight: lighter;
    font-size: 19px;
}
.main-elements-content button
{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
    border: 1px solid #00800066;
    text-transform: capitalize;
    font-family: "Segoe UI",Arial,sans-serif;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    background-color: #f0f0f0e6;
    transition: 0.3s linear;
}
.main-elements-content button:hover
{
    color: white;
    background-color: #0009;
    border: 1px solid #000000b3;
    
}
.more-content
{
    /* display: none; */
    margin-top: 20px !important;
    margin-bottom: 20px !important;
}

/* table */ 
.mytable
{
    display: flex;
    margin-top: 30px;
    justify-content: center;
    
}
.mytable-column
{
    width: 140px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
}
.mytable-row
{
    margin: 0;
    padding: 0;
    padding-left: 20px;
    width: 100%;
    box-sizing: border-box;
    min-height: 28px;
    text-align: left !important;
}
.mytable-row1 
{
    background-color: #46c046;
    font-weight: 600 !important;
}
</style>