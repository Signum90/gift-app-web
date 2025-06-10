/** ===============================================
* @Name: GIF GRID
================================================= */
/** @Desc: Grid de categorias */
// =============================================== //
//# IMPORTS: >>>
import { GifItem } from './GifItem';
import { useFecthGifs } from '../hooks/useFetchGif';
//# >>>
//# >>>
export const GifGrid = ({ category }) => {
  // LLAMADO DE UN HOOK PERSONALIZADO
  const { images, isLoading } = useFecthGifs(category);

  //# RENDER >>>
  return(
    <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }      
      <div className='card-grid'>
        {
          images.map((img) => (
            <GifItem 
              key={img.id} 
              { ...img } // Esparcir propiedades
            />
          ))
        }
      </div>
    </>
  )
}
