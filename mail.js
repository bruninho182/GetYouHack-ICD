function preencherEmail() {
    chrome.storage.local.get("dadosPedido", (result) => {
        if (!result.dadosPedido) return;
        const d = result.dadosPedido;

        const campoPara = document.querySelector('input[name="_to"], textarea[name="_to"]');
        const campoAssunto = document.querySelector('input[name="_subject"]');

        if (campoPara) campoPara.value = d.email;
        if (campoAssunto) campoAssunto.value = `${d.gyg} - ${d.nome}`;

        const mensagemHtml = `Dear visitor,<br><br>Thank you for choosing us!<br><br>Your coupon is attached to this email.<br><br>We hope you enjoy your visit!<br><br>If something prevents you from visiting on your chosen date or time, you can reschedule your tickets by replying to this email or the service channels below:<br><br>WhatsApp: +5511934951053<br>Phone: +551139390435 / +552140633003<br><br>We are at your disposal!<br><br>Best regards,<br><br>`;

        const iframe = document.getElementById('composebody_ifr') || document.querySelector('iframe');
        if (iframe && iframe.contentDocument) {
            const corpo = iframe.contentDocument.body;
            if (!corpo.innerHTML.includes("Thank you for choosing us!")) {
                corpo.innerHTML = mensagemHtml + corpo.innerHTML;
                // LIMPA MEMÓRIA APÓS USO NO EMAIL
                chrome.storage.local.remove("dadosPedido");
            }
        }
    });
}
setTimeout(preencherEmail, 3000);