import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/sidebar';
import * as BeerActions from '../../store/ducks/beers/action';
import './style.scss'

const Beer = () => {

    const beer = useSelector((state: any) => state.reducerBeer.beers)

    const dispatch = useDispatch()

    const userRole = localStorage.getItem('userRole')

    useEffect(() => {
        dispatch(BeerActions.loadBeerRequest())
    }, [dispatch])

        const deleteBeer = (id: any) => {

        try {
          dispatch(BeerActions.deleteBeerRequest(id))
        } catch (e) {
          console.log(e)
        }
        dispatch(BeerActions.loadBeerRequest())
      }


    return (
        <div>

            <Sidebar />

            <h1>produtos</h1>
                    <div className='grid'>
                        

            {
                beer?.map((beer: any) => (
                    <div key={beer.id} className='products'>

                        <h3>{beer.title}</h3>
 
                        <img src={beer.image} alt={beer.description} className='beers' />
                        
                        <p className='price'> {beer.description}  <br />
                        {beer.price}
                        </p>
                       { 
                            userRole === 'admin' &&
                            <button onClick={() => deleteBeer((beer.id))}>
                                Excluir
                            </button>
                        }
                    </div>
                ))
            }
                    </div>
        </div>
    )
}

export default Beer;
