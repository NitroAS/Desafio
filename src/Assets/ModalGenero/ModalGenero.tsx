import React, {  useState } from "react";
import '../../Assets/CSS/modalGenero.css';
import { apiDesafio } from "../../Services/api";


export const ModalGenero = (props: any) => {


    const [nomeGenero, setNomeGenero] = useState('');

    const EditarGenero = (idGeneros: number) => {
        apiDesafio.put(`Genre/${idGeneros}`, { NomeGenre: nomeGenero })

        .then(() => {
            window.location.reload()
        })

    }

    return (

        <div className="alinhamentoModalGenero">
            <div className={"corDoModalGenero " + props.mostrar}>

            </div>
            <div className={"modalGenero " + props.mostrar}>

                <div className="btnAlinhamentoModalGenero">

                    <button className="btnModalGenero" onClick={props.funcao}>X</button>

                </div>

                <div className="cardtxtGenero">

                    <h1>Recadastrar Gênero</h1>

                    <div className="AlinhamentoInputModal">

                        <input
                            type="text"
                            placeholder="Gênero"
                            className="inputGeneroModal"
                            defaultValue={nomeGenero}
                            onChange={(e) => setNomeGenero(e.target.value)}
                            
                        />
                        <div className="AlinhamentoSalvarModal">
                            <button className="btnGeneroModalSalvar" onClick={() => EditarGenero(props.idGenero)} >Salvar</button>
                        </div>
                    </div>
                </div>


                <footer className="ModalGeneroFooter">

                </footer>
            </div>
        </div>


    );


}

export default ModalGenero 