/** ===============================================
* @Name: USE FETCH GIF
================================================= */
/** @Desc: Hook personalizado para las peticiones
 * fetch de los gif
*/
// =============================================== //
//# IMPORTS: >>>
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//# >>>
export const useFecthGifs = (category) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Función:
  const getImages = async() => {
    // REalizar petición
    const newImages = await getGifs(category);
    // Pasar imagenes
    setImages(newImages);
    // Cambiar el loading
    setIsLoading(false);
  }
  /**NOTA: un use effect no puede ser asyncrono, es una mala
   * practica, por lo cual se puede implemetar una promesa
   * para ejecutar una función asyncrona o crear una funcion asincrona
   * por fuere del effect para ser llamada dentro de este.
   */
  useEffect(() => {
    // Usando una promesa
    /*
    getGifs(category)
      .then(newImages => setImages(newImages));
    */
    //  Usando una función async
    getImages();
  }, []);

  // RETORNO >
  return {
    images,
    isLoading
  }
}