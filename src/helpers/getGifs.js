/** ===============================================
* @Name: GET GIFS
================================================= */
/** @Desc: Trae gif por medio de una petición htytp */
// =============================================== //
//# >>>
export const getGifs = async (category) => {
  // Peitción
  const url = `https://api.giphy.com/v1/gifs/search?api_key=cZ0NUNSGLQXMqEyLq7Y0HfucFFA9uJKG&q=${ category }&limit=10`;
  // Respuesta
  const resp = await fetch(url);
  // Destructurar data tipo json
  const { data } = await resp.json();
  // 
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  console.log(gifs);
  return gifs;
}