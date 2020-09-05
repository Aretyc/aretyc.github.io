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
    background-repeat: no-repeat;
    background-attachment: fixed;

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
.background_shadow, .background
{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #0009;
  z-index: -1;
  top: 0;
}
.background{
  z-index: -2;
}
</style>
