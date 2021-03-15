import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActions from '../../store/ducks/usuarios/action';
import Sidebar from '../../components/sidebar';
import { Redirect } from 'react-router';
import { BsFillPersonPlusFill } from 'react-icons/bs';


const User = () => {

    const user = useSelector((state: any) => state.reducerUser.user)

    const userRole = localStorage.getItem('userRole')

    const dispatch = useDispatch()

   useEffect(() => {
    dispatch(UserActions.getUserRequest())
   }, [dispatch])

   const deleteUser = (id: any) => {
       try {
           dispatch(UserActions.deleteUserRequest(id))
       } catch (e) {
           console.log(e)
       }
       dispatch(UserActions.getUserRequest())
   }

    return(
        <div>
            { 
                userRole !== 'admin' &&
                <Redirect to='/home' />
            }
            <Sidebar />
            <a href='/newuser' className='icon-link'>
                <BsFillPersonPlusFill size='2em' />
                Adicionar usuário
            </a>
            <h1>Usuários</h1>
            { 
                user?.map((user: any) => (
                    <div key={user.id} className='user'>
                        
                        <h2>nome - {user.name}</h2>
                        <h2>função - {user.role}</h2>
                        <button onClick={() => deleteUser((user.id))}>
                            Deletar usuário
                        </button>
                        <br />
                        
                    </div>
                ))
            }
            
        </div>
    )
};

export default User;