import React from 'react'
import ButtonFilters from '../Filters/ButtonFilters'
import GenreFilter from '../Filters/GenreFilter'
import SearchBar from './SearchBar'
import CreatedFilter from '../Filters/CreatedFilter'
import {Link} from "react-router-dom"


export default function Selectors() {
    return (
        <>
            <div>
            <SearchBar />
            <GenreFilter/>
            <CreatedFilter />
            <ButtonFilters />
            <div>
            <Link to="/newgame">
              <button>Add New Game</button>
            </Link>
          </div>
            </div>        
        </>
    )
}
