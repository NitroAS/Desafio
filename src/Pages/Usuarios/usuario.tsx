import React, { useState } from "react";
import '../../Assets/CSS/usuario.css';
import { ModalUsuario } from "../../Assets/ModalUsuario/ModalUsuario"
import { Header } from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";
let propsUsuario: any = {
    description: 'Faça o Cadastro de usuários e  edite, caso necessário',
    supdescription: 'Pronto para cadastrar?'
}
export const Usuarios = (): JSX.Element => {

    const [modalUsuario, SetModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual: any) => {
        if (estadoAtual === 'hide') {
            SetModal('show')
        }
        else {
            SetModal('hide')
        }

        window.scroll({
            top:
                190, left: 0, behavior: 'smooth'
        });
    }

    return (
        <>
            <Header objeto={propsUsuario} />

            <div className="meioUsuario">
                <main>
                    <div className="alinhamentoDaMainUsuario">

                        <div className="alinhamentoCadastrar">
                            <p className="usuarios">Cadastro</p>
                        </div>

                        <div className="inputsAlinhamento">
                            <div className="padding">
                                <label className="nome">Nome
                                    <input className="inputs" type="text" name="" />
                                </label>
                            </div>

                            <div className="padding">
                                <label className="email">E-mail
                                    <input className="inputs" type="text" name="" />
                                </label>
                            </div>

                            <div className="padding">
                                <label className="telefone">Telefone
                                    <input className="inputs" type="text" name="telefone" />
                                </label>
                            </div>


                        </div>

                        <div className="alinhamentoBtn">
                            <div className="btnCadastrarAlinhamento">
                                <button className="btnCadastrar">Cadastrar</button>
                            </div>
                        </div>

                        <div className="divPai">
                            <div className="alinhamentoTotal">

                                <div>
                                    <p className="pUsuario1nome">Paulo Andre</p>
                                    <p className="pUsuario2nome">Marcos Lucio</p>
                                    <p className="pUsuario3nome">Laura Port</p>
                                </div>
                                <div className="linha2">
                                    <p className="pUsuario1">paulo@email.com</p>
                                    <p className="pUsuario2">marcos@email.com</p>
                                    <p className="pUsuario3">laura@email.com</p>
                                </div>
                                <div>
                                    <p className="pUsuario1">3349 6788</p>
                                    <p className="pUsuario2">3349 6788</p>
                                    <p className="pUsuario3">3349 6788</p>
                                </div>
                                <div>
                                </div>
                                <div className="divFilho">
                                    <div className="espacamentoBotao">

                                        <div className="espacamentoBtnEditar">
                                            <ModalUsuario info="X" mostrar={modalUsuario} funcao={AbrirFecharModal} />
                                            <button className="btnEditarUsuario" onClick={() => AbrirFecharModal(modalUsuario)} >Editar</button>
                                        </div>
                                        <div className="espacamentoBtnExcluir">
                                            <button className="btnExcluirUsuario">Excluir</button>
                                        </div>
                                    </div>
                                    <div className="espacamentoBotao">
                                        <div className="espacamentoBtnEditar">
                                            <ModalUsuario info="X" mostrar={modalUsuario} funcao={AbrirFecharModal} />
                                            <button className="btnEditarUsuario" onClick={() => AbrirFecharModal(modalUsuario)}>Editar</button>
                                        </div>
                                        <div className="espacamentoBtnExcluir">
                                            <button className="btnExcluirUsuario" onClick={() => AbrirFecharModal(modalUsuario)}>Excluir</button>
                                        </div>
                                    </div>
                                    <div className="espacamentoBotao">
                                        <div className="espacamentoBtnEditar">
                                            <ModalUsuario info="X" mostrar={modalUsuario} funcao={AbrirFecharModal} />
                                            <button className="btnEditarUsuario">Editar</button>
                                        </div>
                                        <div className="espacamentoBtnExcluir">
                                            <button className="btnExcluirUsuario">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}





