<template src="./createArticle.html"></template>

<script>
import Sidebar from "../components/sidebar";
import Article from "../models/article";
import Global from "../global";
import swal from "sweetalert";
import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      submitted: false,
      file: ""
    };
  },
  mounted() {
    console.log(this.article);
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    save() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(`${Global.urlBack}/save`, this.article)
          .then(res => {
            if (res.data) {
              const formData = new FormData();
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                formData.append("file0", this.file, this.file.name);
                var articleId = res.data.article._id;

                axios
                  .post(`${Global.urlBack}/upload-image/` + articleId, formData)
                  .then(res => {
                    if (res.data.article) {
                      swal(
                        "Articulo creado",
                        "El articulo se ha creado correctamente",
                        "success"
                      );

                      this.article = res.data.article;
                      this.$router.push("/show-articles");
                    } else {
                      swal(
                        "No se ha creado el articulo",
                        "El articulo no se ha creado correctamente",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Articulo creado",
                  "El articulo se ha creado correctamente",
                  "success"
                );

                this.article = res.data.article;
                this.$route.push("/show-articles");
              }
              console.log(res, "El res");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>