function extrairDados() {
    const codigoGYG = document.body.innerText.match(/GYG[A-Z0-9]+/)?.[0] || "";
    const leadTravelerLabel = Array.from(document.querySelectorAll('span, div, b, td'))
                                   .find(el => el.innerText.trim() === "Lead traveler");
    
    let nomeCompleto = "";
    if (leadTravelerLabel) {
        nomeCompleto = leadTravelerLabel.parentElement.innerText
            .replace("Lead traveler", "").split('(')[0].trim();
    }

    const emailMatch = document.body.innerText.match(/customer-[\w.-]+@[\w.-]+/);
    const email = emailMatch ? emailMatch[0] : "";

    chrome.storage.local.set({ 
        dadosPedido: { nome: nomeCompleto, email: email, gyg: codigoGYG } 
    }, () => {
        alert(`✅ Capturado!\nNome: ${nomeCompleto}\nCódigo: ${codigoGYG}`);
    });
}

if (!document.getElementById('btn-copy-gyg')) {
    const btn = document.createElement("button");
    btn.id = 'btn-copy-gyg';
    
    // Pega o caminho da logo que você colocou na pasta
    const logoUrl = chrome.runtime.getURL("logo.png");
    
    btn.innerHTML = `
        <img src="${logoUrl}" style="width:34px; height:34px; vertical-align:middle; margin-right:10px; border-radius:4px;">
        <span style="vertical-align:middle;">COPIAR PARA INGRESSO</span>
    `;

    // Estilo do botão (ajustei para flex para alinhar melhor a logo e o texto)
    btn.style = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        padding: 12px 20px;
        background: #ff5a00;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        font-family: Arial, sans-serif;
        font-size: 14px;
    `;

    btn.onclick = extrairDados;
    document.body.appendChild(btn);
}