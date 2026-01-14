# 📋 Formulário Multistep - Avaliação de Produto

Este projeto é um formulário dinâmico de múltiplas etapas desenvolvido com **React.js** e **Vite**. Ele permite que o usuário passe por um fluxo de avaliação dividido em identificação, feedback por emojis e uma tela final de agradecimento com resumo dos dados.

## 🚀 Tecnologias Utilizadas

* **React.js**: Biblioteca principal para a construção da interface.
* **React Icons**: Utilizado para os ícones de navegação e os emojis de satisfação (`bs`, `ai`, `gr`, `fi`).
* **Vite**: Ferramenta de build para um ambiente de desenvolvimento rápido.
* **CSS3**: Estilização personalizada para cada componente e transições.
* **Custom Hooks**: Lógica separada para gerenciar o estado das etapas (`useForm.jsx`).

## 🛠️ Funcionalidades

* **Fluxo Multistep**: Navegação entre etapas com botões de "Voltar" e "Avançar/Enviar".
* **Persistência de Dados**: Os dados preenchidos são mantidos no estado global durante a navegação entre os componentes.
* **Barra de Progresso**: Componente `Steps` que indica visualmente a fase atual do usuário.
* **Avaliação Interativa**: Uso de ícones de emoji para selecionar o nível de satisfação.

## 📂 Estrutura de Arquivos Principal

* `src/components/UserForm.jsx`: Coleta dados de identificação.
* `src/components/ReviewForm.jsx`: Interface de avaliação com emojis e comentários.
* `src/components/Thanks.jsx`: Resumo final e confirmação de envio.
* `src/hooks/useForm.jsx`: Lógica de controle do passo atual (`currentStep`).

## 🔧 Como Executar

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Luiz-4ugusto/Formulario_Multistep.git](https://github.com/Luiz-4ugusto/Formulario_Multistep.git)
