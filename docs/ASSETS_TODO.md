# BẢNG ĐỐI CHIẾU VÀ THEO DÕI TÀI NGUYÊN HÌNH ẢNH (ASSETS TODO)

> **Dự án:** Owen - Landing Page Thời Trang Công Sở Nam  
> **Cập nhật:** Thiết kế mới 2026 (Hero Banner 2 người mẫu, Gợi ý phối đồ Outfit Check 3 set, Bảng size tách riêng, Form kính mờ Glassmorphism trên nền 2 người mẫu).  
> **Cấu trúc thư mục:** Được tổ chức theo từng nhóm chuyên biệt (`hero/`, `outfits/`, `products/`, `charts/`, `lead/`, `icons/`, `assets-raw/`).  
> **Khai báo tập trung tại:** `src/scripts/images.js`.

---

## 1. Cấu trúc thư mục hình ảnh chuẩn hóa

```
src/assets/
├── icons/
│   ├── icon-comfort.svg                 # Icon Thoải mái
│   ├── icon-neat.svg                    # Icon Chỉnh chu
│   └── icon-match.svg                   # Icon Dễ phối
├── images/
│   ├── hero/
│   │   ├── hero-banner.png              # Banner chính 2 người mẫu & thẻ xanh Owen gold (1057x448)
│   │   └── hero-shirt-display.jpg       # Ảnh áo sơ mi trắng trên sofa (phụ trợ)
│   ├── outfits/
│   │   ├── outfit-black-grey.png        # Outfit 1: Áo Đen + Quần Xám (312x427)
│   │   ├── outfit-blue-grey.png         # Outfit 2: Áo Xanh + Quần Xám (308x427)
│   │   └── outfit-green-black.png       # Outfit 3: Áo Xanh + Quần Đen (304x429)
│   ├── products/
│   │   ├── shirt-blue-long.jpg          # Áo sơ mi dài tay xanh pastel
│   │   ├── shirt-navy-short.jpg         # Áo sơ mi ngắn tay xanh navy
│   │   ├── shirt-cream-long.jpg         # Áo sơ mi dài tay vàng kem
│   │   ├── pants-black.png              # Quần tây co giãn đen
│   │   ├── pants-beige.png              # Quần tây co giãn be sáng (Active)
│   │   └── pants-charcoal.png           # Quần tây co giãn xám than
│   ├── charts/
│   │   ├── size-chart-shirts.png        # BẢNG SIZE ÁO NAM (Độ nét cao 1962x801)
│   │   └── size-chart-pants.png         # BẢNG SIZE QUẦN NAM (Độ nét cao 1905x825)
│   └── lead/
│       └── form-bg-models.png           # Nền 2 người mẫu công sở cho Lead Form glassmorphism (1672x941)
└── assets-raw/                          # Lưu trữ an toàn các tệp thiết kế gốc Canva và PNG nguồn
```

---

## 2. Bảng đối chiếu chi tiết tài nguyên

| STT | Tên file | Kích thước | Vị trí sử dụng | Trạng thái | Nguồn gốc / Ghi chú |
|:---:|:---|:---:|:---|:---:|:---|
| **1** | `hero-banner.png` | 1057x448 px | Hero Section | 🟢 Đã thêm | Banner thiết kế mới 2026 |
| **2** | `outfit-black-grey.png` | 312x427 px | Outfit Check 1 | 🟢 Đã thêm | Áo Đen + Quần Xám |
| **3** | `outfit-blue-grey.png` | 308x427 px | Outfit Check 2 | 🟢 Đã thêm | Áo Xanh + Quần Xám |
| **4** | `outfit-green-black.png` | 304x429 px | Outfit Check 3 | 🟢 Đã thêm | Áo Xanh + Quần Đen |
| **5** | `form-bg-models.png` | 1672x941 px | Lead Form Background | 🟢 Đã thêm | Nền 2 người mẫu công sở cao cấp |
| **6** | `shirt-blue-long.jpg` | 300x380 px | Sơ mi 1 | 🟢 Đã tối ưu | File gốc chuẩn |
| **7** | `shirt-navy-short.jpg` | 300x380 px | Sơ mi 2 | 🟢 Đã tối ưu | File gốc chuẩn |
| **8** | `shirt-cream-long.jpg` | 300x380 px | Sơ mi 3 | 🟢 Đã tối ưu | File gốc chuẩn |
| **9** | `pants-black.png` | 440x1020 px | Quần tây 1 | 🟢 File gốc Canva | Độ phân giải cao, trong suốt |
| **10**| `pants-beige.png` | 440x1020 px | Quần tây 2 (Active) | 🟢 File gốc Canva | Viền màu tím chuẩn thiết kế |
| **11**| `pants-charcoal.png` | 440x1020 px | Quần tây 3 | 🟢 File gốc Canva | Độ phân giải cao, trong suốt |
| **12**| `size-chart-shirts.png` | 1962x801 px | Bảng size áo nam | 🟢 Độ nét cao | Trích xuất chuẩn sắc nét |
| **13**| `size-chart-pants.png` | 1905x825 px | Bảng size quần nam | 🟢 Độ nét cao | Trích xuất chuẩn sắc nét |
| **14**| `favicon.svg` | Vector 64x64 | `public/favicon.svg` | 🟢 SVG chuẩn | Owen O-mark |
| **15**| `og-image.jpg` | 1200x630 px | `public/og-image.jpg` | 🟢 Chuẩn SEO | Banner chia sẻ MXH |
