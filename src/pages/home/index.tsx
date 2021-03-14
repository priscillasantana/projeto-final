import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBeerRequest } from '../../store/ducks/beers/action';
import { getUserRequest } from '../../store/ducks/usuarios/action';
import Sidebar from '../../components/sidebar';


const Home = () => {

    const beer = useSelector((state: any) => state.reducerBeer.beers)

    const user = useSelector((state: any) => state.reducerUser.user)

    const dispatch = useDispatch()

    let beerSize = beer?.length

    let userSize = user?.length

   useEffect(() => {
    dispatch(getUserRequest())
   }, [dispatch])

    useEffect(() => {
        dispatch(loadBeerRequest())
    }, [dispatch])

    return(
        <div>
            <Sidebar />
            <h1>Produtos e usuários</h1>
            <h2>número de produtos - {beerSize}</h2>
            <h2>número de usuários - {userSize}</h2>
        </div>
    )
};

export default Home;