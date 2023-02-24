import axios from 'axios';
import { ref } from 'vue';

export const useGetData =()  => {
    const datos = ref(null);
    const error = ref(false);
    const cargado = ref(true);

    const getData = async (url) => {
        try { //esperamos a obtener los resultados del API
            const resultado = await axios.get(url);
            datos.value = resultado.data;
        }catch (e) { //si hay algun error lo muestro por consola
            console.log(e);
            error.value = true;
        }finally{
            cargado.value = false;
        }
    };
    return {
        getData, datos, error, cargado
    }
}
    