<template>
    <div>
      <div class="background_shadow"></div>
      <div class="background"></div>
      <myMenu></myMenu>
      <main>
        <articles  :data="data" ></articles>
      </main>
      
    </div>
</template>

<script>
  import Menu from '@/components/nav.vue';
  import Articles from '@/components/articles.vue';

  export default {
  components:{
    'myMenu': Menu,
    'articles': Articles,
  },
  computed:{
    data(){
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

<style>

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
</style>