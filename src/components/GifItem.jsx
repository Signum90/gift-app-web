/** ===============================================
* @Name: GIF ITEM
================================================= */
/** @Desc: Componente para los items de la lista
 * de gifs
*/
// =============================================== //
import React from 'react'
//# >>>
//# IMPORTS: >>>
export const GifItem = ({ title, url }) => {
  
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{ title }</p>
    </div>
  )
}
