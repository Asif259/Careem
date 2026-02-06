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
    <nav class="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
          <!-- Logo and Mobile Menu Button -->
          <div class="flex items-center gap-4">
            <!-- Mobile menu button -->
            <button
              id="mobile-menu-button"
              class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-careem-green hover:bg-careem-green/10 focus:outline-none focus:ring-2 focus:ring-careem-green transition-all relative"
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
                    : 'text-gray-700 dark:text-gray-300 hover:text-careem-green hover:bg-careem-green/5'
                }"
              >
                ${link.label}
              </a>
            `).join('')}
          </div>

          <!-- CTA and Dark Mode Toggle -->
          <div class="hidden md:flex md:items-center md:gap-3">
            <button
              id="dark-mode-toggle"
              class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-careem-green hover:bg-careem-green/10 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              <svg class="h-6 w-6 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg class="h-6 w-6 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <a
              href="contact.html"
              class="px-6 py-2.5 rounded-full text-sm lg:text-base font-bold text-white bg-gradient-to-r from-careem-green to-careem-green-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <!-- Mobile Dark Mode Toggle -->
          <button
            id="dark-mode-toggle-mobile"
            class="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-careem-green hover:bg-careem-green/10 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            <svg class="h-6 w-6 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg class="h-6 w-6 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div class="px-2 pt-2 pb-3 space-y-1">
          ${navLinks.map(link => `
            <a
              href="${link.href}"
              class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                currentPage === link.page
                  ? 'text-careem-green bg-careem-green/10 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-careem-green hover:bg-careem-green/5'
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

  // Initialize dark mode
  initDarkMode();

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

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
  }
}

function initDarkMode() {
  if (localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}
