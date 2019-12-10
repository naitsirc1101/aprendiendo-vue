<template>
  <div>
    <Slider texto="Articulo"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear Articulo</h1>

        <form class="mid-form">

          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title"/>
          </div>

          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content"></textarea>
          </div>

          <div class="form-group">
            <label for="image">Imagen</label>
            <input type="file" name="image"/>
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Guardar" class="btn btn-success"/>
        </form>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/sliders";
import Sidebar from "../components/sidebar";
import Article from "../models/article";
// import Global from '../global';
// import axios from 'axios';
// import {required, minLength} from 'vuelidate/lib/validators';

export default {
  name: "CreateArticle",
  components: {
    Slider,
    Sidebar
  },
  data() {
    return {
      article: new Article("", "", null, "")
    };
  },
  mounted() {
    console.log(this.article);
  }
};
</script>