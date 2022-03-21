import React from "react";
import SegundaTela from "./SegundaTela";
import TelaInicial from "./TelaInicial";

export default function Telas() {
    const [contadorTela, setContadorTela] = React.useState(0)
    function mostrarQualTela(valor) {
        setContadorTela(valor)
    }
    return (contadorTela === 0 ? <TelaInicial mostrarQualTela={mostrarQualTela} /> : <SegundaTela mostrarQualTela={mostrarQualTela} /> );
}