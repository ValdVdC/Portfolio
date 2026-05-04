# Osvaldo Vasconcelos | Software Developer Portfolio

Um portfólio de alta performance e interface cinematográfica, construído com foco em **arquitetura limpa, acessibilidade e micro-interações nativas**. Este projeto serve não apenas como uma vitrine de projetos, mas como uma prova técnica de proficiência em Front-end moderno.

![Lighthouse Score: 100/100](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse)
![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Destaques Técnicos

Este projeto foi intencionalmente construído **sem o uso de frameworks pesados de animação** (como Framer Motion ou GSAP). Todas as interações visuais utilizam as APIs mais recentes e performáticas dos navegadores:

- **Theme Switcher Dinâmico:** Implementação nativa da `View Transitions API` para criar uma transição de cores radial (sem flashes bruscos ou quedas de frame).
- **Menu de Comandos (Cmd+K):** Acessibilidade total via teclado com barra de busca real-time filtrando links úteis sem recarregar a página.
- **Física Magnética:** Cálculos matemáticos puros em JS para botões e links que "puxam" o cursor, aumentando a imersão do usuário.
- **Efeitos de Spotlight e Parallax 3D:** Uso otimizado de `IntersectionObserver` e coordenadas do mouse para iluminar e rotacionar as vitrines de projeto de acordo com a proximidade do usuário.
- **Smooth Scroll:** Implementação do `Lenis` para garantir uma rolagem suave baseada na taxa de atualização do monitor do usuário.

## Tecnologias Utilizadas

- **Framework:** [Astro](https://astro.build/) (Static Site Generation para tempo de carregamento instantâneo)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (com configuração customizada de variáveis CSS e suporte a múltiplos temas)
- **Linguagem:** TypeScript / JavaScript (ES6+)
- **Formulários:** Integração nativa com [Netlify Forms](https://docs.netlify.com/forms/setup/)
- **Acessibilidade:** Padrões WCAG AA garantidos no contraste de cores.

## Como Rodar Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/ValdVdC/portfolio.git
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Abra no navegador:** O projeto estará rodando em `http://localhost:4321`.

## Deploy

O projeto está otimizado para deploy no **Netlify**.
Para fazer o deploy, basta conectar seu repositório no painel do Netlify e utilizar as configurações padrão do Astro:

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

O formulário de contato funcionará automaticamente após o deploy na plataforma.

---

_Construído com obsessão por detalhes._
