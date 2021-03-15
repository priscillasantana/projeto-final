import { useRef } from 'react';
import { newUserRequest } from '../../store/ducks/usuarios/action';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/sidebar';
import { Redirect } from 'react-router';
import { FaUserAlt } from 'react-icons/fa';
import './style.scss';


const Cadastrar = () => {

    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);
    const inputName = useRef<HTMLInputElement>(null);
    const inputRole = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch();

    const userRole = localStorage.getItem('userRole')

    const cadastro = () => {
        const email = inputEmail.current?.value
        const password = inputPassword.current?.value
        const name = inputName.current?.value
        const role = inputRole.current?.value
        

        const dados = {email, password, name, role} 
        dispatch(newUserRequest(dados));
    }

    return(
        <div>

            { 
                userRole !== 'admin' &&
                <Redirect to='/home' />
            }

            <Sidebar />

            <a href='/users' className='icon-link'>
                <FaUserAlt size='1.5em' />
                Usuários
            </a>

            <div className='inputs-form'>
                <h1>Novo funcionário</h1>

                <input className='input' type='email' placeholder='E-mail' ref={inputEmail} required />
                <input className='input' type='password' placeholder='Senha inicial' ref={inputPassword} required />
                <input className='input' type='text' placeholder='Nome' ref={inputName} required />
                <input className='input' type='text' placeholder='Editor ou Admin?' ref={inputRole} required />
                
                <button className='btn' onClick={cadastro}>Cadastrar</button>
            </div>

        </div>
    )
};


export default Cadastrar;