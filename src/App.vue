<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
      
    
        <router-view></router-view>

        
    <footerComponent></footerComponent>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import MyComponent from "./components/myComponent";
import HeaderComponent from "./components/header-component";
// import Slider from "./components/sliders";
// import Sidebar from "./components/sidebar";
// import lastArticles from "./components/lastArticles";
import footerComponent from "./components/footerComponent";

export default {
  name: "app",
  components: {
    //  HelloWorld,
    //MyComponent,
    HeaderComponent,
    // Slider,
    // Sidebar,
   // lastArticles,
    footerComponent
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
