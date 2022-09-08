import React, { useState } from 'react'


const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
       setInputValue( event.target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault() // hace que no se refresque la pagina completa  y me deja guardar el valor que quiero
        if( inputValue.trim().length <= 1) return; // si no escribemos nada no envia el formulario

        onNewCategory( inputValue.trim() )
        //setCategories( categories => [inputValue,...categories]) // esto es cuando agarro las props
        setInputValue('')
    }

  return (
    <>
    <form onSubmit={ onSubmit }>
    <input
        type="text"
        placeholder='Buscar Gifs'
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>
    </>
  )
}

export default AddCategory