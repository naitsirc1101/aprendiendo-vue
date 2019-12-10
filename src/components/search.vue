<template>
  <div>
    <Slider :texto="'Busqueda: ' + searchString"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="animes">Busqueda</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>


        <div id="articles" v-if="animes">
         
          <Animes :animes="animes"></Animes>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
        <div v-else>
            No hay contenido que coincidan con la busqueda
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
  name: "SearchComponent",
  components: {
    Sidebar,
    Slider,
    Animes
  },
  mounted() {
      this.searchString = this.$route.params.search;
      console.log(this.searchString, "XXDDDDDDDDD");
    // var searchString = 'Naruto'
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
      animes: [],
      searchString: null,
    };
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios
        .get(`${Global.url}/search/anime?q=` + searchString)
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