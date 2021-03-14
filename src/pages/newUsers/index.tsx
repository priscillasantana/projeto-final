import { useRef } from 'react';
import { newUserRequest } from '../../store/ducks/usuarios/action';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/sidebar';


const Cadastrar = () => {

    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);
    const inputName = useRef<HTMLInputElement>(null);
    const inputRole = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch();

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
            <Sidebar />

            <h1>Novo funcionário topzera</h1>
            <input type='email' placeholder='Type your e-mail' ref={inputEmail} />
            <input type='password' placeholder='Type your password' ref={inputPassword} />
            <input type='text' placeholder='Type your name' ref={inputName} />
            <input type='text' placeholder='Type your role' ref={inputRole} />
            <button onClick={cadastro}>Cadastrar</button>
        </div>

    )
};


export default Cadastrar;