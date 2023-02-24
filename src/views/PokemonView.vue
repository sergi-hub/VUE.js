<script setup>
    import VolverPokemon from '../components/VolverPokemon.vue';
    import { useGetData } from '@/composables/useGetData';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';

    /**PINIA ABAJO */
    //LAS TRES LINEAS DE ABAJO SIEMPRE SE DEBEN HACER, LO UNICO QUE CAMBIA ES LA FORMA DE TRAER LOS METODOS
    //A COMO TRAER LAS VARIABLES
    import { storeToRefs } from 'pinia'; //****IMPORTANTISSIMO LLAMAR LOS IMPORT DE PINIA, EL DE LA LIBRERIA DE PINIA, Y EL QUE QUEREMOS USAR */
    import { useFavoritosStore } from '../stores/favoritos';
    const  useFavoritos  = useFavoritosStore();

    const { anyadir, blockBoton } = useFavoritos; //ESTE ES PARA FUNCIONES

    const route = useRoute();//SIN ESTO NO PDEMOS USAR EL ROUTE PARA PODER SABER QUE PARAMETRO SE HA PASADO EN LA RUTA(:NOMBRE)

    const {getData, datos, error, cargado} = useGetData();
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.nombre}`);
    console.log(datos);

</script>

<template>
    <h1 v-if="cargado">Cargando...</h1>
    <div v-else>   
        <h1>Nombre Pokemon: {{ $route.params.nombre }}</h1>
        <img :src="datos.sprites.front_shiny">
        <img :src="datos.sprites.front_default"><br>
        <VolverPokemon></VolverPokemon>
        <button @click="anyadir(datos)" :disabled="blockBoton($route.params.nombre)">Añadir a favoritos</button>
    </div>
</template>