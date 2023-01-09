import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (cat) => {

    const [images, setImages] = useState([]);    
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(cat);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
       getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading,
        //this can be replaced for only the variable name but for better understanding i keep it this way
    }
}
