const buttonTheme = document.getElementById("theme");
const body = document.querySelector("body");
const imgTheme = document.querySelector(".img-button");
const searchBar = document.querySelector('.search-bar input');
const cards = document.querySelectorAll('.listagem-pokemon .card');

buttonTheme.addEventListener("click", () => {

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode")
        imgTheme.setAttribute("src", "./src/imagens/sun.png")
    }
    else {
        body.classList.add("dark-mode")
        imgTheme.setAttribute("src", "./src/imagens/moon.png")
    }
})

// Obtém a barra de pesquisa e os cards


// Adiciona um evento de digitação à barra de pesquisa
searchBar.addEventListener('input', function () {
    const termoPesquisa = searchBar.value.toLowerCase();

    // Itera sobre os cards e verifica se o termo de pesquisa corresponde ao nome do Pokémon
    cards.forEach(card => {
        const nomePokemon = card.querySelector('.info span:first-child').textContent.toLowerCase();
        if (nomePokemon.includes(termoPesquisa)) {
            card.style.display = 'flex'; // Exibe o card se houver correspondência
        } else {
            card.style.display = 'none'; // Oculta o card se não houver correspondência
        }
    });
});