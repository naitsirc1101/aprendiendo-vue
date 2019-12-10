<template>
  <div>

    <div class="center">
      <section id="content">
        <h2 class="subheader">Articulos</h2>
        <Articles :articles="articles"></Articles>
        <!--Listado articulos-->
        <div id="articles">

        </div>
      </section>

      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>

import Sidebar from "../components/sidebar";
import axios from "axios"
import Global from "../global"
import Articles from "./articles";

export default {
  name: "ShowArticles",
  components: {
    // Slider,
    Sidebar,
    Articles
  },
  mounted() {
    // var articleId = this.$route.params.id;
    this.getLastArticles();
    // this.deleteArticle(articleId);
  },
  data() {
    return {
      articles: []
    };
  },
  methods: {
    getLastArticles() {
      axios
        .get(`${Global.urlBack}/articles`)
        .then(res => {
          if (res.data.status == 'success') {
            this.articles = res.data.articles;
            console.log(this.articles, 'Articles');
          }
        //   console.log(res, 'El res');
        });
    },
    // deleteArticle(articleId) {
    //   articleId = this.articleId;
    //   console.log(articleId, 'pa borrar')
    // }
  }
};
</script>