<template>
  <div>
    <header id="Home" class="home">
      <div class="ham-nav">
        <quick-menu style="vertical-align: bottom " :menu-count='number' :icon-class='icons' :menu-url-list='list'></quick-menu>
      </div>
      <nav class="nav-bar" :class="{ 'is-sticky': stickyState }">
        <div class="row">
          <a href="#Home">
            <img style="float: left; padding-top: 10px;" src='../assets/img/logo_FOREO.svg' alt="Foreo logo">
          </a>
          <ul class="nav-list">
            <li>
              <a v-scroll-to="'#Home'"  >Home</a>
            </li>
            <li>
              <a v-scroll-to="'#aboutMe'" >About me</a>
            </li>
            <li>
              <a v-scroll-to="'#firm'"  >Foreo</a>
            </li>
            <li>
              <a v-scroll-to="'#sectionVue'"  >Vue.js</a>
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
        <a class="btn btn-full" href="#aboutMe">CONTINUE</a>
        <a class="btn btn-ghost" href="#sectionVue">VUE.JS</a>
      </div>
    </header>
    <section class="aboutMe" id="aboutMe">
    <AboutMe></AboutMe>
    </section>
    <firm></firm>
    <VuePresentation></VuePresentation>
    <LastComp></LastComp>
  </div>
</template>





<script>
import AboutMe from './AboutMe.vue'
import Firm from './Firm.vue'
import VuePresentation from './VuePresentation.vue'
import LastComp from './LastComp.vue'
import quickMenu from 'vue-quick-menu'
export default {
  name: 'HelloWorld',
  data () {
    return {
      stickyState: false,
      number: 4,
      icons: ["ion-android-home","ion-earth", "ion-android-person","ion-arrow-down-b"],
      list: ["#Home", "#sectionForeo","#aboutMe", "#sectionVue"],

    }
  },
  components: {
    AboutMe,
    Firm,
    VuePresentation,
    LastComp,
    quickMenu
  },
  methods:{
     sticky (e) {
      const Vue = this
      let scrollObject = {}
      window.onscroll = function () {
        scrollObject = {
          x: window.pageXOffset,
          y: window.pageYOffset
        }
        // If you want to check distance
        if (scrollObject.y > 450) {
          Vue.stickyState = true
        } else {
          Vue.stickyState = false
        }
      }
    }
  },
  created(){
    this.sticky();
    window.history.scrollRestoration = 'manual';
  }

}
</script>

<!-- FOREO COLORS: light blue- green rgb(122, 222, 232) pink: rgb(251, 51, 149) dark purple rgb(32, 20, 75)-->
<style>
/*-------------------------------------------------------------*/

.ham-nav {
  position: fixed;
  visibility: hidden;
  z-index: 999 !important;
}

.is-sticky {
  position: fixed;
  width: 100%;
}

.trim {
  max-height: 90vh;
  overflow: hidden;
}

/* ------------------------------------ Head --------------------------------------*/

.overlay {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
  color: #00ffff;
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

/*orginal colors*/

/*-------------------------------------NAV-------------------------------------------*/

.nav-bar {
  background: linear-gradient(to right, #00b2b2, #682860);
  padding-top: 15px;
  padding-bottom: 40px;
  z-index: 1;
  border-bottom: 2px solid #682860;
}

.nav-list {
  list-style: none;
  text-align: center;
  font-size: 120%;
  color: white;
}

.nav-list li {
  display: inline-block;
  margin-right: 15px;
  text-transform: uppercase;
}

.nav-list li a,
.nav-list li a {
  text-decoration: none;
  color: #00ffff;
  font-weight: 300;
  transition: color 0.5s, border-bottom 0.5s;
}

.nav-list li a:hover,
.nav-list li a:active {
  padding: 5px 0;
  text-decoration: none;
  color: #ff69b4;
  border-bottom: 1px solid #ff69b4;
  cursor: pointer;
}

</style>





