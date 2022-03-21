export default function TelaInicial(props) {
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