<template>
  <section id="content">
    <h2 class="subheader">{{ texto }}</h2>
    <br />
  </section>
</template>

<script>
// import MyComponent from "./myComponent";

export default {
  name: "HelloWorld",
  components: {
   // MyComponent
  },
  props: {
    msg: String
  },
  data() {
    return {
      texto: "Texto desde HelloWorld"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
