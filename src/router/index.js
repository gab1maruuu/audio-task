import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../components/inicio.vue'
import Episodios from '../components/episodios.vue'
import Contacto from '../components/contacto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/episodios',
      name: 'Episodios',
      component: Episodios
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    }
  ],
})

export default router
