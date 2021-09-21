import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from './Cards'
import cargando from "./cargando.gif"

export default function List() {
    const [ videogames , setVideogames ] = useState([])
    const totalVg = useSelector(store => store.videogames)
    const searchGames = useSelector(store => store.search)
  

    useEffect(() => {
        if(searchGames.length > 0){
            setVideogames([...searchGames])
        } else {
            setVideogames([...totalVg])
        }
    }, [searchGames, totalVg])
  

    return (
        <div>
            {/* <img id="primero" src="http://www.gifde.com/gif/otros/decoracion/cargando-loading/cargando-loading-039.gif"/> */}
            <Cards cards={ videogames } />
        </div>
    )

}