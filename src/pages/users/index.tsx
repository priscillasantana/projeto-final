import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActions from '../../store/ducks/usuarios/action';
import Sidebar from '../../components/sidebar';


const User = () => {

    const user = useSelector((state: any) => state.reducerUser.user)

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
            <Sidebar />
            <h1>Usuários</h1>
            { 
                user?.map((user: any) => (
                    <div key={user.id}>
                        
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