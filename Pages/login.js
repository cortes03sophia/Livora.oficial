const validarLogin = () => {

    const emailDigitado = document.getElementById('inputLogin').value;
    const senhaDigitada = document.getElementById('inputSenha').value;

    const usuariosSalvos = JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

    const usuarioEncontrado = usuariosSalvos.find(
        (user) => user.email === emailDigitado && user.senha === senhaDigitada
    );

    if (usuarioEncontrado) {

        console.log(
            "Login realizado com sucesso! Bem-vindo, " + usuarioEncontrado.nome
        );

        window.location.href = '../index.html';

    } else {

        alert("E-mail ou senha incorretos.");

    }
};


document.getElementById("formLogin").addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        validarLogin();

    }
);