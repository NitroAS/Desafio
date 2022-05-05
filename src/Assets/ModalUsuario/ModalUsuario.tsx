import React from "react";
import '../../Assets/CSS/modalUsuario.css';


export const ModalUsuario = (props: any) => {

    return (

        <div className="alinhamentoModalUsuario">
            <div className={"corDoModalUsuario " + props.mostrar}>

            </div>
            <div className={"modalUsuario " + props.mostrar}>

                <div className="btnAlinhamentoModalUsuario">

                    <button className="btnModalUsuario" onClick={props.funcao}>X</button>

                </div>

                <div className="cardtxtUsuario">

                    <h1>Recadastrar</h1>

                    <div className="AlinhamentoInputModalUsuario">

                        <div className="inputUsuario1">

                            <input
                                type="text"
                                placeholder="Nome"
                                className="inputUsuarioModal1"
                            />

                        </div>
                        <div className="inputUsuario2">

                            <input
                                type="text"
                                placeholder="Email"
                                className="inputUsuarioModal2"
                            />

                        </div>
                        <div className="inputUsuario3">

                            <input
                                type="text"
                                placeholder="Telefone"
                                className="inputUsuarioModal3"
                            />

                        </div>
                        
                    
                        <div className="AlinhamentoSalvarModal">
                            <button className="btnUsuarioModalSalvar" >Salvar</button>
                        </div>
                    </div>
                </div>


                <footer className="ModalUsuarioFooter">

                </footer>
            </div>
        </div>

    );


}

export default ModalUsuario 