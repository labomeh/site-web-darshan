// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fermer le menu au clic sur un lien
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Lazy load hero video
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        const videoSource = heroVideo.querySelector('source[data-src]');

        if (videoSource) {
            // Use IntersectionObserver to load video when hero is visible
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Load the video source
                        const src = videoSource.getAttribute('data-src');
                        videoSource.setAttribute('src', src);

                        // Load and play the video
                        heroVideo.load();

                        // Add loaded class for fade-in effect when video can play
                        heroVideo.addEventListener('canplay', () => {
                            heroVideo.classList.add('loaded');
                            heroVideo.play().catch(err => {
                                console.log('Autoplay prevented:', err);
                            });
                        }, { once: true });

                        // Stop observing
                        videoObserver.unobserve(heroVideo);
                    }
                });
            }, {
                rootMargin: '50px' // Start loading slightly before it enters viewport
            });

            videoObserver.observe(heroVideo);
        }
    }

    // Parallax effect for hero video
    const heroSection = document.querySelector('.hero');
    if (heroSection && heroVideo) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;

            // Only apply parallax while hero is in view
            if (scrolled <= heroHeight) {
                const parallaxSpeed = 0.5; // Video moves at 50% of scroll speed
                heroVideo.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    // Scroll indicator with delayed appearance
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        let hasScrolled = false;

        // Show indicator after 3 seconds if user hasn't scrolled
        setTimeout(() => {
            if (!hasScrolled) {
                scrollIndicator.classList.add('visible');
                // Start bounce animation after fade-in completes
                setTimeout(() => {
                    scrollIndicator.classList.add('active');
                }, 600);
            }
        }, 3000);

        // Click handler for smooth scroll
        scrollIndicator.addEventListener('click', () => {
            const introSection = document.querySelector('.intro');
            if (introSection) {
                introSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Hide indicator only when user scrolls
        window.addEventListener('scroll', () => {
            if (!hasScrolled) {
                hasScrolled = true;
                scrollIndicator.classList.remove('visible', 'active');
            }
        }, { passive: true });
    }

    // Fade-in au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Services navigation: active state based on scroll position
    const servicesNav = document.getElementById('servicesNav');
    if (servicesNav) {
        const navItems = servicesNav.querySelectorAll('.services-nav-item');
        const sections = document.querySelectorAll('.service-detail');

        function updateActiveNav() {
            let current = '';
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                // Si on est dans cette section (avec marge de 150px)
                if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionTop + sectionHeight - 150) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                const href = item.getAttribute('href');
                if (href === `#${current}`) {
                    item.classList.add('active');
                }
            });
        }

        // Smooth scroll vers les sections
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 140;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav(); // Appel initial
    }
});
