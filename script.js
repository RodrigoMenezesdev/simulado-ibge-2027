let indiceAtual = 0;
let pontuacao = 0;
let questoesAtivas = [];

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function iniciarSimulado(topicoId) {
    if (typeof bancoQuestoes !== "undefined" && bancoQuestoes[topicoId] && bancoQuestoes[topicoId].length > 0) {
        questoesAtivas = [...bancoQuestoes[topicoId]];
        embaralhar(questoesAtivas);

        document.getElementById("menu-container").style.display = "none";
        document.getElementById("quiz-conteudo").style.display = "block";

        indiceAtual = 0;
        pontuacao = 0;
        carregarQuestao();
    } else {
        alert("Ainda não há questões cadastradas para este tópico no momento.");
    }
}

const questaoContainer = document.getElementById("questao-container");
const opcoesContainer = document.getElementById("opcoes-container");
const feedbackDiv = document.getElementById("feedback");
const proximoBtn = document.getElementById("proximo-btn");
const voltarBtn = document.getElementById("voltar-btn");
const progressoDiv = document.getElementById("progresso");

function carregarQuestao() {
    feedbackDiv.style.display = "none";
    feedbackDiv.className = "";
    feedbackDiv.innerHTML = "";
    proximoBtn.style.display = "none";
    opcoesContainer.innerHTML = "";

    if (indiceAtual > 0) {
        voltarBtn.style.display = "block";
    } else {
        voltarBtn.style.display = "none";
    }

    const q = questoesAtivas[indiceAtual];
    progressoDiv.innerText = `Questão ${indiceAtual + 1} de ${questoesAtivas.length}`;
    questaoContainer.innerText = q.pergunta;

    q.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.classList.add("opcao-botao");
        botao.innerText = opcao;
        botao.onclick = () => selecionarResposta(index, q.resposta, q.explicacao);
        opcoesContainer.appendChild(botao);
    });
}

function selecionarResposta(indiceEscolhido, indiceCorreto, explicacao) {
    const botoes = document.querySelectorAll(".opcao-botao");

    botoes.forEach(b => b.disabled = true);
    feedbackDiv.style.display = "block";

    if (indiceEscolhido === indiceCorreto) {
        botoes[indiceEscolhido].style.backgroundColor = "#d4edda";
        botoes[indiceEscolhido].style.borderColor = "#c3e6cb";
        feedbackDiv.className = "feedback-correto";
        feedbackDiv.innerHTML = `<strong>✅ Resposta Correta!</strong><br><br>${explicacao}`;
        pontuacao++;
    } else {
        botoes[indiceEscolhido].style.backgroundColor = "#f8d7da";
        botoes[indiceEscolhido].style.borderColor = "#f5c6cb";
        
        botoes[indiceCorreto].style.backgroundColor = "#d4edda";
        botoes[indiceCorreto].style.borderColor = "#c3e6cb";

        feedbackDiv.className = "feedback-incorreto";
        feedbackDiv.innerHTML = `<strong>❌ Resposta Incorreta.</strong> A alternativa correta era a <strong>${String.fromCharCode(65 + indiceCorreto)}</strong>.<br><br>${explicacao}`;
    }

    proximoBtn.style.display = "block";
}

function proximaQuestao() {
    indiceAtual++;
    if (indiceAtual < questoesAtivas.length) {
        carregarQuestao();
    } else {
        progressoDiv.innerText = "SIMULADO CONCLUÍDO!";
        questaoContainer.innerText = `Parabéns por concluir! Você acertou ${pontuacao} de ${questoesAtivas.length} questões deste tópico.`;
        opcoesContainer.innerHTML = "";
        
        // Exibe uma mensagem de otimismo no lugar do feedback antigo
        feedbackDiv.style.display = "block";
        feedbackDiv.className = "feedback-correto";
        feedbackDiv.innerHTML = `<strong>🌟 Excelente dedicação!</strong><br><br>Continue firme nos estudos e na leitura do PDF. Cada simulado concluído é um passo a mais rumo à sua aprovação no IBGE! 🚀`;

        proximoBtn.style.display = "none";
        voltarBtn.style.display = "none";
    }
}

function voltarQuestao() {
    if (indiceAtual > 0) {
        indiceAtual--;
        carregarQuestao();
    }
}

function sairSimulado() {
    if (confirm("Deseja realmente sair e voltar ao menu principal?")) {
        window.location.reload();
    }
}
