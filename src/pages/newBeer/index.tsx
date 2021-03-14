import { useRef } from "react";
import { useDispatch } from "react-redux";
import { newBeerRequest } from "../../store/ducks/beers/action";
import Sidebar from '../../components/sidebar';

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
            
            <h1>Novo produtinho arrasador topzera</h1>
            <input type='text' placeholder='Nome do produto' ref={inputTitle} />
            <input type='text' placeholder='Preço' ref={inputPrice} />
            <input type='text' placeholder='Descrição' ref={inputDescription} />
            <input type='text' placeholder='Image' ref={inputImage} />
            <button onClick={cadastro}>Cadastrar</button>
        </div>

    )
};


export default Produtos;