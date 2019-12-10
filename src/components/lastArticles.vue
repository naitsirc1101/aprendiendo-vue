<template class="general">
  <div>

    <Slider texto="Curso de vue JS"
      home="true"  
    ></Slider>


    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>
            <Animes :animes="animes"></Animes>
        <!--Listado articulos-->
        <div id="articles">

          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>

      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>

import Slider from "./sliders";
import Sidebar from "./sidebar";
import Animes from "./animes"
import axios from "axios"
import Global from "../global"


export default {
  name: "lastArticles",
     components: {
    Sidebar,
    Slider,
    Animes
  },
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      animes: []
    };
  },
  methods: {
    getLastArticles() {
      axios
        .get(`${Global.url}/anime/1/news`)
        .then(res => {
          if (res.data.articles.length > 0) {
            this.animes = res.data.articles;
            // console.log(this.animes);
          }
          console.log(res);
        });
    }
  }
};
</script>