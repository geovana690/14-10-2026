const botoes = document.querySelectorAll(".poll-button");
const resultado = document.querySelector("#poll-result");

const reflexoes = {
    sim: "A IA pode economizar tempo, mas deixar que ela faça tudo pode impedir você de praticar e aprender. Facilidade não é sempre sinônimo de aprendizado.",

    nao: "Ótimo ponto! Resolver tarefas por conta própria ajuda a desenvolver autonomia. Ainda assim, a IA pode ser útil para explicar dúvidas e sugerir caminhos.",

    depende: "O equilíbrio é fundamental! A IA pode ajudar em algumas etapas, mas compreender o conteúdo, conferir as respostas e desenvolver suas próprias ideias continua sendo essencial."
};

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const resposta = botao.dataset.answer;

        botoes.forEach((item) => {
            item.classList.remove("selected");
            item.setAttribute("aria-pressed", "false");
        });

        botao.classList.add("selected");
        botao.setAttribute("aria-pressed", "true");

        resultado.textContent = reflexoes[resposta];
    });
});

botoes.forEach((botao) => {
    botao.setAttribute("aria-pressed", "false");
});

console.log("Projeto sobre o excesso de IA carregado com sucesso!");
