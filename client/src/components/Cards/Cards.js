import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearch, loadingGame } from '../../actions/index';
import Card from '../Cards/Card';
import Pagination from '../Pagination/Pagination'


const Cards = ({cards}) => {

    const dispatch = useDispatch()
    const loading = useSelector(store => store.loading)
    const videogamesPerPage = useSelector(store => store.videogamesPerPage)

    const currentPage = useSelector(store=> store.currentPage)
    const IndexLastGame = currentPage * videogamesPerPage
    const IndicePrimerVideogame = IndexLastGame - videogamesPerPage
    
    
    const games = useSelector(store => store.videogames)
    const currentGames = games.slice(IndicePrimerVideogame, IndexLastGame)
  
    useEffect (() => {
        dispatch(loadingGame(true));
        dispatch(clearSearch([]));
        dispatch(loadingGame(false));     
    }, [dispatch])
  
    if (loading) {
      return <div>
        <div></div>
      </div>
    } else {
      return (
        <div>
            <Pagination cardsPerPage={videogamesPerPage} totalCards={games.length} />


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
