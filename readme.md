# 🚀 Integrador de Vendas: GetYourGuide -> Ingresso com Desconto -> Webmail

Este projeto é uma **Extensão de Navegador** (compatível com Google Chrome, Microsoft Edge, Opera GX, Brave e outros baseados em Chromium) desenvolvida para otimizar e automatizar o fluxo de trabalho entre a plataforma de fornecedores da **GetYourGuide**, o sistema de vendas da **Ingresso com Desconto** e o **Webmail Locaweb**.

**Desenvolvido por:** Bruno Ferreira

---

## 📸 Screenshots
![Preview](/botao1.jpg)
*Botão de captura integrado à interface da GetYourGuide*

![Preview](/botao2.jpg)
*Interface de vendas com preenchimento automático e botão de disparo de e-mail*

---

## ✨ O que há de novo (v1.5)
Central do Operador: Agora o nome do operador é configurado através de um menu (popup) no ícone da extensão, mantendo o layout da página de vendas totalmente limpo.

Identificação no CV: O campo de cartão (CV) é preenchido automaticamente no padrão CÓDIGO GYG - NOME DO OPERADOR.

Zero F5: Comunicação em tempo real entre abas via Background Service Worker.

## 🎥 Como Funciona (Fluxo Automatizado)

1.  **Extração**: Na página de reserva da GetYourGuide, um botão personalizado com a logo da empresa captura instantaneamente o Nome do Passageiro, E-mail temporário e Código GYG.
2.  **Comunicação Instantânea**: Através de um *Service Worker* (Background Script), os dados são transmitidos entre as abas em tempo real. **Não é necessário atualizar a página (F5)** para que os dados apareçam no sistema de destino.
3.  **Preenchimento Inteligente**: O sistema da Ingresso com Desconto identifica a chegada dos dados e preenche automaticamente os campos de Nome, E-mail, CPF e CV (Cartão).
4.  **E-mail Automático (Pós-Venda)**: Após a geração do voucher, na página de confirmação, a extensão injeta um botão flutuante. Ao clicar, o Webmail Locaweb é aberto com:
    * **Para:** E-mail do cliente preenchido.
    * **Assunto:** Código GYG + Nome do Cliente.
    * **Corpo:** Texto padrão em inglês para envio de vouchers, preservando a assinatura e o banner original do usuário.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)**: Lógica de captura, observers de DOM e injeção de scripts.
* **Chrome Extension API (Manifest V3)**: Uso de `Service Workers` para comunicação entre abas, `Storage API` para persistência temporária e `Messaging API`.
* **CSS3**: Estilização de botões flutuantes seguindo a identidade visual das plataformas.

---

## 📂 Estrutura do Projeto

* `manifest.json`: Configurações globais, permissões de segurança e mapeamento de domínios.
* `background.js`: Central de mensagens que atua como ponte entre as abas.
* `extract.js`: Script de captura injetado em `supplier.getyourguide.com`.
* `fill.js`: Script de automação injetado em `ingressocomdesconto.com.br`.
* `mail.js`: Script de automação de interface injetado em `webmail-seguro.com.br`.
* `logo.png`: Identidade visual utilizada na interface da extensão.

---

## 🚀 Como Instalar

1.  Faça o download ou clone este repositório para uma pasta em seu computador.
2.  Abra seu navegador e acesse a página de extensões (ex: `chrome://extensions/`).
3.  Ative o **Modo do desenvolvedor** no canto superior direito.
4.  Clique no botão **Carregar sem compactação** e selecione a pasta onde os arquivos estão salvos.

---

## 📖 Documentação de Campos

A extensão monitora e interage com os seguintes elementos técnicos:

* **Página de Venda:**
    * Nome do Cliente: `sAge_Nome`
    * E-mail: `sAge_Email`
    * Código GYG: `sAge_CPF` e `_sVen_Cartao` (campo CV)
* **Webmail Locaweb:**
    * Campos: `_to`, `_subject`
    * Editor: Injeção de HTML via `iframe` (ID: `composebody_ifr`)

---

## 📝 Licença
Este projeto foi desenvolvido para uso interno e automação de processos específicos da operação de vendas.

