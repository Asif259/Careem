// Navbar component for Careem website
function loadNavbar(activePage) {
  const navbarContainer = document.getElementById('navbar-container');
  
  if (!navbarContainer) {
    console.error('Navbar container not found');
    return;
  }

  // Get page name for active state
  const getPageName = (filename) => {
    if (!filename || filename === 'index.html') return 'home';
    return filename.replace('.html', '');
  };

  const currentPage = getPageName(activePage);

  // Navigation links
  const navLinks = [
    { href: 'index.html', label: 'Home', page: 'home' },
    { href: 'about.html', label: 'About', page: 'about' },
    { href: 'services.html', label: 'Services', page: 'services' },
    { href: 'partners.html', label: 'Partners', page: 'partners' },
    { href: 'contact.html', label: 'Contact', page: 'contact' }
  ];

  const navbarHTML = `
    <nav class="w-full bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
          <!-- Logo and Mobile Menu Button -->
          <div class="flex items-center gap-4">
            <!-- Mobile menu button -->
            <button
              id="mobile-menu-button"
              class="md:hidden p-2 rounded-md text-gray-700 hover:text-careem-green hover:bg-careem-green/10 focus:outline-none focus:ring-2 focus:ring-careem-green transition-all relative"
              aria-label="Toggle menu"
              aria-expanded="false"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="menu-icon">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6 absolute inset-0 m-auto hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="close-icon">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <!-- Logo -->
            <a href="index.html" class="flex items-center">
              <img src="img/logo.svg" alt="Careem Logo" class="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity" />
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            ${navLinks.map(link => `
              <a
                href="${link.href}"
                class="px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 ${
                  currentPage === link.page
                    ? 'text-careem-green bg-careem-green/10 font-semibold'
                    : 'text-gray-700 hover:text-careem-green hover:bg-careem-green/5'
                }"
              >
                ${link.label}
              </a>
            `).join('')}
          </div>

          <!-- CTA Button -->
          <div class="hidden md:flex md:items-center">
            <a
              href="contact.html"
              class="px-6 py-2.5 rounded-full text-sm lg:text-base font-bold text-white bg-gradient-to-r from-careem-green to-careem-green-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          ${navLinks.map(link => `
            <a
              href="${link.href}"
              class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                currentPage === link.page
                  ? 'text-careem-green bg-careem-green/10 font-semibold'
                  : 'text-gray-700 hover:text-careem-green hover:bg-careem-green/5'
              }"
            >
              ${link.label}
            </a>
          `).join('')}
          <a
            href="contact.html"
            class="block px-4 py-3 mt-2 rounded-full text-base font-bold text-center text-white bg-gradient-to-r from-careem-green to-careem-green-dark"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  `;

  navbarContainer.innerHTML = navbarHTML;

  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'true');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

