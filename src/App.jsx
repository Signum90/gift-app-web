/** ===============================================
* @Name: APP
================================================= */
/** @Desc: Componente de Entrada */
// =============================================== //
//# IMPORTS: >>>
import { useState } from "react";
import { AddCategory, GifGrid } from './components';
//# FUN COMPONENT >>>
const App = () => {
  //# STATE: >>>
  const [categories, setCategories] = useState(['One Piece']);
  //# Agergar nueva Categoria / Forma de emitir un evento al padre >>>
  const onAddCategory = (newCategory) => {
    // Validar que no venga una categoria ya existente
    if(categories.find((cat) => cat.toLowerCase() === newCategory.toLowerCase())) return;
    // Agregar nueva categoria
    setCategories([newCategory, ...categories])
  }
  //# VAR >>>
  return (
    <>
      {/* TITULO */}
      <div>
        <h1>GIF APP</h1>
      </div>
      {/* INPUT */}
      <AddCategory 
        // setCategories={ setCategories } -> Forma no correcta de realizar
        onNewCategory={ (value) => onAddCategory(value)}
      />
      {/* LISTADO DE GIF */}
      {
        categories.map((category) => (
          <GifGrid key={ category } category={ category } />
        ))
      }
      
    </>
  );
}

export default App;
