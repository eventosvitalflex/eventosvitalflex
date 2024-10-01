function realizarCadastro() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagemCadastro = document.getElementById('mensagemCadastro');

    // Simulação de envio dos dados para a base de dados
    if (nome && telefone && email) {
        mensagemCadastro.innerText = 'Cadastro realizado com sucesso!';
        mensagemCadastro.style.color = 'green';
    } else {
        mensagemCadastro.innerText = 'Preencha todos os campos!';
        mensagemCadastro.style.color = 'red';
    }
}
