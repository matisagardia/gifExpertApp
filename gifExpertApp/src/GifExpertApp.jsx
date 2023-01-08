import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Boruto']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

  return (
    <>
    
    <h1>GifExpertApp</h1>

    <AddCategory onNewCategory={onAddCategory}/>

    <button onClick={onAddCategory}>Agregar GIF</button>

    {categories.map(cat => <GifGrid key={cat} cat={cat}/>)};

    </>

  )
}
