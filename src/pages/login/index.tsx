import { useRef } from 'react'
import { loadUserRequest } from '../../store/ducks/usuarios/action';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.scss'


const Login = () => {

    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    const logged = useSelector((state: any) => state.reducerUser.user.accessToken)

    const dispatch = useDispatch();

    const login = () => {
        const email = inputEmail.current?.value
        const password = inputPassword.current?.value

        dispatch(loadUserRequest({email, password}));

    };

    return(
        <div className="bg-fundo">
            
        <div className='form-login'>
  
            <h1>Entrar</h1>
            
            <input type='email' placeholder='Type your e-mail' ref={inputEmail} />
            <br />
            <input type='password' placeholder='Type your password' ref={inputPassword} />
            <button onClick={login}>Submit</button>
            
            {
                logged && 
                <Redirect to='/home' />
            }
         
            </div>
        </div>

    )
};


export default Login;