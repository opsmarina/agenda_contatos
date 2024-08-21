const form = document.getElementById('form-contatos');
let linhas = '';
const telefones = [];
const contatos = [];




form.addEventListener('submit', function(e) {
    e.preventDefault();
    AdicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function AdicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contatos.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    } else {
    contatos.push(inputNomeContato.value);
    telefones.push(inputNomeContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha
    }
    inputNomeContato.value ='';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}



