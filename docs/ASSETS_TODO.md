# BẢNG ĐỐI CHIẾU VÀ THEO DÕI TÀI NGUYÊN HÌNH ẢNH (ASSETS TODO)

> **Dự án:** Owen - Landing Page Thời Trang Công Sở Nam  
> **Nguyên tắc:** "Khung trước, ảnh sau". Mọi ảnh chưa có đều được dựng khung layout chuẩn tỷ lệ, kích thước, bo góc, `aspect-ratio` và class placeholder chung `.img-placeholder`.  
> Khai báo tập trung tại: `src/scripts/images.js`.

---

## 1. Bảng đối chiếu hình ảnh & Icons (Toàn bộ trang)

| STT | Tên file dự kiến | Kích thước dự kiến | Vị trí sử dụng | Trạng thái | Nguồn / Ghi chú |
|:---:|:---|:---:|:---|:---:|:---|
| **1** | `logo-owen.svg` | ~160x40 px | Header & Footer | 🟢 Dựng SVG vector chuẩn | Logo thương hiệu Owen (chữ OWEN + biểu tượng chữ O cách điệu) |
| **2** | `hero-shirt-display.jpg` | ~600x480 px (4:3 hoặc 5:4) | Hero Section (khung bên phải) | 🟡 Crop từ ảnh thiết kế 1 | Ảnh áo sơ mi trắng trên ghế sofa màu be có móc treo Owen |
| **3** | `icon-comfort.svg` | 48x48 px | Hero Section (khung bên trái) | 🟢 Dựng SVG chuẩn | Icon chiếc lông vũ / thoáng mát mềm mại (viền xanh tròn) |
| **4** | `icon-neat.svg` | 48x48 px | Hero Section (khung bên trái) | 🟢 Dựng SVG chuẩn | Icon cổ áo / chỉnh chu phẳng phiu (viền xanh tròn) |
| **5** | `icon-match.svg` | 48x48 px | Hero Section (khung bên trái) | 🟢 Dựng SVG chuẩn | Icon mảnh ghép puzzle / dễ phối đồ (viền xanh tròn) |
| **6** | `shirt-blue-long.jpg` | ~300x380 px (1:1 hoặc 4:5) | Section "The Owen Edit" - Áo sơ mi 1 | 🟡 Crop từ ảnh thiết kế 3 | Áo sơ mi tay dài xanh pastel nhạt |
| **7** | `shirt-navy-short.jpg` | ~300x380 px (1:1 hoặc 4:5) | Section "The Owen Edit" - Áo sơ mi 2 | 🟡 Crop từ ảnh thiết kế 3 | Áo sơ mi tay ngắn màu xanh navy sẫm |
| **8** | `shirt-cream-long.jpg` | ~300x380 px (1:1 hoặc 4:5) | Section "The Owen Edit" - Áo sơ mi 3 | 🟡 Crop từ ảnh thiết kế 3 | Áo sơ mi tay dài màu vàng kem/be nhạt |
| **9** | `pants-black.png` | ~440x1020 px (1:1 card) | Section "Quần tây co giãn" - Quần 1 | 🟢 Đã có sẵn | File gốc Canva độ nét cao (`... (1).png`) |
| **10** | `pants-beige.png` | ~440x1020 px (1:1 card) | Section "Quần tây co giãn" - Quần 2 (Active) | 🟢 Đã có sẵn | File gốc Canva độ nét cao (`....png`) |
| **11** | `pants-charcoal.png` | ~440x1020 px (1:1 card) | Section "Quần tây co giãn" - Quần 3 | 🟢 Đã có sẵn | File gốc Canva độ nét cao (`... (2).png`) |
| **12** | `size-chart-shirts.png` | ~450x220 px | Section "FAQ & Bảng Size" - Áo nam | 🟢 Đã trích xuất & làm bảng HTML | Bảng thông số đo size áo nam (ngực, bụng, chiều cao, cân nặng) |
| **13** | `size-chart-pants.png` | ~450x220 px | Section "FAQ & Bảng Size" - Quần nam | 🟢 Đã trích xuất & làm bảng HTML | Bảng thông số đo size quần nam (bụng, mông, chiều cao, cân nặng) |
| **14** | `favicon.svg` / `favicon.ico` | 32x32 / vector | `public/favicon.svg` | 🟢 Dựng SVG chuẩn | Biểu tượng Owen O-mark |
| **15** | `og-image.jpg` | 1200x630 px | `public/og-image.jpg` | 🟢 Tự tạo chuẩn SEO | Banner chia sẻ mạng xã hội (Open Graph & Twitter card) |
| **16** | `post-fallback.jpg` | 600x340 px (16:9) | Carousel WordPress (khi bài viết không có ảnh) | 🟢 Tạo placeholder trung tính | Dùng placeholder màu trung tính có chữ "Owen Journal" |

---

## 2. Quy ước kỹ thuật cho Assets
1. **Định dạng:** Ưu tiên WebP/SVG cho icons và ảnh nén, PNG cho ảnh sản phẩm tách nền.
2. **Khai báo tập trung:** Toàn bộ ảnh tĩnh nội bộ trang web được khai báo trong `src/scripts/images.js`.
3. **Placeholder chung:**
   ```css
   .img-placeholder {
     background: linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%);
     display: flex;
     align-items: center;
     justify-content: center;
     color: #888888;
     font-size: 0.875rem;
     text-transform: uppercase;
     letter-spacing: 0.05em;
   }
   ```
