import { getByTitle } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import getGift from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifItem from './GifItem'


const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category )

  return (
    <>
    <h3> { category } </h3>
    {
        isLoading && ( <h2>Cargando...</h2>)
    }
    <div className='card-grid'>

        {images.map( (img) => (
            <GifItem 
            key={ img.id }
            {...img } /> // esto es cuando tenemos muchas props las pasamos todas asi
        ))}
    </div>
    
    </>
  )
}

export default GifGrid
