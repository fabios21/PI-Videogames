import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearch, loadingGame } from '../../actions/index';
import Card from '../Cards/Card';
import Pagination from '../Pagination/Pagination'
import './Cards.css'


const Cards = () => {

    const dispatch = useDispatch()
    const loading = useSelector(store => store.loading)
    const videogamesPerPage = useSelector(store => store.videogamesPerPage)

    const currentPage = useSelector(store=> store.currentPage)
    const IndexLastGame = currentPage * videogamesPerPage
    const IndexFirstGame = IndexLastGame - videogamesPerPage
    
    
    const games = useSelector(store => store.videogames)
    const currentGames = games.slice(IndexFirstGame, IndexLastGame)
  
    useEffect (() => {
        dispatch(loadingGame(true));
        dispatch(clearSearch([]));
        dispatch(loadingGame(false));     
    }, [dispatch])
  
    if (loading) {
      return (
        <div  className="cards">
          <div className="div-loading">
            <img className="loading" src="https://i.pinimg.com/originals/4a/83/87/4a838762167c369ae5cb9643118000a8.gif" alt=""/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="cards">
          {currentGames.map((videogame, index) => {
            return (
              <Card key={index} videogame={videogame} />
            )
          })}
          
          <Pagination cardsPerPage={videogamesPerPage} totalCards={games.length} />
          
        </div>
      )
    }  
  
  }
export default Cards;
