import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../views/CreateArticle.vue'
import ListArticle from "../views/ListArticle.vue"
import EditArticle from "../views/EditArticle.vue"
import ShowArticle from "../views/ShowArticle.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '"/articles/index"'
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/articles/list',
    name: 'list',
    component: ListArticle,
    
  },
  {
    path: '/articles/edit/:id',
    name: 'edit',
    component: EditArticle,
    props:true
  },
  {
    path: '/articles/show/:id',
    name: 'show',
    component: ShowArticle,
    props:true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
