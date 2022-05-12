import { Link } from 'react-router-dom';
import stonksImg from '../../Assets/img/stonksImg.webp'
import '../../Assets/CSS/erro.css'

export const Stonks = (props:any):JSX.Element =>{

    return(
        <>
            <div className="centralizarPagina">
                <div className='pagina'>
                    <p className='textoPrimario'>Ops</p>
                    <img src={stonksImg} alt="imagen de erro" className='stonksImg' />
                    <p className='textoSecundario'>Pagina em construção</p>
                    <button className="transparent"><Link className="voltarHome textoSecundario" to='/'>👉 clique aqui para voltar a pagina Home👈</Link></button>
                </div>
            </div>
        </>
    );
}

export default Stonks