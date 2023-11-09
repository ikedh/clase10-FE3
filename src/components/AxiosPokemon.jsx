import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosPokemon = () => {

    const [name,setName]= useState("")

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/charizard")
        .then( res =>{
            setName(res.data.name)
        })
    },[])


  return (
    <>
        <h5>Pokemon: {name}</h5>

        {/* Renderizar la lista de habilidades de los Pokemon */}

    </>
  )
}

export default AxiosPokemon