<template>
  <div>
    <header>
    <nav class="nav-bar">
      <div class="row">
        <img style="float: left; padding-top: 10px;" src='../assets/img/logo_FOREO.svg' alt="Foreo logo">
      <ul class="nav-list">
        <li>
          <a href="#aboutMe">About me</a>
        </li>
        <li>
          <a href="#Foreo">Foreo</a>
        </li>
        <li>
          <a href="#">Vue.js</a>
        </li>
      </ul>
      </div>
    </nav>
    <div class="trim">
      <video autoplay muted loop class="myVideo">
        <source src="../assets/video/Home_work.mp4" type="video/mp4"> Your browser does not support HTML5 video.
      </video>
    </div>
    
    <div class="overlay">
      <div class="bigText">Let's build something amazing together</div>
      <a class="btn btn-full" href="#">Continue</a>
      <a class="btn btn-ghost" href="#">No</a>
    </div>
    
    </header>
    <AboutMe></AboutMe>
    <firm></firm>
    <VuePresentation></VuePresentation>
   
  </div>
   
</template>




<script>
import AboutMe from './AboutMe.vue'
import Firm from './Firm.vue'
import VuePresentation from './VuePresentation.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components: {
    AboutMe,
    Firm,
    VuePresentation
  } 
}
</script>

<!-- COLORS OF FOREO: light blue- green rgb(122, 222, 232) pink: rgb(251, 51, 149) dark purple rgb(32, 20, 75)-->
<style>

.trim {
     max-height:90vh;
     overflow: hidden;
 }


/* ------------------------------------ Head --------------------------------------*/


.overlay {
    display: block;
    position:absolute;
    top:50%;
    left:50%;
    z-index:999;
    color:#00ffff ;
    transform: translate(-50%, -50%);
}



.myVideo {  
    width: 100vw; 
    height: 100vh;
    object-fit: cover; 
    left: 0px;
    top: 0px;
    z-index: -1;
    filter: blur(5px);
    margin-left: -7px;
    margin-top: -10px;
    
}

/* rgb(122, 222, 232) pink: rgb(251, 51, 149) dark purple rgb(32, 20, 75)*/
/*orginal colors*/
.nav-bar{

  background: linear-gradient(to right, #00b2b2, #682860);
  padding-top: 15px;
  padding-bottom: 40px;
  z-index: 1;
  border-bottom: 2px solid #682860;
  

}
.nav-list{
  list-style: none;
  text-align: center;
  font-size: 120%;
  color: white;
}
.nav-list li{
  display: inline-block;
  margin-right: 15px;
  text-transform: uppercase;
}

.nav-list li a:link,
.nav-list li a:visited{
  text-decoration: none;
  color: 	#00ffff;
  font-weight: 300;
  transition: color 0.5s, border-bottom 0.5s;
 
}

.nav-list li a:hover,
.nav-list li a:active{
  padding: 5px 0;
  text-decoration: none;
  color: 	#ff69b4;/*#64145a;*/
  border-bottom: 1px solid #ff69b4;
  
}

</style>




