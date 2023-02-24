<script setup>
    import { useGetData } from '@/composables/useGetData';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia'; //****IMPORTANTISSIMO LLAMAR LOS IMPORT DE PINIA, EL DE LA LIBRERIA DE PINIA, Y EL QUE QUEREMOS USAR */
    import { useFavoritosStore } from '../stores/favoritos';
    const  useFavoritos  = useFavoritosStore();

    // const { pagina } = storeToRefs(useFavoritos);//ESTE ES PARA VARIABLES

    const { blockRetroceder } = useFavoritos;

    const emit = defineEmits(['avanzar', 'retroceder']);//definimos el emit eliminaProducto

</script>

<template>
    <button @click="emit('avanzar')" type="button">Av.Pag</button>
    <button @click="emit('retroceder')" type="button" :disabled="blockRetroceder">Re.Pag</button>
</template>