chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.acao === "DADOS_PRONTOS") {
        // Procura todas as abas abertas
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach(tab => {
                // Envia os dados para todas as abas que podem ser a do sistema de vendas
                chrome.tabs.sendMessage(tab.id, request).catch(() => {
                    // Ignora erros de abas que não têm o script instalado
                });
            });
        });
    }
});