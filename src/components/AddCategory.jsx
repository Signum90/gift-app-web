/** ===============================================
* @Name: ADD CATEGORY
================================================= */
/** @Desc: Componente */
// =============================================== //
//# IMPORTS: >>>

import { useState } from "react"

//# FUN COMPONENT >>>
export const AddCategory = ({ onNewCategory }) => {
  //# STATES >>>
  const [inputValue, setInputValue] = useState('');
  //# Cambio del Input >>>
  const onInputChange = (e) => {
    // Tomar el event.target.value y pasarlo al input
    setInputValue(e.target.value)
  }
  //# Envio de formulario >>>
  const onSubmit = (event) => {
    // Evitar el evento de envió
    event.preventDefault();
    // Validar que no venga vacio el input
    if(inputValue.trim().length <= 1) return;
    
    // FORMA INCORRECTA: recibiendo el setState ========>
    // Agregar nueva categoria
    /**Se pueden enviar los valores anteriores por medio
     * de una funcion flecha
     */
    // setCategories((prevCategories) => [...prevCategories, inputValue]);

    // FORMA CORRECTA ============>
    // Se emite el evento al padre, el cual agrega la nueva categoria al
    // state de las categorias
    onNewCategory(inputValue.trim());
    
    // Limpiar input
    setInputValue('');

  }
  //# RENDER >>>
  return (
    <form onSubmit={(event) =>onSubmit(event)}>
      <input
        type="text" 
        placeholder="Buscar gifs"
        value={ inputValue }
        // onChange={ (e) => onInputChange(e) } // Funcion común
        onChange={ onInputChange } // Mandando solo la referencia
      />
    </form>
  )
}
