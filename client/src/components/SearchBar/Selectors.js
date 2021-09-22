import React from 'react'
import ButtonFilters from '../Filters/ButtonFilters'
import GenreFilter from '../Filters/GenreFilter'
import SearchBar from './SearchBar'
import CreatedFilter from '../Filters/CreatedFilter'
import {Link} from "react-router-dom"
import './Selectors.css'


export default function Selectors() {
    return (
        <>
            <div className="searchbar">
              <SearchBar />
            </div>
            <div className="div-selectors">
              <div className="div-filters">
                <GenreFilter/>
                <CreatedFilter />
              </div>
              <div>
                <ButtonFilters />
              </div>
            <div>
            <Link className="addnewgame" to="/newgame">
              <button>Add New Game</button>
            </Link>
          </div>
            </div>        
        </>
    )
}
