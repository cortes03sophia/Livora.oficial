const cadastrarUsuario = () => {

    const listaRecuperada = JSON.parse(
        localStorage.getItem("usuarios") || '[]'
    );

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;
    const rg = document.getElementById("rg").value;
    const cpf = document.getElementById("cpf").value;
    const endereco = document.getElementById("endereco").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const pais = document.getElementById("pais").value;
    const nascimento = document.getElementById("nascimento").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais!");
        return;
    }

    const novaLista = [
        ...listaRecuperada,
        {
            nome: nome,
            email: email,
            senha: senha,
            confirmarSenha: confirmarSenha,
            rg: rg,
            cpf: cpf,
            endereco: endereco,
            cep: cep,
            cidade: cidade,
            estado: estado,
            pais: pais,
            nascimento: nascimento
        }
    ];

    localStorage.setItem(
        "usuarios",
        JSON.stringify(novaLista)
    );

    alert("Cadastro realizado com sucesso!");

    window.location.href = "./Login.html";
};


document.getElementById("formCadastro").addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        cadastrarUsuario();

    }
);