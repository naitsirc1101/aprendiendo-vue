<template>
  <div>
    <Slider 
      texto="Blog"
    ></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
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
  name: "BlogComponent",
  components: {
    Sidebar,
    Slider
  }
};
</script>