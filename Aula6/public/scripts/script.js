const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário
    const nome = form.querySelector("#nome").value;
    const email = form.querySelector("#email").value;
    const senha = form.querySelector("#senha").value;

    console.log(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);

    form.reset();

    fetch("/api/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha, isAdmin: false }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Usuário cadastrado:", data);
        })
        .catch((error) => {
            console.error("Erro ao cadastrar usuário:", error);
        });

    console.log("Usuário cadastrado com sucesso!");
})