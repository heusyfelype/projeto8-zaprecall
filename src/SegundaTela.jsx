import React from "react";
import Perguntas from "./Perguntas"
import Rodape from "./Rodape";
import ProcessamentoPerguntas from "./ProcessamentoPerguntas";



export default function SegundaTela(props) {
    let { mostrarQualTela } = props
    let arrPergEResp = Perguntas();
    let comunicador = {
        comunica: () => { }
    };

    return (
        <>
            <div className="logo-pequena">
                <img src="/recursos/logo-pequeno.png" alt="logo pequena" />
                <span>ZapRecall</span>
            </div>

            <section className="deck-de-perguntas">
                <ProcessamentoPerguntas arrPergEResp={arrPergEResp} comunicador={comunicador} />
            </section>

            <footer>
                
                <Rodape arrPergEResp={arrPergEResp} comunicador={comunicador} mostrarQualTela={mostrarQualTela} />
            </footer>
        </>
    )
}