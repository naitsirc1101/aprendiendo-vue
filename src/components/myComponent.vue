<template>
  <section id="content">
    <hr />
    <h1>{{ titulo }}</h1>
    <h2>{{subtitle}}</h2>
    <hr />

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    Mi nombre es:
    <strong>{{nombre}}</strong>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es:
    <strong>{{edad}}</strong>

    <p class="alert-danger-provisional" v-if="edad >= 18">Adulto !!!</p>
    <p class="alert-success" v-else>Menor</p>

    <h2>Directiva iterativa</h2>

    <ol>
      <li v-for="peliculas in peliculas" :key="peliculas">{{peliculas}}</li>
    </ol>

  </section>
</template>

<script>
export default {
  name: "MyComponent", 
  data() {
    return {
      titulo: "Mi Componente",
      subtitle: "Subtitle from NewComponent",
      nombre: "",
      edad: 18,
      peliculas: ['Batman', 'lol', 'darkSouls', 'fornite'] 
    };
  }
};
</script>