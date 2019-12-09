<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>

        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos">{{misDatos}}</p>
          <br>
          {{ web | mayusculas | concatenaYear('Este es el mejor año')}}
        </div>


        <div class="favorita" v-if="favorita">
          <h2>{{favorita.title}}</h2>
        </div>

        <!--Listado articulos-->
        <div id="articles">
          <div v-for="pelicula in peliculasMayusculas" v-bind:key="pelicula.title">
            <Pelicula :peliculas="pelicula"
                      v-on:favorita="sleccionadoFav(pelicula)"
            ></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./pelicula";
// import Slider from "./sliders";
import Sidebar from "./sidebar";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar,
    // Slider
  },
  
  methods: {
    sleccionadoFav(favorita) {
      console.log(favorita);
      // alert('se ha ejecutado evento en padre');
      this.favorita = favorita;
    }
  },
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
       concatenaYear(value, message) {
         var date = new Date();
      return value + ' ' + date.getFullYear() + ' ' + message;
    }
  },
  computed: {
    peliculasMayusculas() {
    var peliculasMod = this.peliculas; 
      for(var i = 0; i < this.peliculas.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    },
  misDatos() {
    return this.nombre + ' ' + this.apellidos + ' ' + '<br/>' + '<strong>Sitio Web: </strong>' +  this.web;
  }
  },
  data() {
    return {
      nombre: 'Cristian',
      apellidos: 'Bohorquez',
      web: 'google.com',
      favorita: null,
      peliculas: [
        {
          title: "Gears",
          year: 2011,
          image:
            "https://compass-ssl.xbox.com/assets/4d/d4/4dd4dc7e-964c-43cf-aac4-f7d03fc40172.jpg?n=1616161616_GLP-Page-Hero-1084_1920x1080.jpg"
        },
        {
          title: "God Of War",
          year: 2010,
          image: "https://i.blogs.es/48d0ab/godofwar/450_1000.jpg"
        },
        {
          title: "Sekiro",
          year: 2019,
          image:
            "https://as.com/meristation/imagenes/2019/04/02/noticias/1554234770_155483_1554234816_noticia_normal.jpg"
        },
        {
          title: "Dark Souls",
          year: 2012,
          image:
            "https://i.blogs.es/591b5a/280518-darksouls-review/450_1000.jpg"
        }
      ]
    };
  }
};
</script>