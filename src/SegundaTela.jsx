import Perguntas from "./Perguntas"

export default function SegundaTela(){
    return(
        <>
            <div className="logo-pequena">
                <img src="/recursos/logo-pequeno.png" alt="logo pequena" />
                <span>ZapRecall</span>
            </div>

            <section className="deck-de-perguntas">
                <PerguntasMap/>
            </section>

            <footer>
                <div> 0/4 CONCLUÍDOS </div>
            </footer>
        </>
    )
}

function PerguntasMap(){
    const arrPergEResp = Perguntas();
    let contador = 0;
    return(
        arrPergEResp.map( objeto => {
            contador++
            return(
                <div className="pergunta">
                    <h1>Pergunta {contador} </h1>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            )
        }

        )
    )
}