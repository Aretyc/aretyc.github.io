<template>
    <myMenu></myMenu>
</template>

<script>
  import Menu from '@/components/nav.vue';

  export default {
  components:{
    'myMenu': Menu,
  }
}
</script>

<style>
   nav 
    {
        height: 70px;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
    }

   #nav_links
    {
        display: flex;

        height: 100%;
        margin: 0 auto;
        padding: 0;
        justify-content: center;
        position: relative;
        
        /* transform: rotate(-10deg); */
        
        
    }
    #nav_links.Animate{
    
        transition        : 0.3s linear;
        transform : rotate(0deg) ;
    }
    nav a:hover{
    
        background-color: #44bc4499;
        font-size: 24px;
    }
    nav a 
    {
        list-style: none;
        text-decoration: none;
        align-self: center;
        color: white;
        width: 150px;
        height: 50px; 
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 9px;
        font-size: 23px;
        transition-duration: 1s;
        margin-left: 5px;

        text-transform: uppercase;
        font-family: "Segoe UI",Arial,sans-serif;
        font-weight: bold;
        align-self: center;
    }
    #nav_links a.router-link-exact-active {
        background-color: #44bc4499;
        font-size: 24px;
    }
    .nav_button
    {
        display: none;
    }
</style>