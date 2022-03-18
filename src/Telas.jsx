import React from "react";
import SegundaTela from "./SegundaTela";

export default function Telas() {
    const [contadorTela, setContadorTela] = React.useState(0)
    function mostrarQualTela(valor) {
        setContadorTela(valor)
    }
    return (contadorTela === 0 ? <TelaInicial mostrarQualTela={mostrarQualTela} /> : <SegundaTela/> );
}



function TelaInicial(props) {
    const {mostrarQualTela} = props;

    return (
        <div className="tela-inicial">
            <div>
                <img src="recursos/logo.png" alt="logo em formato de raio" />
                <h1>ZapRecall</h1>
            </div>
            <button onClick={() => mostrarQualTela(1)}> Iniciar Recall! </button>
        </div>
    )
}