
import '../../Assets/CSS/header.css';
import logoOne from "../../Assets/img/Group 2.png"
import { Link } from "react-router-dom";


export  const Header = (props:any): JSX.Element => {


    return (
        <div className="header">

            <div className="headerAlinhamaneto">
                <div className="alinhamentoLogo">

                    <div className="logoHeader">
                        <img src={logoOne} alt="logo" />
                    </div>

                    <p className="texto1">{props.objeto.description}</p>
                    <p className="texto3">{props.objeto.supdescription}</p>

                </div>

                <div className="buttonsAlinhamento">



                    <Link className="button1" to='/'>Home</Link>
                    <Link className="button2" to='/Usuarios'>Usuários</Link>
                    <Link className="button3" to='/Filmes'>Filmes</Link>
                    <Link className="button4" to='/Genero'>Gênero</Link>

                </div>


            </div>

        </div>
    );



}





