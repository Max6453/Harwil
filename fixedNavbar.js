
          //navbar
          const navbar = document.getElementById('navbar');
          const menuBtn = document.getElementById('menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          let lastScrollY = window.scrollY;
      
          // Toggle mobile menu with animation
          menuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.remove('hidden', 'animate-slide-out');
              mobileMenu.classList.add('animate-slide-in');
            } else {
              mobileMenu.classList.remove('animate-slide-in');
              mobileMenu.classList.add('animate-slide-out');
              setTimeout(() => mobileMenu.classList.add('hidden'), 300); // Hide after animation
            }
          });
      
          // Navbar animation on scroll
          window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
      
            if (currentScrollY > 50 && currentScrollY > lastScrollY) {
              // Scrolling down
              navbar.classList.remove('hidden', 'animate-slide-up');
              navbar.classList.add('animate-slide-down');
            } else if (currentScrollY < lastScrollY && currentScrollY <= 50) {
              // Scrolling up
              navbar.classList.remove('animate-slide-down');
              navbar.classList.add('animate-slide-up');
              setTimeout(() => navbar.classList.add('hidden'), 500); // Hide after animation
            }
      
            lastScrollY = currentScrollY;
          });