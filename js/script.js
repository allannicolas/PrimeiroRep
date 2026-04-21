// Script principal do projeto
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    // Manipular envio do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Criar mailto link
            const mailtoLink = `mailto:allannicolas1912@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`)}`;
            
            // Abrir cliente de email
            window.location.href = mailtoLink;
            
            // Limpar formulário
            contactForm.reset();
            alert('Abrindo seu cliente de email...');
        });
    }
});
