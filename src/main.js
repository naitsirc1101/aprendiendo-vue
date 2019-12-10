import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/es';
import lastArticles from '../src/components/lastArticles';
import MyComponent from '../src/components/myComponent';
import HelloWorld from '../src/components/HelloWorld';
import SearchComponent from '../src/components/search'
import CreateArticle from '../src/components/createArticle'
import FormComponent from '../src/components/formComponent';
import BlogComponent from '../src/components/blogComponent';
import PageComponent from '../src/components/pageComponent';
import ErrorComponent from '../src/components/ErrorComponent';
import Redirect from "../src/components/redirect";
import Peliculas from '../src/components/peliculas';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, {
  moment
});


const routes = [
  {path: '/home', component: lastArticles},
  {path: '/last-articles', component: lastArticles},
  {path: '/my-component', component: MyComponent},
  {path: '/search/:search', component: SearchComponent},
  {path: '/crear-articulo', name: 'create', component: CreateArticle},
  {path: '/peliculas', name: 'Peliculas', component: Peliculas},
  {path: '/hello-world', component: HelloWorld},
  {path: '/form', component: FormComponent},
  {path: '/blog', component: BlogComponent},
  {path: '/redirect/:searchString', component: Redirect},
  {path: '/page/:id?', name: 'page', component: PageComponent},
  {path: '/', component: lastArticles},
  {path: '*', component: ErrorComponent},

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
