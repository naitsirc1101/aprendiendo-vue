<template>
  <div>
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>

        <div id="articles" v-if="animes">
         
          <Animes :animes="animes"></Animes>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Animes from './animes'
import Global from '../global'
import axios from "axios";
import Slider from "./sliders";
import Sidebar from "./sidebar";

export default {
  name: "BlogComponent",
  components: {
    Sidebar,
    Slider,
    Animes
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      animes: []
    };
  },
  methods: {
    getArticles() {
      axios
        .get(`${Global.url}/search/anime?q=dragon ball&limit=16`)
        .then(res => {
          if (res.data.results.length > 0) {
            this.animes = res.data.results;
            console.log(this.animes);
          }
        });
    }
  }
};
</script>