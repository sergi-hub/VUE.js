import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('../views/PokedexView.vue')
    },
    {
      path: '/pokedex/:nombre', //esta ruta se utilizará cuando se pase un parametro, este se llamará nombre
      name: 'pokemon',          //IMPORTANTE, PODEMOS PASAR TODOS LOS PARAMETROS QUE QUERAMOS, PERO DEBEMOS ESPECIFICARLOS CON /:nombreParametro
      component: () => import('../views/PokemonView.vue')//la ruta nos llevará a la vista que pongamos aquí
    },
    {
      path: '/favoritos', //esta ruta se utilizará cuando se pase un parametro, este se llamará nombre
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue')//la ruta nos llevará a la vista que pongamos aquí
    },
    {//importante poner siempre esta ruta que es la del not found
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    }
  ]
})

export default router
