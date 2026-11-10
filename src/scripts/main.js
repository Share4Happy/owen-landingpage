/**
 * Main Application Entry Point - Owen
 */

import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/components.css';
import '../styles/sections/header.css';
import '../styles/sections/hero.css';
import '../styles/sections/outfits.css';
import '../styles/sections/values.css';
import '../styles/sections/products.css';
import '../styles/sections/services.css';
import '../styles/sections/faq-sizes.css';
import '../styles/sections/social-proof.css';
import '../styles/sections/lead-form.css';
import '../styles/sections/carousel.css';
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

  console.info('Owen Landing Page initialized successfully with new 2026 design.');
});

function bindDynamicImages() {
  // Hero Banner image (full bleed)
  const heroBanner = document.querySelector('#hero-banner-img');
  if (heroBanner && IMAGES.hero.banner) {
    heroBanner.src = IMAGES.hero.banner.src;
    heroBanner.alt = IMAGES.hero.banner.alt;
  }

  // Outfits
  IMAGES.outfits.forEach(outfit => {
    const el = document.querySelector(`#img-${outfit.id}`);
    if (el) {
      el.src = outfit.src;
      el.alt = outfit.alt;
    }
  });

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

  // Lead Form full uncropped background image (không cắt ảnh, để ảnh full)
  const leadBgImg = document.querySelector('#lead-bg-img');
  if (leadBgImg && IMAGES.lead.background) {
    leadBgImg.src = IMAGES.lead.background.src;
    leadBgImg.alt = IMAGES.lead.background.alt;
  }
}
