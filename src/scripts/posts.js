/**
 * WordPress REST API Integration & Continuous Marquee Carousel
 * Section 2B Specification
 */

import { CONFIG } from './config.js';
import { IMAGES } from './images.js';

/**
 * Strip HTML tags and decode HTML entities safely without innerHTML
 */
function sanitizeText(htmlString) {
  if (!htmlString) return '';
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
}

/**
 * Format ISO Date to Vietnamese standard (dd/mm/yyyy)
 */
function formatDate(dateString) {
  try {
    const d = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(d);
  } catch (e) {
    return dateString;
  }
}

/**
 * Normalize raw WordPress REST API post item into clean data object
 */
function normalizePost(raw) {
  const media = raw._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = media?.source_url || IMAGES.fallbackPost;
  const imageAlt = media?.alt_text || sanitizeText(raw.title?.rendered) || 'Bài viết thời trang Owen';

  return {
    id: raw.id,
    title: sanitizeText(raw.title?.rendered),
    excerpt: sanitizeText(raw.excerpt?.rendered).replace(/\s+/g, ' ').trim(),
    url: raw.link,
    date: formatDate(raw.date),
    imageUrl,
    imageAlt,
  };
}

/**
 * Fetch posts from WordPress REST API
 */
export async function fetchPosts() {
  const url = CONFIG.wpApi.fullUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      return { posts: [], error: null };
    }
    const posts = data.map(normalizePost);
    return { posts, error: null };
  } catch (err) {
    console.warn('[Owen WP API] Could not fetch dynamic posts:', err);
    return { posts: [], error: err.message };
  }
}

/**
 * Render single post card DOM element
 */
function createPostCard(post, isDuplicate = false) {
  const card = document.createElement('article');
  card.className = 'post-card';
  if (isDuplicate) {
    card.setAttribute('aria-hidden', 'true');
  }

  const link = document.createElement('a');
  link.href = post.url;
  link.className = 'post-card-inner';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  if (isDuplicate) {
    link.tabIndex = -1;
  }

  // Image container
  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'post-card-thumb';

  const img = document.createElement('img');
  img.src = post.imageUrl;
  img.alt = post.imageAlt;
  img.loading = 'lazy';
  img.width = 400;
  img.height = 240;
  img.onerror = () => {
    img.src = IMAGES.fallbackPost;
  };
  imgWrapper.appendChild(img);

  // Meta & Title
  const content = document.createElement('div');
  content.className = 'post-card-content';

  const dateSpan = document.createElement('time');
  dateSpan.className = 'post-card-date';
  dateSpan.dateTime = post.date;
  dateSpan.textContent = post.date;

  const titleH3 = document.createElement('h3');
  titleH3.className = 'post-card-title';
  titleH3.textContent = post.title;

  const excerptP = document.createElement('p');
  excerptP.className = 'post-card-excerpt';
  excerptP.textContent = post.excerpt.length > 110 ? post.excerpt.slice(0, 110) + '...' : post.excerpt;

  const readMore = document.createElement('span');
  readMore.className = 'post-card-cta';
  readMore.innerHTML = 'Đọc tiếp <span aria-hidden="true">&rarr;</span>';

  content.appendChild(dateSpan);
  content.appendChild(titleH3);
  content.appendChild(excerptP);
  content.appendChild(readMore);

  link.appendChild(imgWrapper);
  link.appendChild(content);
  card.appendChild(link);

  return card;
}

/**
 * Initialize Carousel in container
 */
export async function initPostsCarousel(containerSelector = '#posts-carousel-container') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const track = container.querySelector('.carousel-track');
  const statusEl = container.querySelector('.carousel-status');
  const toggleBtn = document.querySelector('#carousel-toggle-btn');

  // Fetch real posts
  const { posts, error } = await fetchPosts();

  // Handle error or empty
  if (error || posts.length === 0) {
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.textContent = error
        ? 'Tạm thời không thể tải bài viết mới nhất. Vui lòng quay lại sau.'
        : 'Hiện chưa có bài viết mới.';
    }
    const section = container.closest('.section-carousel');
    if (section && posts.length === 0) {
      // Keep section friendly or hide if requested
      console.info('[Owen WP API] Empty post state handled gracefully.');
    }
    return;
  }

  // Clear skeletons
  if (track) {
    track.innerHTML = '';

    // Create 3 identical sets to guarantee seamless loop even on ultra-wide screens (1920px+)
    const fragment = document.createDocumentFragment();
    for (let setIndex = 0; setIndex < 3; setIndex++) {
      const isDuplicate = setIndex > 0;
      posts.forEach(post => {
        fragment.appendChild(createPostCard(post, isDuplicate));
      });
    }
    track.appendChild(fragment);
  }

  // Pause/Play toggle functionality (WCAG 2.1 compliance)
  let isPaused = false;
  if (toggleBtn && track) {
    toggleBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      if (isPaused) {
        track.classList.add('is-paused');
        toggleBtn.setAttribute('aria-pressed', 'true');
        toggleBtn.textContent = 'Tiếp tục chạy';
      } else {
        track.classList.remove('is-paused');
        toggleBtn.setAttribute('aria-pressed', 'false');
        toggleBtn.textContent = 'Tạm dừng';
      }
    });
  }

  // Touch swipe pause on mobile
  if (track) {
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      track.classList.add('is-touching');
    }, { passive: true });

    track.addEventListener('touchend', () => {
      track.classList.remove('is-touching');
    }, { passive: true });
  }
}
