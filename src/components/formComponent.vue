<template>
  <div>
    <Slider texto="Formulario"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Form</h2>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./sliders";
import Sidebar from "./sidebar";

export default {
  name: "FormComponent",
  components: {
    Sidebar,
    Slider
  }
};
</script>