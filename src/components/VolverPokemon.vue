<script setup>
    import { useRouter } from 'vue-router';//hacemos el import correspondiente


    const router = useRouter();//creamos una constante que use useRouter()
    const volver = () =>{ //declaramos una funcion para el boton,
        router.push("/pokedex");//lo que hará será mover al usuario a la url indicada
    }

</script>

<template>
    <button @click="volver()">Volver a la Pokedex</button>
</template>