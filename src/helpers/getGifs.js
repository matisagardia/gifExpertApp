
export const getGifs = async (cat) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=j1RHFk7cVIXSFKLh55JLkCbUTKPRMx5O&q=${cat}&limit=9`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(gif => ({
        id:gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
};

