🚀 Integrador GetYourGuide -> Ingresso com Desconto
Esta é uma extensão personalizada para o Google Chrome desenvolvida para automatizar o processo de cadastro de vendas. Ela extrai dados de reserva da plataforma GetYourGuide e preenche automaticamente o formulário na plataforma Ingresso com Desconto.

Por: Bruno Ferreira

📋 Funcionalidades
Extração Automática: Captura o Nome do Cliente, E-mail e o Código da Reserva (GYG) com um único clique.

Preenchimento Inteligente: Injeta os dados nos campos específicos:

Campo 2 (Nome): Preenche o campo sAge_Nome.

Campo 3 (CPF/Passaporte): Preenche o campo sAge_CPF com o código GYG.

Campo 4 (E-mail): Preenche o campo sAge_Email.

Campo 15 (CV): Preenche o campo \_sVen_Cartao com o código GYG.

Interface Amigável: Adiciona um botão flutuante personalizado com a logo da empresa na página da GetYourGuide.

🛠️ Tecnologias Utilizadas
JavaScript (ES6+): Lógica de extração e manipulação de DOM.

Chrome Extension API (Manifest V3): Arquitetura da extensão.

CSS3: Estilização do botão de interface.

📂 Estrutura de Arquivos
Plaintext

/extensao-automacao </br>
├── manifest.json # Configurações e permissões da extensão</br>
├── extract.js # Script que roda na GetYourGuide (Captura)</br>
├── fill.js # Script que roda na Ingresso com Desconto (Preenchimento)</br>
└── logo.png # Logo exibida no botão flutuante</br>

🚀 Como Instalar
Faça o download ou clone este repositório.

Abra o Google Chrome e acesse chrome://extensions/.

No canto superior direito, ative o Modo do desenvolvedor.

Clique no botão Carregar sem compactação.

Selecione a pasta onde os arquivos foram salvos.

📖 Modo de Uso
Acesse a página de uma reserva específica na GetYourGuide.

Clique no botão COPIAR PARA INGRESSO que aparecerá no canto superior direito.

Acesse (ou atualize) a página de Cadastro de Vendas.

Os campos destacados serão preenchidos automaticamente.

⚠️ Observações Técnicas
Persistência: O script de preenchimento possui um mecanismo de segurança que tenta reinjetar os dados por 10 segundos caso o site tente limpar o formulário durante o carregamento.

Erro de Contexto: Se a extensão for atualizada, é necessário fechar e abrir a aba do sistema de vendas novamente para evitar o erro Extension context invalidated.

