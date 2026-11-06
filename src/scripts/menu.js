/**
 * Mobile Navigation Drawer & Smooth Scroll
 */

export function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

