import React from "react";

export default function Rodape(props) {
    let { arrPergEResp, comunicador, mostrarQualTela } = props;
    const [iconesProgresso, setIconesProgresso] = React.useState([])
    comunicador.comunica = (valor) => {
        setIconesProgresso([...iconesProgresso, valor])
    }
    return (
        <>
            <ProgressoIcones iconesProgresso={iconesProgresso} arrPergEResp={arrPergEResp} mostrarQualTela={mostrarQualTela} />
        </>
    )
}

function ProgressoIcones(props) {
    let { iconesProgresso, arrPergEResp, mostrarQualTela } = props
    let arr = [];
    for (let texto of iconesProgresso) {
        if (texto === "nao lembrei") {
            arr.push(<ion-icon name="close-circle"></ion-icon>)
        } else if (texto === "qse nao lembrei") {
            arr.push(<ion-icon name="help-circle" ></ion-icon>)
        } else {
            arr.push(<ion-icon name="checkmark-circle" ></ion-icon>)
        }
    }
    if (arr.length < arrPergEResp.length) {
        return (<>
            <h1> {iconesProgresso.length} / {arrPergEResp.length} CONCLUÍDO </h1>
            <div className="incone-progresso"> {arr} </div>
        </>
        )

    } else {
        if (iconesProgresso.includes("nao lembrei")) {
            return (
                <>
                    <div className="emoticon-final">
                        <img src="recursos/sad.png" alt="emoticos triste" />
                        <h1> PUTZ!</h1>
                    </div>
                    <p className="paragrafo-resultado-final" > Ainda faltaram alguns... Mas não desanime! </p>
                    <div className="incone-progresso"> {arr} </div>
                    <button className="botao-reiniciar" onClick={() => mostrarQualTela(0)} >REINICIAR RECALL</button>

                </>
            )
        } else {
            return (
                <>
                    <div className="emoticon-final">
                        <img src="recursos/party.png" alt="emoticos feliz" />
                        <h1> PARABENS !</h1>
                    </div>

                    <p className="paragrafo-resultado-final"> Você não esqueceu de nenhum flashcard! </p>
                    <div className="incone-progresso"> {arr} </div>
                    <button className="botao-reiniciar" onClick={() => mostrarQualTela(0)} >REINICIAR RECALL</button>
                </>
            )
        }
    }
}
