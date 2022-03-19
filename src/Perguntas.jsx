export default function Perguntas(){
    let objt1 = {
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript",
    }
    let objt2 = {
        pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces",
    }
    let objt3 = {
        pergunta: "Componentes devem iniciar com __",
        resposta: "letra maiúscula",
    }
    let objt4 = {
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "expressões",
    }
    let objt5 = {
        pergunta: "O ReactDOM nos ajuda __ ",
        resposta: "interagindo com a DOM para colocar componentes React na mesma",
    }
    let objt6 = {
        pergunta: "Usamos o npm para __ ",
        resposta: "gerenciar os pacotes necessários e suas dependências",
    }
    let objt7 = {
        pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes",
    }
    let objt8 = {
        pergunta: "Usamos estado (state) para __ ",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente dflkjglkdsfjhlkjdfghkjfdhgdfgh kldsjhlksd jkjdsfh kljfdshk jhdkjsflhkljdsfh kljdfhgkljdhkgjdsfkgshd fkjghdfklj ghkdljfh kfdjh gklfdjh gkljdfhg kdjsfh kljdsf hgkjldsfh gkljdsfh gkjdhf",
    }
    
    let arrDeck = [objt1, objt2, objt3, objt4, objt5, objt6, objt7, objt8]
    function shuffleArray(inputArray){
        return inputArray.sort(()=> Math.random() - 0.5);
    }
    arrDeck = shuffleArray(arrDeck)
    

    return arrDeck;
}

