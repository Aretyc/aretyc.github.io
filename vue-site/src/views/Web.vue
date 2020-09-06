<template>
    <div>
      <div class="background_shadow">
      </div>
      <div class="background">
      </div>
        <myMenu></myMenu>
        <main>
          <div class="mainElements" v-for="article in articles" v-bind:key="article.title">
              <div>
                <img class="main_icons"   v-bind:src="article.icon" v-bind:alt="article.title" draggable="false">
              </div>
              <div class="main_elements_content">
                <h1>{{article.title}}</h1>
                <p class="less_content">{{article.content}}</p>
                <transition name="toggle">
                  <div class="more_content" v-if="article.show">
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
                </div>
              </transition>
              <button class="element_button" v-on:click="article.show=!article.show">read more</button>
            </div>
          </div>
        </main>      
    </div>
</template>

<script>
  import Menu from '@/components/nav.vue';

  export default {
  components:{
    'myMenu': Menu,
  },
  computed:{
    articles(){
      return this.$store.state.web;
    }
  },

  created(){
    this.$http.get('https://aretyc-72a68.firebaseio.com/web.json')
        .then((data)=>{
          console.log(this.articles);
          this.$store.state.web = data.body;
        });
  }
}
</script>

<style scoped>
.toggle-enter-active{

 animation: show .7s ;
}
.toggle-leave-active{
  animation: hide .7s ;
}

@keyframes show {
  0% {
    height: 0;
    opacity: 0;
    transform: translateY(-50px);
  }
  70% {
    
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes hide {
   0% {
    height: auto;
    opacity: 1;
  }
  70% {
    /* height: 300px;  */
    opacity: 0;
  }
  100% {
    opacity: 0;
    height: 0;
  }
}

</style>



<style scoped>
.background
{
  background-image: url("../assets/background/3.jpg");
  
}
main
{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1150px;
    min-height: 600px;
    background-color: #fffc;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 102px;
    box-shadow: 0px 0px 7px 3px black;
    color: black;
    padding: 55px;
    margin-bottom: 50px;
}

.mainElements
{
    display: flex;
    margin-bottom: 50px;
    width: 100%;
}
.main_icons
{
    width: 200px;
    height: 200px;
    box-shadow: 0px 0px 6px -2px black

}
.main_elements_content
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-left: 90px;
    padding-right: 30px;
    font-family: "Segoe UI",Arial,sans-serif;
   
}

.main_elements_content h1
{
    margin: 0;
    font-size: 50px;
    width: 100%;
    font-weight: normal;
    margin-top: -10px;
    text-transform: uppercase;
}
.main_elements_content p
{
    margin: 0;
    text-align: justify;
    font-weight: lighter;
    font-size: 19px;
}
.main_elements_content ul li
{
    font-weight: lighter;
    font-size: 19px;
}
.main_elements_content button
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
.main_elements_content button:hover
{
    color: white;
    background-color: #0009;
    border: 1px solid #000000b3;
    
}
.more_content
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