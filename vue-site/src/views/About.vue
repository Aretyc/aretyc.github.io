<template>
  <div class="about">
    <div class="background_shadow">
	</div>
	<div id="preloader">
		<!-- <img src="./img/loader.gif" alt="loader"> -->
	</div>
	<div id="about" class="min_width">
			<h1 id="about_title_h1" class="about_child">
					Hi, welcome to my website.
			</h1>
			<h2 id="about_title_h2" class="about_child">
				I am a student of computer science, specializing in Internet technologies.
				I program in such languages as JavaScript, Java, PHP, SQL and Android. 
				In my free time I like to test websites for security or do something on arduino 
			</h2>

			<p id="about_title_p" class="about_child">
					On this site you can see my projects 
			</p>
	</div>
  <myMenu></myMenu>
  </div>
</template>

<script>
  import Menu from '@/components/about_nav.vue';

  export default {
  components:{
    'myMenu': Menu,
  }
}
</script>

<style scoped>
.background_shadow
{
 position: absolute;
 width: 100%;
 height: 100%;
 background-color: #0009;
 z-index: -1;
}

#preloader
{
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    z-index: 100;
    justify-content: center;
    align-items: center;
    background-color: white;
    
}

.min_width
{
    min-width: 1200px;
    
}

#about
{
    width: 100%;
  
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
 
    align-items: center;
    text-align: center;
    align-self: center;
    box-sizing: border-box;
    padding: 19px;

}
.about_child
{
    width: 100%;
    max-width: 1200px;
    font-family: "Segoe UI",Arial,sans-serif;
}

#about h1 
{
    font-size: 60px;
    position: relative;

}
#about h2
{
    
    font-size: 24px;
    font-weight: lighter;
    position: relative;
}
#about p 
{
    font-size: 19px;
    font-weight: normal;
    font-family: Georgia;
    font-style: italic;
    position: relative;
}
</style>