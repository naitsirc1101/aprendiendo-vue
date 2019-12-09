<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="peliculas.image" :alt="peliculas.title" :title="peliculas.title" />
    </div>

    <!-- v-for="peliculas in peliculas" v-bind:key="peliculas.title" -->
    <h1>{{peliculas.title}}</h1>
    <span
      class="date"
      :class="{
            yeargreen: peliculas.year >= 2013,
            yearred: peliculas.year < 2013
        }"
    >{{peliculas.year}}</span>
    <a href="#">Leer más</a>

    <input type="button" value="Marcar como fav"
      @click="pasarFavAlPadre(peliculas)"
    />

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: ['peliculas'],
  mounted() {
      console.log(this.peliculas)
  },
  methods: {
    pasarFavAlPadre(peliculas) {
      console.log(peliculas);
      // alert('Peli fav seleccionada');
      this.$emit('favorita', peliculas);
    }
  }
};
</script>