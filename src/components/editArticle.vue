<template src="./createArticle.html"></template>

<script>
import Sidebar from "../components/sidebar";
import Article from "../models/article";
import Global from "../global";
import swal from "sweetalert";
import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  name: "EditArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
      isEdit: true
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    console.log(articleId);
    this.getLastArticles(articleId);
    //  this.deleteArticle(articleId)
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
    getLastArticles(articleId) {
      axios.get(`${Global.urlBack}/article/${articleId}`).then(res => {
        if (res.data.status == "success") {
          this.article = res.data.article;
          //   console.log(this.articles, "Articles");
        }
        console.log(res, "El res en edit");
      });
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    save() {
      var articleId = this.$route.params.id;
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(`${Global.urlBack}/article/${articleId}`, this.article)
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
                        "Articulo editado",
                        "El articulo se ha editado correctamente",
                        "success"
                      );

                      this.article = res.data.article;
                      this.$router.push("/show-articles");
                    } else {
                      swal(
                        "No se ha editado el articulo",
                        "El articulo no se ha editado correctamente",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Articulo editado",
                  "El articulo se ha editado correctamente",
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
    },
    deleteArticle(articleId) {
      swal({
        title: "Are you sure?",
        text:
          "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(`${Global.urlBack}/article/${articleId}`).then(() => {
            this.$router.push("/show-articles");
          });
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    }
  }
};
</script>