<template>
    <nav>
        <div id="nav_links">
        <router-link to="/">about</router-link>
        <router-link to="/web">web</router-link>
        </div>
    </nav>
</template>
<style  scoped>
nav 
{
    height: 70px;
    min-height: 70px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    position: fixed;
    top:0;
    width: 100%;
    background-color:#000c;
    z-index: 3;

    -webkit-user-select: none; /* Safari 3.1+ */
    -moz-user-select: none; /* Firefox 2+ */
    -ms-user-select: none; /* IE 10+ */
    user-select: none; /* Standard syntax */
}


#nav_links {
    display: flex;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    justify-content: center;
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

