// Obtenha todos os botões "shiny"
const shinyButtons = document.querySelectorAll("[id^=shiny-button]");

// Para cada botão "shiny", adicione um ouvinte de evento
shinyButtons.forEach((button) => {
  // Obtenha o número do botão "shiny" a partir do atributo id
  const buttonNumber = button.id.replace("shiny-button", "");

  // Obtenha os elementos correspondentes
  const imgShiny = document.querySelector(`.a${buttonNumber}`);
  const imgGif = document.querySelector(`.g${buttonNumber}`);

  // Adicione o ouvinte de evento para cada botão
  button.addEventListener("click", () => {
    if (imgShiny.classList.contains("shiny")) {
      imgShiny.classList.remove("shiny");
      imgShiny.setAttribute("src", "./src/imagens/notshiny.png");
      imgGif.setAttribute("src", `./src/imagens/${buttonNumber}.png`);
    } else {
      imgShiny.classList.add("shiny");
      imgShiny.setAttribute("src", "./src/imagens/shiny.png");
      imgGif.setAttribute("src", `./src/imagens/${buttonNumber}shiny.png`);
    }
  });
});