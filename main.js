const form = document.getElementById('form-cadastro');

const inputNomeCadastro = document.getElementById('nome-cadastro');
const inputTelCadastro = document.getElementById('tel-cadastro');
const inputEmailCadastro = document.getElementById('email-cadastro');

let linhas = '';
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();

    const mensagemSucesso = `Contato de ${inputNomeCadastro.value} efetuado com sucesso`;

    formEValido = validaNome(inputNomeCadastro.value)
    if(formEValido) {
        const mensagemDeSucesso = document.querySelector('.success-message');
        mensagemDeSucesso.innerHTML = mensagemSucesso;
        mensagemDeSucesso.style.display = 'block';

        inputNomeCadastro.value = '';   
        inputTelCadastro.value = '';
        inputEmailCadastro.value = '';
    }else{
        inputNomeCadastro.style.border = '1px solid red';
        document.querySelector('.error-campo').style.display='block';
    }
    
});

inputNomeCadastro.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        inputNomeCadastro.classList.add('error');
        document.querySelector('.error-campo').style.display='block';
    } else {
        inputNomeCadastro.classList.remove('error');
        document.querySelector('.error-campo').style.display= 'none';
    }

});

function adicionaLinha() {

    let linha = '<tr>';
    linha += `<td>${inputNomeCadastro.value}</td>`;
    linha += `<td>${inputTelCadastro.value}</td>`;
    linha += `<td>${inputEmailCadastro.value}</td>`
    linha += '</tr>';

    linhas += linha;

}
function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}