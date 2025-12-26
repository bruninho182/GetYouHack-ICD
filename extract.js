function extrairDados() {
    const codigoGYG = document.body.innerText.match(/GYG[A-Z0-9]+/)?.[0] || "";
    const elementos = Array.from(document.querySelectorAll('span, div, b, td, p'));
    const leadTravelerLabel = elementos.find(el => el.innerText.trim() === "Lead traveler");
    
    let nomeCompleto = "";
    if (leadTravelerLabel) {
        nomeCompleto = leadTravelerLabel.parentElement.innerText.replace("Lead traveler", "").split('(')[0].trim();
    }

    const emailMatch = document.body.innerText.match(/customer-[\w.-]+@[\w.-]+/);
    const email = emailMatch ? emailMatch[0] : "";

    if (nomeCompleto && codigoGYG) {
        const dados = { nome: nomeCompleto, email: email, gyg: codigoGYG };
        
        chrome.storage.local.set({ dadosPedido: dados }, () => {
            // AVISO IMEDIATO PARA OUTRAS ABAS
            try {
                chrome.runtime.sendMessage({ acao: "DADOS_PRONTOS", dados: dados });
            } catch (e) { console.log("Abas ainda não prontas."); }
            
            alert(`✅ Capturado: ${nomeCompleto}`);
        });
    } else {
        alert("⚠️ Dados não encontrados. Verifique se a página carregou totalmente.");
    }
}

function renderizarBotao() {
    if (document.getElementById('btn-copy-gyg')) return;
    const btn = document.createElement("button");
    btn.id = 'btn-copy-gyg';
    const logoUrl = chrome.runtime.getURL("logo.png");
    btn.innerHTML = `<img src="${logoUrl}" style="width:24px;height:24px;margin-right:10px;border-radius:4px;"><span>COPIAR PARA INGRESSO</span>`;
    btn.style = "position:fixed;top:100px;right:20px;z-index:9999;padding:12px 20px;background:#ff5a00;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:bold;display:flex;align-items:center;box-shadow: 0 4px 15px rgba(0,0,0,0.4);font-family: Arial;";
    btn.onclick = extrairDados;
    document.body.appendChild(btn);
}

renderizarBotao();
setTimeout(renderizarBotao, 2000);