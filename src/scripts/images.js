/**
 * Central Image & Asset Registry
 * Vite resolves these imports to hashed production URLs automatically.
 */

// Icons
import iconComfort from '../assets/icons/icon-comfort.svg';
import iconNeat from '../assets/icons/icon-neat.svg';
import iconMatch from '../assets/icons/icon-match.svg';

// Hero Showcase
import heroShirt from '../assets/images/hero/hero-shirt-display.jpg';

// Shirts Collection
import shirtBlue from '../assets/images/products/shirt-blue-long.jpg';
import shirtNavy from '../assets/images/products/shirt-navy-short.jpg';
import shirtCream from '../assets/images/products/shirt-cream-long.jpg';

// Pants Collection
import pantsBlack from '../assets/images/products/pants-black.png';
import pantsBeige from '../assets/images/products/pants-beige.png';
import pantsCharcoal from '../assets/images/products/pants-charcoal.png';

// High-Resolution Size Charts (Replaced with sharp originals)
import chartShirts from '../assets/images/charts/size-chart-shirts.png';
import chartPants from '../assets/images/charts/size-chart-pants.png';

export const IMAGES = {
  icons: {
    comfort: { src: iconComfort, alt: 'Thoải mái' },
    neat: { src: iconNeat, alt: 'Chỉnh chu' },
    match: { src: iconMatch, alt: 'Dễ phối' },
  },
  hero: {
    shirt: { src: heroShirt, alt: 'Áo sơ mi trắng Owen Regular Fit lịch lãm' },
  },
  shirts: [
    { id: 'shirt-blue', name: 'Áo sơ mi dài tay xanh pastel', src: shirtBlue, alt: 'Áo sơ mi nam Owen dài tay màu xanh pastel nhẹ nhàng' },
    { id: 'shirt-navy', name: 'Áo sơ mi ngắn tay xanh navy', src: shirtNavy, alt: 'Áo sơ mi nam Owen ngắn tay màu xanh navy hiện đại' },
    { id: 'shirt-cream', name: 'Áo sơ mi dài tay vàng kem', src: shirtCream, alt: 'Áo sơ mi nam Owen dài tay màu vàng kem thanh lịch' },
  ],
  pants: [
    { id: 'pants-black', name: 'Quần tây co giãn màu đen', src: pantsBlack, alt: 'Quần tây nam Owen co giãn màu đen chuẩn mực' },
    { id: 'pants-beige', name: 'Quần tây co giãn màu be sáng', src: pantsBeige, alt: 'Quần tây nam Owen co giãn màu be trẻ trung, lịch lãm', featured: true },
    { id: 'pants-charcoal', name: 'Quần tây co giãn xám than', src: pantsCharcoal, alt: 'Quần tây nam Owen co giãn màu xám than sang trọng' },
  ],
  charts: {
    shirts: { src: chartShirts, alt: 'Bảng thông số chọn size áo nam Owen (độ nét cao)' },
    pants: { src: chartPants, alt: 'Bảng thông số chọn size quần nam Owen (độ nét cao)' },
  },
  fallbackPost: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
};
