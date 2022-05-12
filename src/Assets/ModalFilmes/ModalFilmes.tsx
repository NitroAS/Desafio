
import React, { useEffect, useState } from "react";
import '../../Assets/CSS/modalFilmes.css';
import { apiDesafio } from "../../Services/api";


export const ModalFilmes = (props: any) => {

    const [generos, setGeneros] = useState<any[]>([]);

    const listarGeneros = () => {

        apiDesafio.get('Genre')
            .then(resultado => {
                setGeneros(resultado.data)

            })

    }

    useEffect(() => {
        listarGeneros()
    }, [])


    const [nomeTittle, setNomeTittle] = useState<string>('');
    const [showInput, setshowInput] =  useState(false);
    const [valorSelect, setValorSelect] = useState<string>('');


    const EditarFilmes = (idGeneros: any, idFilme: any) => {

        
        if ( valorSelect === '' || nomeTittle === '' ){
            
            setshowInput(true)
            return
        }
        
        if ( idGeneros === ''  ){
            
            idGeneros  = props.idGenero
        }
        

        else {
            
            apiDesafio.put(`Genre/${idGeneros}/TittleMove/${idFilme}`, { Tittle: nomeTittle, GenreId: valorSelect })
            .then(() => {
                window.location.reload()
                
            })
        }
    }

    return (

        <div className="alinhamentoModalFilme">
            <div className={"corDoModalFilme " + props.mostrar}>

            </div>
            <div className={"modalFilme " + props.mostrar}>

                <div className="btnAlinhamentoModalFilme">

                    <button className="btnModalFilme" onClick={props.funcao}>X</button>

                </div>

                <div className="cardtxtFilme">

                    <h1>Recadastrar Filme</h1>

                    <div className="AlinhamentoInputModalFilme">
                        <div className="inputESelect">

                            <input
                                type="text"
                                placeholder="Filme"
                                className="inputFilmeModal"
                                defaultValue={nomeTittle}
                                onChange={(e) => setNomeTittle(e.target.value)}
                                maxLength={40}
                            />
                        </div>
                        <select
                            name="generoFilmes"
                            id="GeneroFilmes"
                            className="selectFilmesModal"
                            onChange={(e) => setValorSelect(e.target.value)}>


                            <option className="option" hidden selected >Gênero</option>
                            {generos.map((item): any => {
                                return (

                                    <option
                                        className="option"
                                        value={item.idGeneros}
                                            >{item.NomeGenre}</option>

                                )
                            })
                            }

                        </select>
                    </div>
                            {
                                showInput &&
                                <div className="msgDeErroFilmes">
                                    <p className="vermelhoFilmesModal">Campo de preenchimento obrigatório!</p>
                                </div>
                            }
                    <div className="AlinhamentoSalvarModalFilme">
                        <button className="btnFilmeModalSalvar" onClick={() => EditarFilmes( valorSelect , props.idFilmes)} >Salvar</button>
                    </div>
                </div>

                <footer className="ModalFilmeFooter">

                </footer>
            </div>
        </div>

    );


}

export default ModalFilmes 