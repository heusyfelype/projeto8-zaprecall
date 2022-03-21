import React from "react";

export default  function ProcessamentoPerguntas(props) {
    let { arrPergEResp, numeroRodape, comunicador } = props
    return (
        arrPergEResp.map((objeto, indice) => {
            return (<Pergunta key={indice}
                arrPergEResp={arrPergEResp}
                indice={indice}
                numeroRodape={numeroRodape}
                comunicador={comunicador}
            />
            )
        })
    )
}

function Pergunta(props) {
    let { arrPergEResp, indice, numeroRodape, comunicador } = props;
    let [classe, setClasse] = React.useState("pergunta");

    function transformarCards(valorMostrarCard) {
        return (
            <div className={classe}>
                <CadaCard
                    arrPergEResp={arrPergEResp}
                    indice={indice}
                    classe={classe}
                    setClasse={setClasse}
                    numeroRodape={numeroRodape}
                    comunicador={comunicador}
                />

            </div>
        )
    }
    let valorMostrarCard = 0;
    return (transformarCards(valorMostrarCard))
}

function CadaCard(props) {
    let { arrPergEResp, indice, classe, setClasse, comunicador } = props;
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
                <button className="estatus-da-lembranca nao-lembrei" onClick={() => { abrirPergunta(1); setClasse("pergunta"); grauDeRecordacao("nao lembrei"); comunicador.comunica("nao lembrei"); }}>Não lembrei</button>
                <button className="estatus-da-lembranca qse-nao-lembrei" onClick={() => { abrirPergunta(1); setClasse("pergunta"); grauDeRecordacao("qse nao lembrei"); comunicador.comunica("qse nao lembrei"); }}>Quase não lembrei</button>
                <button className="estatus-da-lembranca zap" onClick={() => { abrirPergunta(1); setClasse("pergunta"); grauDeRecordacao("zap"); comunicador.comunica("zap"); }}>Zap!</button>
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
            default: break
        }
        default: break
    }
}