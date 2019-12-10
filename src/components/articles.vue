<template>
  <section id="articles-component">
    <div v-if="!articles">Cargando...</div>

    <div id="articles-list" v-if="articles && articles.length >= 1">
      <article class="article-item" v-for="articles in articles" :key="articles.id">
        <div class="image-wrap">
          <img :src="'http://localhost:3900/api/get-image/'+ articles.image" :alt="articles.title" v-if="articles.image" />
          <img src="../assets/images/descarga.png" :alt="articles.title" v-if="!articles.image" />
        </div>

        <h2>{{articles.title}}</h2>
        <span class="date">{{articles.end_date | moment("from", "now")}}</span>
        <a :href="articles.url">Leer más</a>

        <div class="clearfix"></div>

        <router-link :to="'/edit/'+ articles._id" class="btn btn-warning">Editar</router-link>
        <!-- <router-link to="/eliminar" class="btn btn-danger">Eliminar</router-link> -->

      </article>
    </div>

    <div v-else-if="articles && articles.length < 1">Cargando...</div>

    <div v-else>No hay Articulos para mostrar</div>
  </section>
</template>

<script>
export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {};
  }
};
</script>