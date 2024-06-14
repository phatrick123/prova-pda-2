document.querySelector("#nome").addEventListener("change", lerNome);

document.getElementById('agilidade').addEventListener('input', atualizarDefesa);
document.getElementById('armadura').addEventListener('input', atualizarDefesa);

document.getElementById('nivel').addEventListener('input', atualizarPoder);
document.getElementById('forca').addEventListener('input', atualizarPoder);

// Função para adicionar sufixo ao nome com base no nível
function lerNome() {
    var nome = document.getElementById("nome");
    var nivel = document.getElementById("nivel");

    // Remove sufixos existentes
    nome.value = nome.value.replace("{iniciante}", "").replace("{veterano}", "");

    // Adiciona o sufixo apropriado
    if (nivel.value <= 4) {
        nome.value += "{iniciante}";
    } else if (nivel.value >= 5) {
        nome.value += "{veterano}";
    }
}

// Função para atualizar a defesa
function atualizarDefesa() {
    var agilidade = parseInt(document.getElementById("agilidade").value) || 0;
    var armadura = parseInt(document.getElementById("armadura").value) || 0;
    var defesa = document.getElementById("defesa");

    // Atualiza o valor do campo de defesa
    defesa.value = agilidade + armadura;
}

// Função para atualizar o poder de ataque
function atualizarPoder() {
    var nivel = parseInt(document.getElementById("nivel").value) || 0;
    var forca = parseInt(document.getElementById("forca").value) || 0;
    var poder = document.getElementById("poder");

    // Calcula o valor do poder de ataque
    poder.value = ((forca - 10) / 2) + (nivel / 2);
}
