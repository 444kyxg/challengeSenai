class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {
    event.preventDefault();

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    console.log("Objeto criado:", data);

    alert(
        "Obrigado(a), " +
        data.nome +
        "! Seus dados foram enviados com sucesso."
    );

    form.reset();
}
