        // Initialize AOS Animation with enhanced settings
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 100,
            mirror: true,
            anchorPlacement: 'top-bottom'
        });

        // Re-initialize AOS on scroll for better animation triggering
        window.addEventListener('scroll', () => {
            AOS.refresh();
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                // Skip if href is just "#" (like the logo link)
                if (href === '#') {
                    return;
                }
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Section Reveal Animation Observer
        const sectionObserverOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    AOS.refresh();
                }
            });
        }, sectionObserverOptions);

        document.querySelectorAll('.section-reveal').forEach(section => {
            sectionObserver.observe(section);
        });

        // Fade in animation on scroll
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

        // Navbar background change on scroll with smooth transition
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 2px 20px rgba(26, 39, 68, 0.1)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = '0 2px 20px rgba(26, 39, 68, 0.05)';
            }
        });

        // Enhanced button hover animations
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Card hover effects with smooth transitions
        const cards = document.querySelectorAll('.competency-card, .reason-card, .education-item');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
        });

        // Parallax effect on hero section
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.hero');
            const scrolled = window.pageYOffset;
            if (hero) {
                hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
            }
        });

        // Add staggered animation to competency cards on load
        document.addEventListener('DOMContentLoaded', () => {
            const competencyCards = document.querySelectorAll('.competency-card');
            competencyCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });

            const reasonCards = document.querySelectorAll('.reason-card');
            reasonCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });

        // Icon scale animation for value items
        const valueItems = document.querySelectorAll('.value-item');
        valueItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        icon.style.transform = 'scale(1)';
                    }, 300);
                }
            });
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Back to Top Button functionality
        const backToTopButton = document.querySelector('.back-to-top');
        
        // Only run if button exists
        if (backToTopButton) {
            // Show/hide button based on scroll position
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });

            // Scroll to top when button is clicked
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Theme Toggle Functionality
        /* const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Apply theme on page load
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const icon = themeToggle.querySelector('i');
            
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }); */

        // Update navbar background for dark mode
        /* window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
            
            if (window.scrollY > 50) {
                if (isDarkMode) {
                    nav.style.background = 'rgba(26, 26, 46, 0.98)';
                } else {
                    nav.style.background = 'rgba(255, 255, 255, 0.98)';
                }
                nav.style.boxShadow = '0 2px 20px rgba(26, 39, 68, 0.1)';
            } else {
                if (isDarkMode) {
                    nav.style.background = 'rgba(26, 26, 46, 0.95)';
                } else {
                    nav.style.background = 'rgba(255, 255, 255, 0.95)';
                }
                nav.style.boxShadow = '0 2px 20px rgba(26, 39, 68, 0.05)';
            }
        }); */

