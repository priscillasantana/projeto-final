import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBeerRequest } from '../../store/ducks/beers/action';
import { getUserRequest } from '../../store/ducks/usuarios/action';
import Sidebar from '../../components/sidebar';
import { FaUserAlt } from 'react-icons/fa';
import { IoBeerSharp } from 'react-icons/io5';
import './style.scss'


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

            <h1>Home</h1>

            <div className='container-home'>
                <div className='home-item'>
                    <IoBeerSharp size={'4em'} />
                    <h2>Produtos cadastrados</h2>
                    <h3>{beerSize}</h3>
                </div>

                <div className='home-item'>
                    <FaUserAlt size={'3em'}/> <br />
                    <h2>Usuários</h2> <br></br>
                    <h3>{userSize}</h3>
                </div>
            </div>

        </div>
    )
};

export default Home;