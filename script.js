const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado : "A IA pode ser utilizada para diagnosticar doenças?",
    alternativas: [
        {
            texto: "Sim",
            afirmaçao: "A inteligencia artificial já vem demonstrando em estudos onde algoritmos de aprendizado profundo superaram a precisão dos médicos em identificar certas condições, como câncer de pele e doenças oculares."
        },
        {
            texto:  "Não",
            afirmaçao: "A IA ainda não realiza diagnosticos de forma completamente autônoma, pois ainda requer validação e supervisão de profissionais médicos para garantir a precisão e evitar erros."
        },
    
    ]
},
{
    enunciado : "O algoritimo IA pode criar obras de arte originais?",
    alternativas: [
        {
            texto: "Sim",
            afirmaçao: "Essa habilidade já foi evidenciada por projetos como o The Next Rembrandt, onde uma IA analisou o estilo de Rembrandt e criou uma nova pintura em sua tendencia, além de gerar músicas e poesias que têm sido reconhecidas por sua criatividade."
        },
        {
            texto:  "Não",
            afirmaçao: "Não desenvolvem obras que sejam indistinguíveis das criadas por humanos, pois, apesar da criatividade técnica, muitas vezes faltam nuances emocionais e contextuais que caracterizam a arte humana."

        },
        
    ]
},
{
    enunciado : "A IA pode substituir completamente os professores em salas de aula?",
    alternativas: [
        {
            texto: "Sim",
            afirmaçao: "Os profissionais vem sendo substituidos em algumas tarefas específicas, como tutoria online e ensino de matérias básicas, demonstrado por plataformas educacionais que usam- na para personalizar o aprendizado dos estudantes."
        },
        {
           texto: "Não",
           afirmaçao: " Estudos indicam que a interação humana, a empatia e a capacidade de adaptação dos professores são essenciais para o desenvolvimento educacional e emocional dos alunos, algo que a IA ainda não consegue replicar totalmente."
        },
        
    ]
}

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
        const afirmaçao = opcaoSelecionada.afirmaçao;
        historiaFinal += afirmaçao + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049 ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();