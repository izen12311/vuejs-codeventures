<template>
  <div id="app">
    <header class="header navbar-fixed-top">
      <nav class="navbar" role="navigation">
        <div class="container">
          <div class="menu-container js_nav-item">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="toggle-icon"></span>
            </button>
            <div class="logo">
              <a class="logo-wrap" href="http://codeventures.kr">
                <img class="logo-img logo-img-main" src="static/img/white-logo.png" alt="codeventures white">
                <img class="logo-img logo-img-active" src="static/img/black-logo.png" alt="codeventures black">
              </a>
            </div>
          </div>
          <div class="collapse navbar-collapse nav-collapse">
            <div class="menu-container">
              <ul class="nav navbar-nav navbar-nav-right">
                <li class="js_nav-item nav-item"><a :href="homeURL" class="nav-item-child nav-item-hover">{{home}}</a></li>
                <li class="js_nav-item nav-item"><a :href="devURL" class="nav-item-child nav-item-hover">{{developers}}</a></li>
                <li class="js_nav-item nav-item"><a :href="projectURL" class="nav-item-child nav-item-hover">{{project}}</a></li>
                <li class="js_nav-item nav-item"><a :href="recruitURL" class="nav-item-child nav-item-hover">{{recruit}}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <div id="footer">
      <img src="../static/img/white-logo.png" class="footerLogo" />
      <p class="footerIntro">
        고등학생 개발팀 코드벤처스 | 주소 codeventures.kr
        <br /> 문의 help@codeventures.kr | © 2017<a style="color:#0a93a6; text-decoration:none;" href="https://www.facebook.com/codeventures.kr/" target="_blank"> codeventures</a>, All rights reserved 2017
      </p>
    </div>
  </div>
</template>
<script>
  export default {

    name: 'app',
    data() {
      return {
        home: 'Home',
        project: 'Project',
        recruit: 'Recruit',
        developers: 'Developers',
        homeURL: '/',
        projectURL: '/project',
        recruitURL: '/recruit',
        devURL: '/developers',
      }
    }
  }

</script>
