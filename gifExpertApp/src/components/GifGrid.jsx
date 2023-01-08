import {getGifs} from '../helpers/getGifs';
import { useEffect } from 'react';


export const GifGrid = ({cat}) => {

    useEffect(() => {

        getGifs(cat);
    
      return () => {
        
      }
    }, [])
    



  return (
    <>
        <h4>{cat}</h4>
    </>
  )
}
