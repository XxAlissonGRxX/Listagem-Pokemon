const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
console.log(body);

const ImagemBotaoAlterarTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {

        ImagemBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png")
    } else {

        ImagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png")
    }

});
