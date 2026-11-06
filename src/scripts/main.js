/**
 * Main Application Entry Point - Owen
 */

import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/components.css';
import '../styles/sections/header.css';
import '../styles/sections/hero.css';
import '../styles/sections/values.css';
import '../styles/sections/products.css';
import '../styles/sections/social-proof.css';
import '../styles/sections/services.css';
import '../styles/sections/faq-sizes.css';
import '../styles/sections/carousel.css';
import '../styles/sections/lead-form.css';
import '../styles/sections/footer.css';

import { IMAGES } from './images.js';
import { initMobileMenu } from './menu.js';
import { initPostsCarousel } from './posts.js';
import { initLeadForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Mobile Navigation
  initMobileMenu();

  // 2. Initialize WordPress API Carousel
  initPostsCarousel();

  // 3. Initialize Lead Form
  initLeadForm();

  // 4. Bind images dynamically according to IMAGES registry
  bindDynamicImages();

  console.info('Owen Landing Page initialized successfully.');
});

function bindDynamicImages() {
  // Hero shirt image
  const heroImg = document.querySelector('#hero-display-img');
  if (heroImg && IMAGES.hero.shirt) {
    heroImg.src = IMAGES.hero.shirt.src;
    heroImg.alt = IMAGES.hero.shirt.alt;
  }

  // Icons in hero
  const iconComfort = document.querySelector('#icon-comfort-img');
  if (iconComfort && IMAGES.icons.comfort) iconComfort.src = IMAGES.icons.comfort.src;

  const iconNeat = document.querySelector('#icon-neat-img');
  if (iconNeat && IMAGES.icons.neat) iconNeat.src = IMAGES.icons.neat.src;

  const iconMatch = document.querySelector('#icon-match-img');
  if (iconMatch && IMAGES.icons.match) iconMatch.src = IMAGES.icons.match.src;

  // Shirts collection
  IMAGES.shirts.forEach(item => {
    const el = document.querySelector(`#img-${item.id}`);
    if (el) {
      el.src = item.src;
      el.alt = item.alt;
    }
  });

  // Pants collection
  IMAGES.pants.forEach(item => {
    const el = document.querySelector(`#img-${item.id}`);
    if (el) {
      el.src = item.src;
      el.alt = item.alt;
    }
  });

  // Size charts
  const shirtChart = document.querySelector('#img-chart-shirts');
  if (shirtChart && IMAGES.charts.shirts) {
    shirtChart.src = IMAGES.charts.shirts.src;
    shirtChart.alt = IMAGES.charts.shirts.alt;
  }

  const pantsChart = document.querySelector('#img-chart-pants');
  if (pantsChart && IMAGES.charts.pants) {
    pantsChart.src = IMAGES.charts.pants.src;
    pantsChart.alt = IMAGES.charts.pants.alt;
  }
}
