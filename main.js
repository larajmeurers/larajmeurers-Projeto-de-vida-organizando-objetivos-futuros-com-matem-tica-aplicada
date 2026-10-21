// Banco de dados contendo as histórias de cada tema
const stories = {
    // ------------------- TEMA: FANTASIA MEDIEVAL -------------------
    fantasy: {
        title: "🏰 Fantasia: A Busca pelo Cristal",
        start: {
            text: "Você é um jovem aventureiro encarregado de recuperar o Cristal do Sol roubado da vila. Você chega a uma encruzilhada na Floresta Sombria.",
            choices: [
                { text: "Seguir pelo caminho da esquerda (misterioso e escuro)", nextStep: "leftPath" },
                { text: "Seguir pelo caminho da direita (onde ouve barulho de água)", nextStep: "rightPath" }
            ]
        },
        leftPath: {
            text: "Caminhando no escuro, você se depara com um Goblin faminto bloqueando a passagem.",
            choices: [
                { text: "Lutar com sua espada", nextStep: "fightGoblin" },
                { text: "Ofertar a maçã da sua bolsa", nextStep: "befriendGoblin" }
            ]
        },
        rightPath: {
            text: "Você encontra um rio com uma ponte caindo aos pedaços e uma barcaça vazia na margem.",
            choices: [
                { text: "Atravessar a ponte cuidadosamente", nextStep: "crossBridge" },
                { text: "Usar o barco para cruzar", nextStep: "useBoat" }
            ]
        },
        fightGoblin: {
            text: "O goblin era mais rápido do que parecia! Ele foge gritando e atrai o restante do bando. Você precisou recuar para a vila sem o cristal.",
            isEnd: true,
            success: false
        },
        befriendGoblin: {
            text: "O goblin aceita a maçã radiante! Em agradecimento, ele te mostra uma passagem secreta direto para a caverna do Cristal. Você recupera o artefato e salva sua vila!",
            isEnd: true,
            success: true
        },
        crossBridge: {
            text: "A ponte quebra no meio do caminho! Você cai na correnteza e acorda na praia, sem armas e sem conserto.",
            isEnd: true,
            success: false
        },
        useBoat: {
            text: "O barco navega suavemente e o leva até a entrada da Caverna Cristalina. Lá dentro, o Cristal do Sol está intacto num pedestal. Você o resgata com sucesso!",
            isEnd: true,
            success: true
        }
    },

    // ------------------- TEMA: FICÇÃO CIENTÍFICA -------------------
    scifi: {
        title: "🚀 Sci-Fi: Deriva no Espaço",
        start: {
            text: "Você acorda do sono criogênico após o alarme da nave 'Astra' disparar. Uma falha nos motores principais foi detectada.",
            choices: [
                { text: "Ir até a Sala de Máquinas verificar os motores", nextStep: "engineRoom" },
                { text: "Ir até a Ponte de Comando checar os sistemas gerais", nextStep: "bridge" }
            ]
        },
        engineRoom: {
            text: "A sala está cheia de fumaça radiativa. Um duto de energia vazou.",
            choices: [
                { text: "Usar o selante manual no duto", nextStep: "sealLeak" },
                { text: "Ejetar o núcleo de energia afetado", nextStep: "ejectCore" }
            ]
        },
        bridge: {
            text: "O computador central pede confirmação para protocolo de emergência em um planeta desconhecido próximo.",
            choices: [
                { text: "Autorizar pouso forçado", nextStep: "landPlanet" },
                { text: "Tentar reiniciar a IA da nave", nextStep: "rebootAI" }
            ]
        },
        sealLeak: {
            text: "Você consegue selar o vazamento a tempo! A nave se estabiliza e o sistema de navegação restaura a viagem para a Terra com segurança.",
            isEnd: true,
            success: true
        },
        ejectCore: {
            text: "Sem o núcleo principal, a nave perdeu toda a energia vital. A tripulação fica à deriva no espaço.",
            isEnd: true,
            success: false
        },
        landPlanet: {
            text: "O pouso forçado danifica a nave na atmosfera, mas vocês pousam em um planeta habitável e rico em recursos. Uma nova colônia humana começa aqui!",
            isEnd: true,
            success: true
        },
        rebootAI: {
            text: "A IA entra em loop de reinicialização e trava o suporte de vida antes que você possa reverter o processo.",
            isEnd: true,
            success: false
        }
    },

    // ------------------- TEMA: MISTÉRIO & DETETIVE -------------------
    mystery: {
        title: "🕵️ Mistério: O Enigma da Mansão",
        start: {
            text: "O Lorde Blackwood foi encontrado sem vida em seu escritório trancado por dentro. Você é o detetive responsável pelo caso.",
            choices: [
                { text: "Examinar a mesa de trabalho do Lorde", nextStep: "desk" },
                { text: "Interrogar o mordomo que encontrou o corpo", nextStep: "butler" }
            ]
        },
        desk: {
            text: "Na mesa, você descobre uma xícara de chá com um cheiro estranho de amêndoas amargas e um cofre meio aberto.",
            choices: [
                { text: "Analisar o chá para veneno", nextStep: "analyzeTea" },
                { text: "Investigar os papéis dentro do cofre", nextStep: "checkSafe" }
            ]
        },
        butler: {
            text: "O mordomo parece muito nervoso e não para de olhar para o relógio de bolso.",
            choices: [
                { text: "Pressioná-lo sobre onde estava às 22h", nextStep: "interrogateFurther" },
                { text: "Pedir para ver os sapatos dele", nextStep: "checkShoes" }
            ]
        },
        analyzeTea: {
            text: "O chá continha cianeto! Você descobre que o veneno foi comprado pela sobrinha do Lorde para herdar a fortuna. Caso solucionado com maestria!",
            isEnd: true,
            success: true
        },
        checkSafe: {
            text: "Você acidentalmente aciona uma armadilha oculta no cofre que destrói todas as evidências cruciais. O crime permanece sem solução.",
            isEnd: true,
            success: false
        },
        interrogateFurther: {
            text: "O mordomo entra em pânico, confessa que ajuntou forças com o sobrinho ganancioso e entrega todos os cúmplices. Excelente trabalho!",
            isEnd: true,
            success: true
        },
        checkShoes: {
            text: "Os sapatos estão limpos, mas enquanto você se abaixou, o verdadeiro culpado escapa pela janela e desaparece na noite.",
            isEnd: true,
            success: false
        }
    }
};

// Variáveis de Estado do Jogo
let currentTheme = null;
let currentStep = "start";

// Elementos do DOM
const themeSelection = document.getElementById("theme-selection");
const storyScreen = document.getElementById("story-screen");
const endScreen = document.getElementById("end-screen");

const gameTitle = document.getElementById("game-title");
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

const endTitle = document.getElementById("end-title");
const endText = document.getElementById("end-text");

const themeButtons = document.querySelectorAll(".theme-btn");
const restartBtn = document.getElementById("restart-btn");

// Iniciar Eventos
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.getAttribute("data-theme");
        startGame(theme);
    });
});

restartBtn.addEventListener("click", resetGame);

// Função para Iniciar o Jogo com o Tema Escolhido
function startGame(theme) {
    currentTheme = theme;
    currentStep = "start";

    // Atualiza o título conforme o tema selecionado
    gameTitle.textContent = stories[currentTheme].title;

    // Transição de telas
    themeSelection.classList.add("hidden");
    endScreen.classList.add("hidden");
    storyScreen.classList.remove("hidden");

    renderStep();
}

// Renderizar a etapa atual da história
function renderStep() {
    const stepData = stories[currentTheme][currentStep];

    // Se for uma etapa final
    if (stepData.isEnd) {
        showEndScreen(stepData);
        return;
    }

    // Atualiza o texto
    storyText.textContent = stepData.text;

    // Limpa botões antigos
    choicesContainer.innerHTML = "";

    // Cria os botões das escolhas
    stepData.choices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = choice.text;
        button.addEventListener("click", () => {
            currentStep = choice.nextStep;
            renderStep();
        });
        choicesContainer.appendChild(button);
    });
}

// Tela de Fim de Jogo
function showEndScreen(endData) {
    storyScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");

    if (endData.success) {
        endTitle.textContent = "🎉 Vitória!";
        endTitle.style.color = "#4dff88";
    } else {
        endTitle.textContent = "☠️ Fim de Jogo!";
        endTitle.style.color = "#ff4d4d";
    }

    endText.textContent = endData.text;
}

// Reiniciar para a tela inicial
function resetGame() {
    currentTheme = null;
    currentStep = "start";

    gameTitle.textContent = "História Interativa";

    endScreen.classList.add("hidden");
    storyScreen.classList.add("hidden");
    themeSelection.classList.remove("hidden");
}
