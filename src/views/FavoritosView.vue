<script setup>
    import VolverPokemon from '../components/VolverPokemon.vue';
    import { useGetData } from '@/composables/useGetData';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';


     /*PINIA ABAJO */
    //LAS TRES LINEAS DE ABAJO SIEMPRE SE DEBEN HACER, LO UNICO QUE CAMBIA ES LA FORMA DE TRAER LOS METODOS
    //A COMO TRAER LAS VARIABLES
    import { storeToRefs } from 'pinia';
    import { useFavoritosStore } from '../stores/favoritos';
    const useFavorito = useFavoritosStore();

    const { favoritos } = storeToRefs(useFavorito);//ESTE ES PARA LAS VARIABLES

    const { eliminar } = useFavorito;//ESTE ES PARA LAS FUNCIONES


</script>

<template>
    <h1>Pokemons Favoritos</h1>
    <ul>
        <li v-for="(favorito, i) in favoritos"><!-- En el router link se pueden pasar tantos parametros como hemos puesto en el fichero index.js-->
            <router-link :to="`pokedex/${favorito}`">{{ favorito }}</router-link><!-- Por ejemplo, aqui pasamos el nombre, pero podriamos pasarle tambien la imagen-->
            <button @click="eliminar(i)">Eliminar</button>
        </li>
    </ul>
    <VolverPokemon></VolverPokemon>
</template>