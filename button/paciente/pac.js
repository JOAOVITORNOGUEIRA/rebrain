// pac.js

// Função para exibir o formulário de redefinição de senha e ocultar o de login
function showResetPasswordForm() {
    document.querySelector('.login-box').style.display = 'none';
    document.querySelector('.reset-password-box').style.display = 'block';
}

// Função para redefinir a senha (a ser implementada com validações)
function resetPassword() {
    // Implemente a lógica de redefinição de senha aqui
    alert('Redefinir senha: Implemente a lógica aqui');
}

// Adicionando um ouvinte de eventos ao link "Você esqueceu sua senha?"
document.getElementById('forgotPasswordLink').addEventListener('click', showResetPasswordForm);
