

function toggleText(button) {
    const fullText = button.previousElementSibling; // Sélectionne le .full-text précédent
    fullText.classList.toggle("show");

    if (fullText.classList.contains("show")) {
        button.textContent = "Réduire";
    } else {
        button.textContent = "Lire la suite";
    }
}


// Sélectionne tous les liens de la navbar
const navlinks = document.querySelectorAll('.nav-link');

// Ajoute un écouteur d'événements à chaque lien
navlinks.forEach(link => {
    link.addEventListener('click', function() {
        // Retire la classe "active" de tous les liens
        navlinks.forEach(link => link.classList.remove('active'));
        
        // Ajoute la classe "active" au lien cliqué
        this.classList.add('active');
    });
});



window.addEventListener('load', () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.scrollIntoView({
            behavior: 'smooth' // Optionnel : pour un défilement fluide
        });
    }
});


 // Menu Toggle pour Mobile
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('fa-xmark');
        });


 
// Fermer le menu mobile quand on clique sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('fa-xmark');
            });
        });

    
// Navigation active en fonction du scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 150;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });

            // Sticky header
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);
        });

        // Smooth scroll pour tous les liens
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

        // Animation au scroll pour les éléments
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };


         const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observer les sections pour l'animation
        document.querySelectorAll('.services-box, .portfolio-box').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });


        // Validation du formulaire
        const contactForm = document.querySelector('.contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
                let isValid = true;

                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.border = '2px solid red';
                    } else {
                        input.style.border = 'none';
                    }
                });

                if (isValid) {
                    alert('Merci pour votre message ! Je vous répondrai bientôt.');
                    contactForm.reset();
                } else {
                    alert('Veuillez remplir tous les champs obligatoires.');
                }
            });
        }




        // Effet de typing sur le header au chargement
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelector('.bars-animation').style.display = 'none';
            }, 2000);
        });

        // Détection de la taille d'écran pour ajuster les animations
        let windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            windowWidth = window.innerWidth;
            
            // Fermer le menu mobile si on passe en mode desktop
            if (windowWidth > 768) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('fa-xmark');
            }
        });


        // Préchargement des images pour améliorer les performances
        window.addEventListener('load', () => {
            const images = document.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        });

        // Gestion du focus pour l'accessibilité
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });


        // Performance: Debounce pour le scroll
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

        // Appliquer le debounce au scroll
        const handleScroll = debounce(() => {
            // Actions de scroll optimisées
        }, 10);

        window.addEventListener('scroll', handleScroll);

        // Animation des compteurs (si vous voulez ajouter des stats)
        function animateCounter(element, target, duration) {
            let start = 0;
            const increment = target / (duration / 16);
            
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start);
                }
            }, 16);
            
        }



        // Ajout d'une classe pour les animations CSS personnalisées
        window.addEventListener('scroll', () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const position = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (position < screenPosition) {
                    element.classList.add('animated');
                }
            });
        });


        