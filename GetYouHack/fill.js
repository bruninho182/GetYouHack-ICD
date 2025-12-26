function preencherCamposVenda(dados) {
    if (!dados) return;
    const nomesCampos = ['sAge_Nome', 'sAge_Email', 'sAge_CPF', '_sVen_Cartao'];
    const valores = [dados.nome, dados.email, dados.gyg, dados.gyg];

    nomesCampos.forEach((nome, i) => {
        const el = document.getElementsByName(nome)[0];
        if (el) {
            el.value = valores[i];
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
}

// Escuta o comando vindo do background.js (SEM F5)
chrome.runtime.onMessage.addListener((request) => {
    if (request.acao === "DADOS_PRONTOS") {
        preencherCamposVenda(request.dados);
    }
});

// Preenche se a página for aberta depois
chrome.storage.local.get("dadosPedido", (result) => {
    if (result.dadosPedido) preencherCamposVenda(result.dadosPedido);
});

// Botão de e-mail
if (!document.getElementById('btn-abrir-mail')) {
    const btn = document.createElement("button");
    btn.id = 'btn-abrir-mail';
    btn.innerText = "📩 Abrir Webmail Locaweb";
    btn.style = "position:fixed;bottom:20px;right:20px;z-index:9999;padding:15px;background:#612d87;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:bold;";
    btn.onclick = () => window.open("https://webmail-seguro.com.br/?_task=mail&_action=compose", "_blank");
    document.body.appendChild(btn);
}