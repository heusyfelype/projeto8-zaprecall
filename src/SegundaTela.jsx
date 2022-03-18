import React from "react";
import Perguntas from "./Perguntas"

export default function SegundaTela() {
    return (
        <>
            <div className="logo-pequena">
                <img src="/recursos/logo-pequeno.png" alt="logo pequena" />
                <span>ZapRecall</span>
            </div>

            <section className="deck-de-perguntas">
                <PerguntasMap />
            </section>

            <footer>
                <div> 0/4 CONCLUÍDOS </div>
            </footer>
        </>
    )
}

function PerguntasMap() {
    const arrPergEResp = Perguntas();
    let contador = 0;

    const [index, setIndex] = React.useState(0)
    function aumentarIndex() {
        setIndex(index + 1)
    }
    let indice = 0;

    return (
        arrPergEResp.map(objeto => {
            contador++
            return (<Pergunta arrPergEResp={arrPergEResp} contador={contador} aumentarIndex={aumentarIndex} index={index} indice={indice} />
            )
        })
    )
}

function Pergunta(props) {
    let { arrPergEResp, contador, aumentarIndex, index, indice } = props;
    const [mostrarCard, setMostrarCard] = React.useState(0);

    console.log(arrPergEResp, "index: " + index, "INDICE: " + indice)


    function abrirPergunta(valor) {
        setMostrarCard(1)
        indice = indice + 1
    }

    function transformarCards(valorMostrarCard) {
        switch (valorMostrarCard) {
            case 0: return (
                <div className="pergunta">
                    <h1>Pergunta {contador} </h1>
                    <ion-icon name="play-outline" onClick={() => { abrirPergunta(1); aumentarIndex(); }} ></ion-icon>
                </div>
            );
            case 1: return (
                <div className="pergunta">
                    <h1> {arrPergEResp[index].pergunta} </h1>
                </div>
            );
        }
    }


    return (transformarCards(mostrarCard)
        /*
            A ideia aqui é adicionar um onclick no ion icon
            quando clicado ele altera um contador, usando a tecnca do useState.
            isso esonde o h1 e o ion-icon, dps mostra a frente do card
            ao clicar pra virar o card, a frente volta a ser escondida e o verso é mostrado
        */
    )
}