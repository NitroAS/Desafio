import React, { useEffect, useState } from "react";
import '../../Assets/CSS/home.css';
import Cinema from './../../Assets/img/cinema 1.png'
import Theater from './../../Assets/img/theater 1.png'
import { Header } from "../../Components/header/header";
import { LoadingModal } from "../../Components/Loading"
import { Footer } from "../../Components/footer/footer";

let propsHome: any = {
    description: 'Conheça nossa Coletânea'
}

export const Home = (): JSX.Element => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, [])



    return (
        <>
          { loading && <LoadingModal /> }
            <Header objeto={propsHome} />
            <main className="mainHome">
                <div className="meio">
                    <h1>Monte sua coletânea de filmes...</h1>

                    <div className="textoCentral">
                        <p className="texto1Meio">
                            <p className="tituloHome">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod temporx</p>
                            <p className="textoMeio">
                                Lorem ipsum dolor sit amet conse ctetur   adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. </p>
                        </p>
                    </div>

                </div>

                <div className="movimentoFilmeECategoria">
                    <div className="filmesHome">
                        <img src={Cinema} alt="foto de Filme" />
                        <h2 className="homeTexto">Filmes</h2>
                        <p className="texto2Meio">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. </p>
                    </div>

                    <div className="theaterHome">
                        <img src={Theater} alt="foto de Categoria" />
                        <h2 className="homeTexto">Categoria</h2>
                        <p className="texto3Meio">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat.</p>

                    </div>
                </div>

            </main>
            <Footer />
        </>
    );



}