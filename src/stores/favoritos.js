import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {

  const favoritos = ref([]);

  const pagina = ref(0);

  const anyadir = (datos) =>{
    favoritos.value.push(datos.name);
  }

  const eliminar = (posi) =>{
    favoritos.value.splice(posi, 1);
  }

  const blockBoton = (nombre) => {
    let encontrado = favoritos.value.indexOf(nombre);
    if(encontrado != -1){
      return true;
    }else{
      return false;
    } 
  }

  const blockRetroceder = () => {
    if(pagina.value <= 0){
      return true;
    }else{
      return false;
    }
  }

  return { 
    anyadir,
    favoritos,
    eliminar,
    blockBoton,
    pagina,
    blockRetroceder
   }
})
