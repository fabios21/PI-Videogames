import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from './Cards';
import './CardsList.css';

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
        <div className="contenedor5">
            <Cards cards={ videogames } />
        </div>
    )

}