function preencherFormulario() {
    // Verifica se a extensão ainda é válida para evitar o erro de contexto
    if (!chrome.runtime?.id) return;

    chrome.storage.local.get("dadosPedido", (result) => {
        if (!result.dadosPedido) return;
        
        const d = result.dadosPedido;

        // Lista de campos e seus respectivos nomes técnicos no HTML
        const campos = [
            { id: 'nome', valor: d.nome },
            { id: 'email', valor: d.email },
            { id: 'cpf', valor: d.gyg },
            { id: '_sVen_Cartao', valor: d.gyg } // Campo 15 confirmado
        ];

        campos.forEach(campo => {
            const el = document.getElementsByName(campo.id)[0];
            if (el && (el.value === "" || el.value !== campo.valor)) {
                el.value = campo.valor;
                // Dispara um evento de 'input' para o site entender que houve mudança
                el.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
}

// Executa repetidamente a cada 1 segundo para garantir que os dados não sumam
const intervalId = setInterval(preencherFormulario, 1000);

// Para economizar memória, para de tentar preencher após 10 segundos
setTimeout(() => clearInterval(intervalId), 10000);

// Também executa quando você volta para a aba
window.addEventListener('focus', preencherFormulario);function preencherCampos() {
    if (!chrome.runtime?.id) return;

    chrome.storage.local.get("dadosPedido", (result) => {
        if (!result.dadosPedido) return;
        const d = result.dadosPedido;

        // Mapeamento baseado nos prints do código-fonte
        const campos = [
            { nome: 'sAge_Nome', valor: d.nome },      // Campo 2
            { nome: 'sAge_Email', valor: d.email },    // Campo 4
            { nome: 'sAge_CPF', valor: d.gyg },        // Campo 3
            { nome: '_sVen_Cartao', valor: d.gyg }     // Campo 15
        ];

        campos.forEach(c => {
            const el = document.getElementsByName(c.nome)[0];
            if (el) {
                el.value = c.valor;
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
    });
}

// Tenta preencher ao carregar e ao focar na aba
preencherCampos();
window.addEventListener('focus', preencherCampos);

// Executa um pequeno loop para garantir que o site não apague os dados
const seguranca = setInterval(preencherCampos, 2000);
setTimeout(() => clearInterval(seguranca), 10000);