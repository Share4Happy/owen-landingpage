# Owen - Landing Page Thời Trang Công Sở Nam Cao Cấp

Landing page chính thức cho thương hiệu thời trang nam **Owen**, được xây dựng với kiến trúc tối ưu hiệu năng, chuẩn SEO kỹ thuật, đạt chuẩn tiếp cận WCAG AA và tích hợp carousel tin tức tự động từ WordPress REST API.

---

## 1. Yêu cầu hệ thống
- **Node.js:** phiên bản LTS `v20.x` hoặc `v22.x` (đã kiểm thử tương thích hoàn hảo trên Node `v22.15.1`).
- **npm:** `>= 10.0.0`
- **Công nghệ cốt lõi:** Vite 6 + Vanilla HTML5 + CSS3 (Design Tokens) + ES Modules thuần. Không phụ thuộc framework cồng kềnh, tải siêu nhanh.

---

## 2. Hướng dẫn cài đặt & khởi chạy

### Cài đặt dependencies:
```bash
npm install
```

### Chạy môi trường phát triển (Local Dev):
```bash
npm run dev
```
Trang web sẽ khả dụng tại: `http://localhost:5173/`

### Build bản Production:
```bash
npm run build
```
Thư mục xuất bản tĩnh: `dist/`

### Chạy thử bản Preview Production:
```bash
npm run preview
```
Server preview sẽ khởi chạy tại: `http://localhost:4173/`

---

## 3. Biến môi trường (.env)

Tạo tệp `.env` dựa trên `.env.example`:

```env
# URL trang web khi deploy
VITE_SITE_URL=https://username.github.io/owen/

# Base path cho GitHub Pages ('./' cho portable, hoặc '/owen/' cho project repo)
VITE_BASE_PATH=./

# WordPress REST API cấu hình chuyên mục 208
VITE_WP_API_URL=https://share4happy.com/wp-json/wp/v2/posts
VITE_WP_CATEGORY_ID=208
VITE_WP_POSTS_PER_PAGE=5

# Webhook tiếp nhận form đăng ký (Google Sheets / API endpoint)
VITE_FORM_ENDPOINT=
```

---

## 4. Hướng dẫn chỉnh sửa & thay đổi nội dung

### 4.1. Thay thế hình ảnh sản phẩm
Toàn bộ ảnh tĩnh được quản lý tập trung tại `src/scripts/images.js`:
- Muốn đổi ảnh áo sơ mi hoặc quần tây: Thêm ảnh mới vào `src/assets/images/`, sau đó cập nhật đường dẫn `import` trong `src/scripts/images.js`.
- Không cần can thiệp hay sửa đổi cấu trúc HTML/CSS của components.

### 4.2. Cập nhật bài viết WordPress
Cấu hình API nằm tại `src/scripts/config.js` (hoặc thông qua file `.env`):
- Để đổi chuyên mục khác: Cập nhật `VITE_WP_CATEGORY_ID`.
- Để đổi số lượng bài hiển thị: Cập nhật `VITE_WP_POSTS_PER_PAGE`.

### 4.3. Nối backend cho Form Đăng ký
Trong `src/scripts/config.js`, điền URL webhook vào `formEndpoint`:
```javascript
formEndpoint: 'https://script.google.com/macros/s/.../exec'
```
Form đã được viết sẵn bộ lọc validate số điện thoại Việt Nam (10 chữ số), tên, email và hiệu ứng loading/thông báo thành công mượt mà.

---

## 5. Hướng dẫn Triển khai GitHub Pages (GitHub Actions)

Dự án đã tích hợp sẵn workflow tự động hóa tại `.github/workflows/deploy.yml`.

### Các bước kích hoạt:
1. Đẩy code lên GitHub repository (nhánh `main` hoặc `master`).
2. Truy cập vào kho lưu trữ trên GitHub $\rightarrow$ chọn **Settings** $\rightarrow$ chọn mục **Pages** ở menu bên trái.
3. Tại phần **Build and deployment** $\rightarrow$ **Source**, chọn: **GitHub Actions**.
4. GitHub sẽ tự động kích hoạt workflow `Deploy Landing Page to GitHub Pages`.
5. Sau khi workflow hoàn thành (khoảng 1 - 2 phút), URL trang web sẽ xuất hiện trên trang Settings > Pages.

### Lưu ý quan trọng:
- **Nếu thấy trang trắng sau khi deploy:** Kiểm tra lại cấu hình `base` trong `vite.config.js` hoặc biến môi trường `VITE_BASE_PATH`. Mặc định dự án đã để `./` giúp tương thích tự động với mọi dạng URL repository.
- **Cache của GitHub Pages:** CDN GitHub Pages có thể lưu cache khoảng 5–10 phút sau mỗi lần deploy.
- **Custom Domain:** Nếu bạn gắn tên miền riêng (ví dụ `owen.vn`), tạo tệp `public/CNAME` chứa domain của bạn và bật tính năng **Enforce HTTPS** trong GitHub Pages settings.

---

## 6. Xác minh Google Search Console & SEO
- Tệp `public/robots.txt` và `public/sitemap.xml` đã được cấu hình chuẩn tĩnh.
- Sau khi có tên miền chính thức, cập nhật thẻ `<link rel="canonical">` trong `index.html` và URL trong `public/sitemap.xml`.
- Khai báo sitemap trên Google Search Console: `https://your-domain.com/sitemap.xml`.

