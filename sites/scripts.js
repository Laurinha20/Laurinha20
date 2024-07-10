document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (!nome || !email || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonePattern = /^\d{10,15}$/;

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }

    if (!telefonePattern.test(telefone)) {
        alert('Por favor, insira um número de telefone válido (apenas números, entre 10 e 15 dígitos).');
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Dados recebidos:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
    `;
});
