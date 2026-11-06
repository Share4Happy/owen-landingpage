# BẢNG ĐỐI CHIẾU VÀ THEO DÕI TÀI NGUYÊN HÌNH ẢNH (ASSETS TODO)

> **Dự án:** Owen - Landing Page Thời Trang Công Sở Nam  
> **Cấu trúc thư mục:** Được tổ chức theo từng nhóm chuyên biệt (`hero/`, `products/`, `charts/`, `icons/`, `assets-raw/`).  
> **Khai báo tập trung tại:** `src/scripts/images.js`.

---

## 1. Cấu trúc thư mục hình ảnh chuẩn hóa

```
src/assets/
├── icons/
│   ├── icon-comfort.svg                 # Icon Thoải mái (viền xanh)
│   ├── icon-neat.svg                    # Icon Chỉnh chu (viền xanh)
│   └── icon-match.svg                   # Icon Dễ phối (viền xanh)
├── images/
│   ├── hero/
│   │   └── hero-shirt-display.jpg       # Ảnh áo sơ mi trắng trên sofa
│   ├── products/
│   │   ├── shirt-blue-long.jpg          # Áo sơ mi dài tay xanh pastel
│   │   ├── shirt-navy-short.jpg         # Áo sơ mi ngắn tay xanh navy
│   │   ├── shirt-cream-long.jpg         # Áo sơ mi dài tay vàng kem
│   │   ├── pants-black.png              # Quần tây co giãn đen
│   │   ├── pants-beige.png              # Quần tây co giãn be sáng (Active)
│   │   └── pants-charcoal.png           # Quần tây co giãn xám than
│   └── charts/
│       ├── size-chart-shirts.png        # BẢNG SIZE ÁO NAM (Độ nét cao - thay từ 519b07d0)
│       └── size-chart-pants.png         # BẢNG SIZE QUẦN NAM (Độ nét cao - thay từ d28d47cd)
└── assets-raw/                          # Lưu trữ an toàn các tệp thiết kế gốc Canva và PNG nguồn
```

---

## 2. Bảng đối chiếu chi tiết tài nguyên

| STT | Tên file | Kích thước | Vị trí sử dụng | Trạng thái | Nguồn gốc / Ghi chú |
|:---:|:---|:---:|:---|:---:|:---|
| **1** | `hero-shirt-display.jpg` | 600x450 px | Hero Section | 🟢 Đã tối ưu | Trích xuất chuẩn từ thiết kế 1 |
| **2** | `shirt-blue-long.jpg` | 300x380 px | The Owen Edit - Áo 1 | 🟢 Đã tối ưu | Trích xuất chuẩn từ thiết kế 3 |
| **3** | `shirt-navy-short.jpg` | 300x380 px | The Owen Edit - Áo 2 | 🟢 Đã tối ưu | Trích xuất chuẩn từ thiết kế 3 |
| **4** | `shirt-cream-long.jpg` | 300x380 px | The Owen Edit - Áo 3 | 🟢 Đã tối ưu | Trích xuất chuẩn từ thiết kế 3 |
| **5** | `pants-black.png` | 440x1020 px | Quần tây - Item 1 | 🟢 File gốc Canva | Độ phân giải cao, trong suốt |
| **6** | `pants-beige.png` | 440x1020 px | Quần tây - Item 2 (Active) | 🟢 File gốc Canva | Độ phân giải cao, viền tím nổi bật |
| **7** | `pants-charcoal.png` | 440x1020 px | Quần tây - Item 3 | 🟢 File gốc Canva | Độ phân giải cao, trong suốt |
| **8** | `size-chart-shirts.png` | **1962x801 px** | Bảng size áo nam | 🟢 **Độ nét cao** | **Thay từ file gốc `519b07d0...` siêu nét** |
| **9** | `size-chart-pants.png` | **1905x825 px** | Bảng size quần nam | 🟢 **Độ nét cao** | **Thay từ file gốc `d28d47cd...` siêu nét** |
| **10**| `icon-comfort.svg` | Vector 48x48 | Hero badges | 🟢 SVG chuẩn | Biểu tượng lông vũ |
| **11**| `icon-neat.svg` | Vector 48x48 | Hero badges | 🟢 SVG chuẩn | Biểu tượng cổ áo |
| **12**| `icon-match.svg` | Vector 48x48 | Hero badges | 🟢 SVG chuẩn | Biểu tượng mảnh ghép |
| **13**| `favicon.svg` | Vector 64x64 | `public/favicon.svg` | 🟢 SVG chuẩn | Owen O-mark |
| **14**| `og-image.jpg` | 1200x630 px | `public/og-image.jpg` | 🟢 Chuẩn SEO | Banner chia sẻ MXH |
| **15**| `post-fallback.jpg` | 600x340 px | Dynamic Carousel | 🟢 Tự động | Fallback khi API thiếu ảnh |
