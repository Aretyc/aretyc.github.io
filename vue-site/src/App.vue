<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  

  export default {
      components:{


      }
  }
</script>


<style >
body
{
    margin: 0;
    padding: 0;
    /* background-image: url("../img/background/2.jpg"); */
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: flex;

    /*height: 100vh;*/
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
