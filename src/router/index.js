import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cursos',
    component: () => import('../views/Cursos.vue')
  },
  {
    path: '/aulas',
    name: 'Aulas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Aulas.vue')
    }
  },

  {
    path: '/painel',
    name: 'Painel',
    component: () => import('../views/Painel.vue')
  },

  {
    path: '/Cursos/Detalhes/:cursoId',
    name: 'Curso',
    component: () => import('../views/Curso.vue')
  },

  ,

  {
    path: '/Cursos/Detalhes/:cursoId',
    name: 'Curso',
    component: () => import('../views/Curso.vue')
  },

  {
    path: '/addCurso',
    name: '',
    component: () => import('../views/AddCurso.vue')
  }
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
