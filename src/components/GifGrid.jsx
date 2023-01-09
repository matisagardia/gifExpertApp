
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({cat}) => {

    const {images, isLoading} = useFetchGifs(cat);

  return (
    <>
        <h3>{cat}</h3>

        {
            isLoading && (<h2>Loading...</h2>)
        }

        <div className='card-grid'>
            {images.map((img) => (
            <GifGridItem 
            key={img.id}
            title={img.title}
            url={img.url}
            //otra forma de traer las propiedades de img es usar el spread operator de la siguiente manera
            // {...img} de esta forma desestructuro todas las propiedades y luego en el componente puedo acceder facilmente
            />
            ))
            }
        </div>
    </>
  )
}
