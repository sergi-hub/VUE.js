<script setup>
    import Botones from '../components/Botones.vue';
    //********IMPORTANTE IMPORTAR LO SIGUIENTE********//
    //EL PRIMER IMPORT ES PARA PODER USAR RUTAS, Y EL SEGUNDO PARA PODER UTILIZAR EL COMPOSABLE
    import { RouterLink } from "vue-router";
    import { useGetData } from "@/composables/useGetData";
    import { ref } from 'vue';

    /**PINIA ABAJO */
    //LAS TRES LINEAS DE ABAJO SIEMPRE SE DEBEN HACER, LO UNICO QUE CAMBIA ES LA FORMA DE TRAER LOS METODOS
    //A COMO TRAER LAS VARIABLES
    import { storeToRefs } from 'pinia'; //****IMPORTANTISSIMO LLAMAR LOS IMPORT DE PINIA, EL DE LA LIBRERIA DE PINIA, Y EL QUE QUEREMOS USAR */
    import { useFavoritosStore } from '../stores/favoritos';
    const  useFavoritos  = useFavoritosStore();

    const { pagina } = storeToRefs(useFavoritos);//ESTE ES PARA VARIABLES

    const { getData, datos, error, cargado} = useGetData(); //LLAMAMOS AL COMPOSABLE Y LE DECIMOS QUE QUEREMOS OBTENER DE EL (getData y datos)
    getData("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=" + pagina.value); //usamos getData y le pasamos una url
    console.log(datos);

    //LO DE ABAJO NOOOOOO ES IMPORTANE
    const avanzar = () =>{
        pagina.value += 20;
        getData("https://pokeapi.co/api/v2/pokemon/?limit=20&offset="+pagina.value);
        console.log(pagina.value);
    }

    const retroceder = () =>{
        pagina.value -= 20;
        getData("https://pokeapi.co/api/v2/pokemon/?limit=20&offset="+pagina.value);
    }

</script>

<template>
    <h1 v-if="error">Error de Conexión</h1><!-- Mostramos que hay error en caso de que error sea true-->
    <h1 v-else-if="cargado">Cargando datos...</h1><!--Mostramos cargando datos mientras cargado sea true-->
    <div v-else-if="datos">
        <h1>Pokedex</h1>
        <Botones
            @avanzar="avanzar"
            @retroceder="retroceder"
        ></Botones>
        <ul><!-- Basicamente lo que hacemos es recorrer datos, que tiene todo lo de la api-->
            <li v-for="poke in datos.results"> 
                <router-link :to="`/pokedex/${poke.name}`"><!--Por cada dato, que será un pokemon...-->
                    {{ poke.name }}<!-- le de haremos una ruta, que nos lleve a /pokedex/$parametro,-->
                </router-link> <!--este parametro es para usarlo en esa vista-->
            </li>
        </ul>
    </div>
</template>