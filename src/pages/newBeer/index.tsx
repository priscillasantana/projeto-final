import { useRef } from "react";
import { useDispatch } from "react-redux";
import { newBeerRequest } from "../../store/ducks/beers/action";
import Sidebar from '../../components/sidebar';
import { IoMdBeer } from 'react-icons/io';

const Produtos = () => {
    
    const inputTitle = useRef<HTMLInputElement>(null);
    const inputPrice = useRef<HTMLInputElement>(null);
    const inputDescription = useRef<HTMLInputElement>(null);
    const inputImage = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch();

    const cadastro = () => {

        const title = inputTitle.current?.value
        const price = inputPrice.current?.value
        const description = inputDescription.current?.value
        const image = inputImage.current?.value
        
        const dados = {title, price, description, image} 
        dispatch(newBeerRequest(dados));
    }

    return(
        <div>
            <Sidebar />

            <a href='/products' className='icon-link'>
                <IoMdBeer size='2em' />
                Produtos
            </a>

            <div className="inputs-form">

                <h1>Novo produto</h1>
                <input className='input' type='text' placeholder='Nome do produto' ref={inputTitle} required />
                <input className='input' type='text' placeholder='Preço' ref={inputPrice} required />
                <input className='input' type='text' placeholder='Descrição' ref={inputDescription} required />
                <input className='input' type='url' placeholder='Url da imagem' ref={inputImage} required />
                <button className='btn' onClick={cadastro}>Cadastrar</button>

            </div>
        </div>

    )
};


export default Produtos;