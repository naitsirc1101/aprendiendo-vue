<template>
  <section id="content">
    <h2 class="subheader">Page Test</h2>
    <h3>{{ id_desde_url }}</h3>
    <button @click="actualizarNombre()">actualizarNombre</button><br>
    <button @click="redirigirAlBlog()">Redirigir</button>

    <h4>{{ nombre }}</h4>
  </section>
</template>

<script>
export default {
  name: "PageComponent",
  created() {
    console.log("componente Creado");
  },
  mounted() {
    console.log("Componente Montado");
    this.id_desde_url = this.$route.params.id;
  },
  updated() {
    console.log("Componente Actualizado");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Sin - Nombre"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "Cristian B";
      console.log(this.nombre);
    },

    redirigirAlBlog() {
      this.$router.push('/blog');
    }
  }
};
</script>