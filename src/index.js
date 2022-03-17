import ReactDOM from "react-dom";

import TelaInicial from "./TelaInicial";
import SegundaTela from "./SegundaTela";
import CondicionarTRansicaoTela from "./CondicionarTransicaoTela";

function App() {
    return (
        <>
            <TelaInicial />
            <SegundaTela />
        </>

    )
}


ReactDOM.render(<App />, document.querySelector(".root"));


