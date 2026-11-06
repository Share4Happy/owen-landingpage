# DỰ ÁN LANDING PAGE THƯƠNG HIỆU THỜI TRANG NAM OWEN
## TÀI LIỆU PHÂN TÍCH THIẾT KẾ & KẾ HOẠCH TRIỂN KHAI (TOÀN DIỆN 10 SECTIONS)

> **Mục tiêu:** Xây dựng landing page cho thương hiệu Owen (thời trang công sở nam cao cấp) theo bộ thiết kế hoàn chỉnh (bao gồm trọn bộ 9 ảnh thiết kế liên hoàn từ Header đến Footer), đạt chất lượng production-ready, tối ưu SEO, hiệu năng cao, giao diện responsive mượt mà và tích hợp carousel tin tức động từ WordPress REST API.  
> **Trạng thái:** Hoàn tất cập nhật Giai đoạn 1 sau khi tiếp nhận trọn bộ thiết kế. Sẵn sàng bước vào Giai đoạn 2.

---

## 1. KHẢO SÁT HIỆN TRẠNG WORKSPACE & MÔI TRƯỜNG KỸ THUẬT

1. **Thư mục dự án:** `d:\Projects\landing-page\owen`
2. **Môi trường kỹ thuật:**
   - **Node.js:** `v22.15.1` (LTS)
   - **npm:** `10.9.2`
   - **Python:** `3.13.8` (hỗ trợ kiểm tra, xử lý hình ảnh bổ trợ)
   - **Git:** Chưa khởi tạo repo. Sẽ khởi tạo `git init` và chuẩn bị cấu hình GitHub Actions deploy GitHub Pages.
3. **Tài nguyên có sẵn trong thư mục:**
   - Phát hiện 7 tệp hình ảnh xuất từ Canva: `OWEN_LandingPage_Canva_Edit.pdf (12.083 x 73.264 inch)...`
   - Qua phân tích pixel và màu sắc, 3 tệp có độ phân giải cao chính là ảnh sản phẩm Quần tây (Black, Beige, Charcoal) trong thiết kế. Chúng tôi đã lập danh mục và sẵn sàng đưa vào thư mục assets chuẩn.
4. **Trọn bộ 9 ảnh thiết kế do khách hàng cung cấp:**
   - `Ảnh 1 (Hero/Header):` Header navigation + Hero Section ("Định hình phong cách công sở...") + Showcase áo sơ mi trắng + Sub-banner "Owen Premium Collection".
   - `Ảnh 2 (Value Proposition):` Section ("Phong cách bắt đầu từ sự tự tin" / "Trang phục đang giúp bạn tăng sự tự tin ?").
   - `Ảnh 3 (Product Sơ mi):` Section The Owen Edit ("Chuẩn mực thời trang nam hiện đại" / Sơ mi sợi tre chống nhăn vượt trội - 3 màu).
   - `Ảnh 4 (Product Quần tây):` Section Quần tây co giãn ("Quần tây co giãn – Tự do vận động" - 3 màu, màu be viền tím nổi bật).
   - `Ảnh 5 (Social Proof & Services):` Section ("Lựa chọn của các quý ông thành đạt" + 4 chỉ số thống kê + 3 đánh giá 5 sao) & Section Dịch vụ ("Giải đáp thắc mắc & Cam kết").
   - `Ảnh 6 (FAQ & Size Guide):` Section Câu hỏi thường gặp (3 câu Q&A về chọn size, phối đồ, bảo hành) + Bảng size áo nam & Bảng size quần nam.
   - `Ảnh 7 (Lead Form):` Section Owen Style Guide ("Nâng tầm phong cách ngay hôm nay - Đăng kí nhận khuyến mãi" với 3 trường nhập liệu: Họ tên, Số điện thoại, Email không bắt buộc).
   - `Ảnh 8 (Footer):` Footer đầy đủ: Logo OWEN, Thông tin ĐKKD, Địa chỉ showroom Biên Hòa, Email, Hotline 0902 308 279, Slogan thương hiệu.
   - `Ảnh 9 (Sub-footer):` Dòng thông báo chân trang ("ĐÂY LÀ SẢN PHẨM CỦA MÔN HỌC TRUYỀN THÔNG ĐA PHƯƠNG TIỆN").

---

## 2. PHÂN TÍCH THIẾT KẾ CHI TIẾT (DESIGN SYSTEM & TOKENS)

### 2.1. Màu sắc chủ đạo (Color Palette)
- **Background chính (Dark Theme sang trọng):**
  - `--color-bg-primary: #121212;` (đen sâu thẳm, tạo cảm giác cao cấp)
  - `--color-bg-surface: #1a1a1a;` (nền các thẻ card, khối nội dung)
  - `--color-bg-surface-elevated: #242424;` (thẻ hover, form input)
  - `--color-bg-light: #ffffff;` (nền khung sản phẩm trưng bày, bảng size, nút primary)
  - `--color-bg-light-soft: #f8f9fa;` (nền mềm mại cho khung showcase)
- **Màu chữ (Typography Colors):**
  - `--color-text-primary: #ffffff;` (tiêu đề, heading, văn bản nổi bật)
  - `--color-text-secondary: #d1d5db;` (văn bản mô tả, bullet point)
  - `--color-text-muted: #9ca3af;` (sub-headline, eyebrow, nhãn phụ)
  - `--color-text-dark: #121212;` (chữ đen trên nền nút trắng/khung trắng)
- **Màu viền (Borders & Dividers):**
  - `--color-border-subtle: #27272a;` (viền mảnh tinh tế cho các dark cards)
  - `--color-border-active: #8b5cf6;` (viền tím nổi bật cho item active ở Section Quần tây)
- **Màu nhấn (Accents & Buttons):**
  - `--color-accent-blue: #1d4ed8;` (nút "Xem sản phẩm" ở Hero showcase)
  - `--color-accent-purple: #8b5cf6;` (khung viền highlight sản phẩm)
  - `--color-gold-star: #fbbf24;` (ngôi sao đánh giá 5 sao)

### 2.2. Kiểu chữ (Typography)
- **Font Family:** Google Fonts `Plus Jakarta Sans` kết hợp `Inter` (hỗ trợ tiếng Việt trọn vẹn, nét hình học hiện đại, sắc sảo). Fallback: `system-ui, -apple-system, sans-serif`.
- **Phân cấp Heading & Cỡ chữ:**
  - **H1 (Hero):** 2.25rem - 3.25rem (36px - 52px), `font-weight: 700`, `letter-spacing: 0.04em`, `line-height: 1.2`, `text-transform: uppercase`.
  - **H2 (Section Titles):** 1.75rem - 2.5rem (28px - 40px), `font-weight: 700`, `letter-spacing: 0.05em`, `line-height: 1.3`, `text-transform: uppercase`.
  - **H3 (Sub-sections / Product Titles):** 1.25rem - 1.5rem (20px - 24px), `font-weight: 700`, `letter-spacing: 0.03em`, `text-transform: uppercase`.
  - **Eyebrow / Category Tag:** 0.8125rem - 0.875rem (13px - 14px), `font-weight: 600`, `letter-spacing: 0.12em`, `text-transform: uppercase`, `color: var(--color-text-muted)`.
  - **Body text:** 0.9375rem - 1.0625rem (15px - 17px), `line-height: 1.65`, `font-weight: 400`.
  - **Stat Numbers:** 2.5rem - 3.5rem (40px - 56px), `font-weight: 800`.

### 2.3. Bố cục, Spacing, Bo góc & Hiệu ứng
- **Container Max-Width:** `1200px` (desktop chuẩn, canh giữa, padding 20px - 32px ở hai bên).
- **Section Vertical Spacing:** `padding: 5rem 0;` trên desktop; `3.5rem 0;` trên mobile.
- **Border Radius:**
  - Nút bấm và thẻ con: `6px` - `8px` (gọn gàng, sang trọng, không bo tròn quá đà).
  - Khung ảnh sản phẩm & bảng size: `8px`.
  - Icon tròn bên trái Hero: `50%` (hình tròn hoàn hảo viền xanh).
- **Bóng mờ (Box Shadow):**
  - `--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.4);`
  - `--shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.6);`

---

## 3. DANH SÁCH CÁC SECTION THEO ĐÚNG THỨ TỰ THIẾT KẾ

```
1. Header & Navigation (Fixed / Sticky với logo OWEN, menu links, nút "MUA NGAY", mobile drawer)
2. Hero Section ("Định hình phong cách công sở - Lịch lãm từng chi tiết")
   └── Khối trái: Headline, CTAs, 3 cam kết icon tròn (Thoải mái, Chỉnh chu, Dễ phối); Khối phải: Ảnh showcase sơ mi trắng + nút "XEM SẢN PHẨM"
3. Sub-Hero Banner ("OWEN PREMIUM COLLECTION - Tinh giản trong thiết kế. Khác biệt trong phong thái.")
4. Value Proposition ("PHONG CÁCH BẮT ĐẦU TỪ SỰ TỰ TIN" / "TRANG PHỤC ĐANG GIÚP BẠN TĂNG SỰ TỰ TIN ?")
   └── Grid 3 thẻ: 01 Chống nhăn vượt trội, 02 Quần tây công sở gọn gàng, 03 Đồng hành không khuôn mẫu
5. Product Category 1: The Owen Edit ("CHUẨN MỰC THỜI TRANG NAM HIỆN ĐẠI")
   └── 3 khung áo sơ mi (Xanh pastel, Xanh navy, Vàng kem) + Khối thông số "ÁO SƠ MI SỢI TRE – CHỐNG NHĂN VƯỢT TRỘI"
6. Product Category 2: Quần tây co giãn ("QUẦN TÂY CO GIÃN – TỰ DO VẬN ĐỘNG")
   └── 3 khung quần tây (Đen, Be sáng [viền tím active], Xám than) + Khối thông số chi tiết
7. Social Proof & Testimonials ("LỰA CHỌN CỦA CÁC QUÝ ÔNG THÀNH ĐẠT")
   └── 4 chỉ số thống kê (15+ năm, 1,000+ thiết kế, 98% chất liệu, 4.9/5) + 3 thẻ đánh giá khách hàng 5 sao
8. Services & Commitments ("DỊCH VỤ & CAM KẾT / GIẢI ĐÁP THẮC MẮC & CAM KẾT")
   └── 3 thẻ cam kết: Tư vấn phong cách, Hỗ trợ đổi trả, Chất liệu chọn lọc
9. FAQ & Size Guide ("CÂU HỎI THƯỜNG GẶP" & BẢNG SIZE ÁO / QUẦN)
   └── Cột trái: 3 câu hỏi (Làm sao chọn size phù hợp?, Có thể phối đồ theo nhu cầu không?, Chính sách bảo hành uy tín); Cột phải: 2 Bảng size áo nam & quần nam
10. WordPress Dynamic Posts Carousel (Section bài viết từ API chuyên mục 208)
    └── Tiêu đề: "KIẾN THỨC & CẢM HỨNG PHONG CÁCH"; Carousel continuous marquee vô hạn tự trôi, pause khi hover/focus, hỗ trợ vuốt chạm
11. Main Conversion Goal: Form Đăng Ký Khuyến Mãi ("OWEN STYLE GUIDE / NÂNG TẦM PHONG CÁCH NGAY HÔM NAY")
    └── Khung thẻ dark card chuẩn thiết kế: "ĐĂNG KÍ NHẬN KHUYẾN MÃI", 3 input (Họ và tên, Số điện thoại, Email không bắt buộc), nút "ĐĂNG KÝ NGAY"
12. Footer
    └── Logo OWEN, Thông tin ĐKKD tỉnh Đồng Nai, Địa chỉ Showroom Kios 10 bv Quân Y 7B Biên Hòa, Email, Hotline 0902 308 279, Slogan
13. Sub-Footer
    └── "ĐÂY LÀ SẢN PHẨM CỦA MÔN HỌC TRUYỀN THÔNG ĐA PHƯƠNG TIỆN"
```

---

## 4. KẾT QUẢ GỌI THỬ THỰC TẾ WORDPRESS REST API (MỤC 2B)

- **Endpoint:** `https://share4happy.com/wp-json/wp/v2/posts?categories=208&per_page=5&_embed`
- **Kết quả HTTP Status:** `200 OK`
- **Kiểm tra CORS thực tế:** Đã test với `Origin: http://localhost:5173` và `Origin: https://owen.github.io`. Header phản hồi:
  `access-control-allow-origin: http://localhost:5173` / `access-control-allow-origin: https://owen.github.io`
  $\rightarrow$ **Hoàn toàn hoạt động trực tiếp từ trình duyệt trên GitHub Pages mà không bị CORS.**
- **Dữ liệu 5 bài viết:** Đầy đủ `id`, `link`, `date`, `title.rendered`, `excerpt.rendered`, và `_embedded['wp:featuredmedia'][0].source_url`.
- **Kỹ thuật xử lý an toàn:** Dùng `DOMParser` để làm sạch HTML entities và thẻ `<p>`, chuẩn hóa thành `{ id, title, excerpt, url, imageUrl, imageAlt, date }`. Fallback placeholder nếu bài thiếu ảnh.
- **Carousel Animation:** Continuous marquee animation bằng CSS transform mượt mà, pause khi hover/focus, hỗ trợ phím, nút điều khiển Pause/Play WCAG và tôn trọng `prefers-reduced-motion`.

---

## 5. THIẾT KẾ CHI TIẾT KHỐI FORM ĐĂNG KÝ CHUYỂN ĐỔI (ẢNH 7)

- **Eyebrow:** `OWEN STYLE GUIDE`
- **Tiêu đề lớn:** `NÂNG TẦM PHONG CÁCH NGAY HÔM NAY`
- **Thẻ form:** Nền xám đậm `#1a1a1a`, bo góc `8px`, căn giữa màn hình.
- **Tiêu đề trong form:** `ĐĂNG KÍ NHẬN KHUYẾN MÃI`
- **Mô tả:** `Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn`
- **3 Trường nhập liệu:**
  1. `HỌ VÀ TÊN` (Placeholder, input text, required, minlength 2)
  2. `SỐ ĐIỆN THOẠI` (Placeholder, input tel, required, regex SĐT Việt Nam)
  3. `EMAIL (KHÔNG BẮT BUỘC)` (Placeholder, input email)
- **Nút gửi:** `ĐĂNG KÝ NGAY` (Nút trắng chữ đen, uppercase bold, có loading state spinner)
- **Client validation & Feedback:** Thông báo lỗi trực quan ngay dưới từng ô input nếu nhập sai, hiển thị trạng thái hoàn thành cảm ơn sang trọng sau khi gửi.

---

## 6. KẾ HOẠCH TRIỂN KHAI THEO THỨ TỰ ƯU TIÊN

| Giai đoạn | Nội dung chính | Tiêu chí hoàn thành (DoD) |
|:---|:---|:---|
| **Giai đoạn 1** *(Hoàn thành)* | Phân tích 9 ảnh thiết kế, gọi thử API thật, kiểm tra CORS, lập danh mục assets, xây dựng tài liệu | Đầy đủ `docs/PROJECT_NOTES.md` và `docs/ASSETS_TODO.md`. |
| **Giai đoạn 2** | Khởi tạo dự án Vite vanilla, tạo cấu trúc thư mục, cấu hình `package.json`, `vite.config.js`, design tokens CSS, GitHub Actions workflow | `npm run dev` và `npm run build` chạy thành công không cảnh báo. Khung token hoàn chỉnh. |
| **Giai đoạn 3** | Xây dựng lần lượt từng section từ Header đến Footer theo đúng thiết kế; tích hợp WordPress Carousel động và Form đăng ký | Mọi section hiển thị chuẩn desktop, tương tác mượt mà, áp dụng nguyên tắc "khung trước, ảnh sau". |
| **Giai đoạn 4** | Tối ưu Responsive (320px, 375px, 390px, 430px, 768px, 1024px, 1440px, 1920px), Accessibility WCAG AA, bàn phím điều hướng, reduced motion | Không tràn ngang (overflow-x), carousel vuốt mượt trên mobile, điều hướng bàn phím đầy đủ. |
| **Giai đoạn 5** | SEO kỹ thuật (Canonical, H1 duy nhất, Semantic HTML, Open Graph, Favicon, robots.txt, sitemap.xml) | Thư mục `dist/` chứa đầy đủ metadata chuẩn SEO. |
| **Giai đoạn 6** | Build production, test preview với base GitHub Pages, kiểm tra console, hiệu năng Lighthouse | Build sạch lỗi, các đường dẫn asset chuẩn, sẵn sàng deploy. |
| **Giai đoạn 7** | Viết README hướng dẫn triển khai, thiết lập GitHub Pages, bàn giao dự án | Báo cáo chi tiết và tài liệu hướng dẫn đầy đủ. |
| **Giai đoạn 8** *(Sau này)* | Gắn ảnh thật khi người dùng bổ sung | Khớp ảnh thật qua `images.js`, không làm thay đổi layout hay vỡ bố cục. |

---
*Tài liệu đã được cập nhật toàn diện theo đầy đủ ảnh thiết kế. Senior Frontend Engineer sẵn sàng triển khai ngay Giai đoạn 2.*
