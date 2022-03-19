import React from "react";
import Perguntas from "./Perguntas"

export default function SegundaTela() {
    let arrPergEResp = Perguntas();

    const[infoRodape, setInfoRodape] = React.useState([0,""])
    function atualizarinfoRodape(info){
        setInfoRodape([+1, info]
        )
    }

    return (
        <>
            <div className="logo-pequena">
                <img src="/recursos/logo-pequeno.png" alt="logo pequena" />
                <span>ZapRecall</span>
            </div>

            <section className="deck-de-perguntas">
                <PerguntasMap arrPergEResp = {arrPergEResp} atualizarinfoRodape={atualizarinfoRodape}/>
            </section>

            <footer>
                <div> {infoRodape[0]}/{arrPergEResp.length} CONCLUÍDOS </div>
                <Progresso infoRodape={infoRodape} />
            </footer>
        </>
    )
}


function Progresso(props){
    let { infoRodape} = props;
     switch (infoRodape[1]){
        case "nao lembrei": return("akjsdhfkjdsh ");
        case "qse nao lembrei": return("kdlsnfklashjd")
        case "zap": return("kjhfkjhdsflka")
        default : return "";
    }
}

function PerguntasMap(props) {
    let {arrPergEResp, atualizarinfoRodape} = props
    return (
        arrPergEResp.map((objeto, indice) => {
            return (<Pergunta
                arrPergEResp={arrPergEResp}
                indice={indice}
                atualizarinfoRodape={atualizarinfoRodape}
            />
            )
        })
    )
}

function Pergunta(props) {
    let { arrPergEResp, indice, atualizarinfoRodape} = props;
    let [classe, setClasse] = React.useState("pergunta");

    function transformarCards(valorMostrarCard) {
        return (
            <div className={classe}>
                <CadaCard
                    arrPergEResp={arrPergEResp}
                    indice={indice}
                    classe={classe}
                    setClasse={setClasse}
                    atualizarinfoRodape={atualizarinfoRodape}
                />

            </div>
        )
    }
    let valorMostrarCard = 0;
    return (transformarCards(valorMostrarCard))
}

function CadaCard(props) {
    let { arrPergEResp, indice, classe, setClasse, atualizarinfoRodape} = props;
    const [mostrarCard, setMostrarCard] = React.useState(0);
    const [lembranca, setLembranca] = React.useState("");

    function abrirPergunta(valor) {
        setMostrarCard(mostrarCard + valor)
    }

    function grauDeRecordacao(grau) {
        setLembranca(grau)
    }

    switch (mostrarCard) {
        case 0: return (
            <>
                <h1>Pergunta {indice + 1} </h1>
                <ion-icon name="play-outline" onClick={() => { abrirPergunta(1); setClasse("card-amarelo") }} ></ion-icon>
            </>
        );
        case 1: return (
            <>
                <h1 className="texto"> {arrPergEResp[indice].pergunta} </h1>
                <img className="seta-virar-card" src="/recursos/setinha.png" alt="seta de virar a carta" onClick={() => { abrirPergunta(1); }} />
            </>
        );
        case 2: return (
            <>
                <h1 className="texto"> {arrPergEResp[indice].resposta} </h1>
                <button className="estatus-da-lembranca nao-lembrei" onClick={() => { abrirPergunta(1); setClasse("pergunta"); grauDeRecordacao("nao lembrei"); atualizarinfoRodape("nao lembrei") }}>Não lembrei</button>
                <button className="estatus-da-lembranca qse-nao-lembrei" onClick={() => { abrirPergunta(1); setClasse("pergunta"); grauDeRecordacao("qse nao lembrei"); atualizarinfoRodape("qse nao lembrei")  }}>Quase não lembrei</button>
                <button className="estatus-da-lembranca zap" onClick={() => { abrirPergunta(1); setClasse("pergunta"); grauDeRecordacao("zap"); atualizarinfoRodape("zap")  }}>Zap!</button>
            </>
        );
        case 3: switch (lembranca) {
            case "nao lembrei": return (
                <>
                    <h1 className="color-red tachado">Pergunta {indice + 1} </h1>
                    <ion-icon name="close-circle"></ion-icon>
                </>
            )
            case "qse nao lembrei": return (
                <>
                    <h1 className="color-orange tachado">Pergunta {indice + 1} </h1>
                    <ion-icon name="help-circle" ></ion-icon>
                </>
            )
            case "zap": return (
                <>
                    <h1 className="color-green tachado">Pergunta {indice + 1} </h1>
                    <ion-icon name="checkmark-circle" ></ion-icon>
                </>
            )
        }
    }
}