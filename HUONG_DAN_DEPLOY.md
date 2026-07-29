# Hướng Dẫn Deploy & Cài App (PWA)

---

## 📤 Cập Nhật Web Lên Vercel (qua GitHub)

Dự án đã kết nối GitHub (`TuiTenHiu/study-jlpt`) → Vercel tự động deploy.

### 3 lệnh cập nhật:
```bash
git add .
git commit -m "Mô tả thay đổi"
git push origin main
```
Sau ~15–30 giây, Vercel tự cập nhật. Nhấn **F5** để xem kết quả.

> 💡 Nếu báo lỗi conflict: chạy `git pull origin main` trước rồi push lại.

---

## 📱 Cài App Trên Điện Thoại (PWA)

App này là **Progressive Web App** — người dùng có thể cài lên màn hình chính như app thật, **không cần App Store / Play Store**.

---

### 🍎 iOS (iPhone / iPad) — Safari

1. Mở **Safari** và truy cập địa chỉ web của app (VD: `https://study-jlpt.vercel.app`)
2. Nhấn nút **Chia sẻ** (biểu tượng ô vuông có mũi tên ↑ ở thanh dưới)
3. Kéo xuống và chọn **"Thêm vào màn hình chính"** (Add to Home Screen)
4. Đặt tên (hoặc giữ nguyên **StudyJLPT**) → Nhấn **Thêm**
5. App xuất hiện trên màn hình chính với icon riêng ✅

> ⚠️ Phải dùng **Safari** — Chrome/Firefox trên iOS không hỗ trợ cài PWA.

---

### 🤖 Android — Chrome

1. Mở **Chrome** và truy cập địa chỉ web
2. Chrome tự hiện banner **"Thêm Study JLPT vào màn hình chính"** → Nhấn **Cài đặt**
3. Hoặc: nhấn menu ⋮ (3 chấm góc trên phải) → chọn **"Thêm vào màn hình chính"**
4. Nhấn **Thêm** để xác nhận
5. App xuất hiện như app thật trên màn hình chính ✅

> ✅ Android hỗ trợ đầy đủ: icon, offline, fullscreen.

---

## ✨ Sau khi cài, app sẽ:
- Chạy **fullscreen** (không có thanh địa chỉ)
- Hoạt động **offline** (nhờ Service Worker cache)
- Có **icon riêng** trên màn hình chính
- Tự cập nhật khi có kết nối mạng
