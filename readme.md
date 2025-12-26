🚀 Integrador de Vendas: GetYourGuide -> Ingresso com Desconto
Este projeto é uma Extensão de Chrome desenvolvida para otimizar e automatizar o fluxo de trabalho entre a plataforma de fornecedores da GetYourGuide, o sistema de vendas da Ingresso com Desconto e o Webmail Locaweb.

Por: Bruno Ferreira


🎥 Como Funciona (Fluxo Automatizado)
Extração: Na página de reserva da GetYourGuide, um botão personalizado com a logo da empresa captura o Nome, E-mail e Código GYG.

Comunicação Instantânea: Através de um Service Worker (Background Script), os dados são enviados para a aba de vendas em tempo real, sem necessidade de atualizar a página (F5).

Preenchimento: O sistema de vendas recebe os dados e preenche automaticamente os campos de Nome, E-mail, CPF e CV.

E-mail Automático: Um botão flutuante permite abrir o Webmail Locaweb já com o destinatário, assunto e corpo do e-mail (em inglês) preenchidos, preservando a assinatura original.

🛠️ Tecnologias Utilizadas
JavaScript (ES6+): Lógica principal e manipulação de DOM.

Chrome Extension API (Manifest V3): Utilização de Service Workers, Storage API e Messaging API.

CSS3: Estilização de interfaces flutuantes e botões personalizados.

📂 Estrutura do Projeto
manifest.json: Configurações globais, permissões e mapeamento de scripts.

background.js: Central de mensagens que permite a comunicação entre abas sem recarregamento.

extract.js: Script injetado na GetYourGuide para captura de dados.

fill.js: Script injetado na Ingresso com Desconto para preenchimento automático.

mail.js: Script injetado no Webmail para automação da escrita do e-mail.

logo.png: Identidade visual utilizada na interface da extensão.

🚀 Como Instalar
Faça o download ou clone este repositório.

No Google Chrome, acesse chrome://extensions/.

Ative o Modo do desenvolvedor (canto superior direito).

Clique em Carregar sem compactação e selecione a pasta do projeto.

📖 Documentação de Campos
A extensão monitora e interage com os seguintes IDs/Names:

Nome do Cliente: sAge_Nome

E-mail: sAge_Email

Código GYG: sAge_CPF e _sVen_Cartao (campo CV)

Webmail: Campos _to, _subject e o editor de texto via iframe.

📝 Licença
Este projeto foi desenvolvido para uso interno e automação de processos específicos.
