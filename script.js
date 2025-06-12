 // Aguarda o carregamento completo do DOM
        document.addEventListener('DOMContentLoaded', function() {
            // Inicializa todas as funcionalidades
            initSmoothScrolling();
            initScrollAnimations();
            initHeaderScroll();
            initContactForm();
            initTypingEffect();
            initThemeToggle();
        });

        /**
         * Inicializa o toggle de tema escuro/claro
         */
        function initThemeToggle() {
            const themeToggle = document.getElementById('themeToggle');
            
            // Apenas adiciona o event listener, já que o tema foi aplicado no <head>
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }

        /**
        * Aplica o tema de forma consistente
        */
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            
            // Força a atualização das variáveis CSS
            const root = document.documentElement;
            const computedStyle = getComputedStyle(root);
            
            // Trigger para garantir que as mudanças sejam aplicadas
            root.style.setProperty('--force-update', Math.random());
            
            // Remove a propriedade temporária após um frame
            requestAnimationFrame(() => {
                root.style.removeProperty('--force-update');
            });
        }

        /**
         * Inicializa o scroll suave para links de navegação
         */
        function initSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        /**
         * Inicializa as animações de fade-in baseadas no scroll
         */
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }

        /**
         * Inicializa o efeito do header no scroll
         */
        function initHeaderScroll() {
            const header = document.querySelector('header');
            
            function updateHeaderStyle() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
            
            // Aplica o estilo inicial
            updateHeaderStyle();
            
            window.addEventListener('scroll', updateHeaderStyle);
        }

        /**
         * Inicializa o formulário de contato
         */
        function initContactForm() {
            const contactForm = document.querySelector('.contact-form');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {

                    const nome = this.querySelector('input[name="nome"]').value;
                    const email = this.querySelector('input[name="email"]').value;
                    const mensagem = this.querySelector('textarea[name="mensagem"]').value;
                    
                    if (nome && email && mensagem) {
                        // Mostra feedback antes do envio
                        showFormFeedback('Enviando mensagem...', 'info');
                    }
                });
            }
        }

        /**
         * Mostra feedback do formulário
         */
        function showFormFeedback(message, type) {
            const existingFeedback = document.querySelector('.form-feedback');
            if (existingFeedback) {
                existingFeedback.remove();
            }
            
            const feedback = document.createElement('div');
            feedback.className = `form-feedback ${type}`;
            feedback.textContent = message;
            
            const colors = {
                success: { bg: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '#22c55e' },
                error: { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '#ef4444' },
                info: { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '#3b82f6' }
            };
            
            const colorScheme = colors[type] || colors.info;
            
            feedback.style.cssText = `
                margin-top: 1rem;
                padding: 1rem;
                border-radius: 10px;
                text-align: center;
                background: ${colorScheme.bg};
                color: ${colorScheme.color};
                border: 1px solid ${colorScheme.border};
            `;
            
            const contactForm = document.querySelector('.contact-form');
            contactForm.parentNode.insertBefore(feedback, contactForm.nextSibling);
            
            if (type !== 'info') {
                setTimeout(() => {
                    feedback.remove();
                }, 5000);
            }
        }
        /**
         * Inicializa o efeito de digitação no hero
         */
        function initTypingEffect() {
            const heroTitle = document.querySelector('.hero h1');
            
            if (heroTitle) {
                const text = heroTitle.textContent;
                heroTitle.textContent = '';
                
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        heroTitle.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                };
                
                setTimeout(typeWriter, 1000);
            }
        }

        // Função para detectar se o usuário está em um dispositivo móvel
        function isMobile() {
            return window.innerWidth <= 768;
        }

        // Função para debounce (otimização de performance)
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Adiciona listener para redimensionamento da janela com debounce
        window.addEventListener('resize', debounce(() => {
            console.log('Window resized');
        }, 250));

        // Função para scroll até uma seção específica
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Adiciona classe para indicar que o JavaScript foi carregado
        document.documentElement.classList.add('js-loaded');