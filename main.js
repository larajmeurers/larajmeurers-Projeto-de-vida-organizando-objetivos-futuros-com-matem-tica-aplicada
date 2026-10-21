// Função para Iniciar o Jogo com o Tema Escolhido
function startGame(theme) {
    currentTheme = theme;
    currentStep = "start";

    gameTitle.textContent = stories[currentTheme].title;

    themeSelection.classList.add("hidden");
    endScreen.classList.add("hidden");
    storyScreen.classList.remove("hidden");

    renderStep();
}

// Renderizar a etapa atual da história
function renderStep() {
    const stepData = stories[currentTheme][currentStep];

    if (stepData.isEnd) {
        showEndScreen(stepData);
        return;
    }

    storyText.textContent = stepData.text;
    choicesContainer.innerHTML = "";

    stepData.choices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = choice.text;
        button.addEventListener("click", // Função para Iniciar o Jogo com o Tema Escolhido
function startGame(theme) {
    currentTheme = theme;
    currentStep = "start";

    gameTitle.textContent = stories[currentTheme].title;

    themeSelection.classList.add("hidden");
    endScreen.classList.add("hidden");
    storyScreen.classList.remove("hidden");

    renderStep();
}

// Renderizar a etapa atual da história
function renderStep() {
    const stepData = stories[currentTheme][currentStep];

    if (stepData.isEnd) {
        showEndScreen(stepData);
        return;
    }

    storyText.textContent = stepData.text;
    choicesContainer.innerHTML = "";

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

// =========================================================
// INICIAR EVENTOS (DEVE FICAR ABAIXO DAS FUNÇÕES)
// =========================================================
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.getAttribute("data-theme");
        startGame(theme);
    });
});

restartBtn.addEventListener("click", resetGame);() => {
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

// =========================================================
// INICIAR EVENTOS (DEVE FICAR ABAIXO DAS FUNÇÕES)
// =========================================================
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.getAttribute("data-theme");
        startGame(theme);
    });
});

restartBtn.addEventListener("click", resetGame);