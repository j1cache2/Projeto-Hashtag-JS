const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));

    for (const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
    }
}

function escoderMasculinos() {
    exibirTodos();
    const produtosMasculinos = Array.from(catalogoProdutos.getElementsByClassName("masculino"));

    for (const produto of produtosMasculinos) {
        produto.classList.add("hidden");
    }
}

function escoderFemininos() {
    exibirTodos();
    const produtosFemininos = Array.from(catalogoProdutos.getElementsByClassName("feminino"));

    for (const produto of produtosFemininos) {
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros() {
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    document.getElementById("exibir-masculinos").addEventListener("click", escoderFemininos);
    document.getElementById("exibir-femininos").addEventListener("click", escoderMasculinos);
}