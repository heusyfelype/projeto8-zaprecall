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
    return (
        arrPergEResp.map(objeto => {
            contador++
            return (<Pergunta 
                arrPergEResp={arrPergEResp} 
                contador={contador} />
            )
        })
    )
}

function Pergunta(props) {
    let { arrPergEResp, contador} = props;
    
    function transformarCards(valorMostrarCard) {
        return (
            <div className="pergunta">
                <CadaCard 
                arrPergEResp={arrPergEResp} 
                contador={contador}/>
            </div>
        )
    }
    let valorMostrarCard = 0;
    return (transformarCards(valorMostrarCard))
}

function CadaCard(props) {
    let {arrPergEResp, contador} = props;
    console.log("contador: " + contador) 
    const [mostrarCard, setMostrarCard] = React.useState(0);

    function abrirPergunta(valor) {
        setMostrarCard(mostrarCard + valor)
    }

    switch (mostrarCard) {
        case 0: return (
            <>
                <h1>Pergunta {contador} </h1>
                <ion-icon name="play-outline" onClick={() => { abrirPergunta(1); }} ></ion-icon>
            </>
        );
        case 1: return (
            <>
                <h1 onClick={() => { abrirPergunta(1); }} > {arrPergEResp[contador-1].pergunta} </h1>
            </>
        );
        case 2: return (
            <>
                <h1 onClick={() => { abrirPergunta(2); }} > {arrPergEResp[contador-1].resposta} </h1>
            </>
        );
    }
}