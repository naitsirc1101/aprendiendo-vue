<template>
  <section id="animes-component">
    <div v-if="!animes">Cargando...</div>

    <div id="animes-list" v-if="animes && animes.length >= 1">
      <article class="article-item" v-for="animes in animes" :key="animes.id">
        <div class="image-wrap">
          <img :src="animes.image_url" :alt="animes.title" v-if="animes.image_url" />
          <img src="../assets/images/descarga.png" :alt="animes.title" v-if="!animes.image_url" />
        </div>

        <h2>{{animes.title}}</h2>
        <span class="date">{{animes.end_date | moment("from", "now")}}</span>
        <a :href="animes.url">Leer más</a>

        <div class="clearfix"></div>
      </article>
    </div>

    <div v-else-if="animes && animes.length < 1">Cargando...</div>

    <div v-else>No hay Animes para mostrar</div>
  </section>
</template>

<script>
export default {
  name: "Animes",
  props: ["animes"],
  data() {
    return {};
  }
};
</script>