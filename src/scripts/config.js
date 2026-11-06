/**
 * Owen Landing Page - Central Configuration
 */

export const CONFIG = {
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://owen.share4happy.com/',
  basePath: import.meta.env.VITE_BASE_PATH || '/',
  
  // WordPress REST API
  wpApi: {
    endpoint: import.meta.env.VITE_WP_API_URL || 'https://share4happy.com/wp-json/wp/v2/posts',
    categoryId: Number(import.meta.env.VITE_WP_CATEGORY_ID) || 208,
    perPage: Number(import.meta.env.VITE_WP_POSTS_PER_PAGE) || 5,
    get fullUrl() {
      return `${this.endpoint}?categories=${this.categoryId}&per_page=${this.perPage}&_embed`;
    }
  },

  // Lead Form
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};
