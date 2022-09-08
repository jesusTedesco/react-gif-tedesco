import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return; // para que no pongan algo que ya esta escrito

    setCategories([NewCategory, ...categories]) // Esta es la forma de agregar al state si ponemos el spred operator de ultimo lo que pongamos queda de primero
  }

  return (
    <>
      <h1>GifTedescoApp</h1>


      < AddCategory
        onNewCategory={onAddCategory}
      //setCategories = { //setCategories } // aqui era cuando enviaba del padre al hijo
      />


      {categories.map((category) => (
        < GifGrid key={category} category={category} />
      ))}




    </>


  )
}

export default GifExpertApp