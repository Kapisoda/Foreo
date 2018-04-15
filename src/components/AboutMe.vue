<template>
  <section class="aboutMe" id="aboutMe">
    <div class="row">
      <h2>About me</h2>
    </div>
    <div class="row">
      <div class="col span-3-of-3 box"> <div class="title">WORK EXPIRIANCE</div> 
        <ul class="education-ul">
          <li class="subtitle" >Megatrend poslovna rješenja d.o.o., Zagreb (Croatia)</li>
          <li>Development and implementation of SEPA payment system - IBM Lotus Domino platform in Java / LotusScript programming language</li>
          <li>Development and implementation of JOPPD applications - IBM Lotus Domino platform in Java / LotusScript programming language</li>
          <li>Development and implementation of IOS application - IBM Lotus Domino platform in Java / LotusScript programming language</li>
          <li>Development and implementation of sftp application - IBM Lotus Domino platform in Java / LotusScript programming language</li>
          <li class="subtitle" >Pavuna d.o.o.</li>
          <li>School admin - Web page design and implementation - HTML/CSS</li>
          <li class="subtitle" >Argentum Vita</li>
          <li>Webshop - web page design and implementation - HTML/CSS</li>
          <li class="subtitle">Villa Del Mar</li>
          <li>Website for renting villa - wordpress - HTML/CSS</li>
          <li class="subtitle">SPORTSKI CENTAR ARENA</li>
          <li>Project manager and front-end developer in developing gym management system - Vue.js/HTML/CSS/materialize </li>
        </ul></div>
      </div>
    <div class="row">
    
      <div class="col span-1-of-3 bigger-box">
        <div class="title">INFROMATION</div> 
        <ul>
          <li><i class="ion-person icons"></i>Filip Kapusta</li>
          <li><i class="ion-home icons"></i>Mosorska ulica 25</li>
          <li><i class="ion-android-call icons"></i>+385998208020</li>
          <li><i class="ion-android-mail icons"></i>filipkapusta1@gmail.com</li>
          
          <li>Find me: <div class="special-font"> <a href="https://www.instagram.com/fildebil/" target="_blank"><i class="ion-social-instagram icons"></i></a>  
          <a href="https://www.linkedin.com/in/filip-kapusta-2b054374/" target="_blank"><i class="ion-social-linkedin icons"></i></a> 
          <a href="https://www.facebook.com/profile.php?id=100005175250981" target="_blank"><i class="ion-social-facebook icons"></i></a></div></li>
        </ul>
      </div>
      <div class="col span-1-of-3 bigger-box"> <div class="title">EDUCATION</div> 
        <ul class="education-ul">
          <li class="subtitle">High school</li>
          <li>Postal and telecommunication school, Zagreb</li>
          <li class="subtitle">Collage</li>
          <li >College for Information Technologies, Zagreb</li>
          <li>VSITE</li>
        </ul>
      </div>
      <div class="col span-1-of-3 bigger-box"> <div class="title">What i love</div> 
        <ul class="education-ul">
          <li>I love creating and developing something from scratch! It's great when your design/program makes it easier for people in everyday work. I fall in love working with JavaScript framework  Vue.js. because it's fast, it has a great community, performance, and awesome tools! That is why I wont to continue to work as a frontend developer.</li>
          
        </ul>
      </div>  
      
      
    </div>
    
  </section>
</template>

<style lang="scss" scoped>
    .ion-social-instagram:hover,
    .ion-social-instagram:active{
      color: #8a3ab9;
    }
    .ion-social-facebook:hover,
    .ion-social-facebook:active{
      color: #3b5998;
    }
    .ion-social-linkedin:hover,
    .ion-social-linkedin:active{
      color: #4875B4;
    }

    .aboutMe {
      padding: 30px 0 50px;
     
    }

    //rgba(0, 178, 178, 0.66)rgba(104, 40, 96, 0.76)
    .box,
    .bigger-box
     {
      display: block;
      //border: 1px solid #64145a;
      padding: 10px;
      font-size: 20px;
      text-align: center;
      
      font-weight: 300;
    }
    /* rgb(122, 222, 232) pink: rgb(251, 51, 149) dark purple rgb(32, 20, 75)*/
    /*orginal colors rgba(104, 40, 96, 0.70), rgba(0, 178, 178, 0.70)*/
    
    .bigger-box{
      height: 300px;
      border: 1px solid #682860;
    }
    .box{
      background-color: white;
      border: 1px solid #682860;
    }
    
    .bigger-box ul,
    .box ul{
      margin: 20px 0 5px 0;
      
    }
    .bigger-box li,
    .box li{
      list-style: none;
      text-align: center;
      margin-bottom: 5px;
    }
    
    .subtitle{
      font-weight: 400;
      color: #682860;
      text-transform: uppercase;
      font-size: 90%;
    }
    .education-ul li{
      text-align: center;
    
    }

    .bigger-box:nth-child(1) {
      
    }
    .bigger-box:nth-child(2) {
     
    }
    .bigger-box:nth-child(3) {
     
    }

    

    .special-font{
      display: inline-block;
      font-size: 150%;
      vertical-align: middle;
    }
    .special-font i{
      margin: 0 7px;
      color: #682860;
    }


</style>

