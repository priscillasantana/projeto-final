import { useRef } from 'react';
import { loadUserRequest } from '../../store/ducks/usuarios/action';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.scss';


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
        
        <div className="center-content">
            <div className='form-login'>
                <div className="bg-fundo"></div>
                    <h1 className='login-title'>Painel administrativo</h1>
                    
                    <input className='input' type='email' placeholder='Digite seu e-mail' ref={inputEmail} />
                    <input className='input' type='password' placeholder='Digite sua senha' ref={inputPassword} />
                    <button className='btn' onClick={login}>Submit</button>
                    
                    {
                        logged && 
                        <Redirect to='/home' />
                    }
                
            </div>
        </div>

    )
};


export default Login;