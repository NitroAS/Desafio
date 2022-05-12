import React, { useEffect, useState } from "react";
import '../../Assets/CSS/genero.css';
import Theater from '../../Assets/img/theater 1.png'
import { Header } from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";
import { apiDesafio } from "../../Services/api";
import { ModalGenero } from "../../Assets/ModalGenero/ModalGenero"
import Swal from 'sweetalert2'


let propsGenero: any = {
    description: 'Cadastre os gêneros dos filmes',
    
}
export const Genero = (): JSX.Element => {
    
    const [pegarId , setPegarId] = useState(0)
    const [modalGenero, SetModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual:any , idGeneros:number ) =>
    {
        if(estadoAtual === 'hide')
        {
            SetModal('show')
        }
        else
        {
            SetModal('hide')
        }
        
        setPegarId (idGeneros)  
        window.scroll({top: 
            100,left: 0,behavior: 'smooth'});
    }
    //    CRUDE

    // Listar,Cadastrar , Delete , Edita 

    // State = generos = constante, ele mudar não a constante 
    const [generos, setGeneros] = useState<any[]>([]);

    const PegandoGeneros = () => {

        apiDesafio.get('Genre')
            .then(resultado => {
                setGeneros(resultado.data)

            })

    }

    useEffect(() => {

        PegandoGeneros()

    }, [])


    const Excluir = (id: any) => {
        if (window.confirm('Deseja realmente excluir o genero?')) {
            apiDesafio.delete(`Genre/${id}`)
                .then(() => {
                    window.location.reload()

                })
        }


    }

    const [nomeGenre, setNomeGeneros] = useState<any>('');
    const Cadastrar = () => {
        
           if (nomeGenre !== '')
           {
               apiDesafio.post(`Genre`, { NomeGenre : nomeGenre })
               
               .then(() => {
                   
                   setNomeGeneros('')
                   
               })
       
               .then(() => {
                   window.location.reload()
               })
           }

           else{
            Swal.fire({
                title: 'Preencha o campo vazio primeiro',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#F6511D',
                cancelButtonColor: '#41B8D2',
                confirmButtonText: 'OK'
            })
           }
        
    }

    return (
        <>
            <Header objeto={propsGenero} />

            <main>
                <h1 className="generoGenero">Gênero</h1>

                <img src={Theater} alt="Logo do Gênero" className="logoGenero " />

                <div className="cadastroGenero">
                    <div>
                        <label className="labelGenero">Cadastrar Gênero</label>
                        <input
                            type="text"
                            placeholder="Gênero"
                            className="inputGenero"
                            value={nomeGenre}
                            onChange={(estadoDoInput) => setNomeGeneros(estadoDoInput.target.value)}
                            maxLength={15} />
                    </div>

                    <div>
                        <button className="btnGeneroSalvar" onClick={() => Cadastrar()} >Salvar</button>
                    </div>
                </div>

                {/* CHAMANDO A API DE GENEROS */}
             
                <ModalGenero info="X" mostrar={modalGenero} funcao={AbrirFecharModal} idGenero={pegarId}/>
                {generos.map((item): any => {
                    
                    return (

                        <div className="mapAlinhamento">
                            <div className="pMap">

                                <p>{item.NomeGenre}</p>
                            </div>


                            <div className="divDosBtnCima">
                                <button className="btnEditarGenero" onClick={() => AbrirFecharModal(modalGenero, item.idGeneros)  }>Editar</button>
                                <button className="btnExcluirGenero" onClick={() => Excluir(item.idGeneros)} >Excluir</button>
                            </div>

                        </div>
                    )
                })}
            </main>
            <Footer />
        </>
    );
}
// limitar para n usar o mesmo nome - extra