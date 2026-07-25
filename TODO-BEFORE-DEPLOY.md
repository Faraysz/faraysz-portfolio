# ✅ TODO Before Deploy — Faraysz Portfolio

Checklist sebelum upload website ke internet:

---

## 🔥 WAJIB (Setup EmailJS)

- [ ] **Daftar EmailJS:** https://www.emailjs.com/
  - Gunakan email: faraytodiatmajaya@gmail.com
  
- [ ] **Buat Gmail Service** di EmailJS dashboard
  - Catat Service ID (contoh: `service_abc1234`)
  
- [ ] **Buat Email Template** di EmailJS dashboard
  - To Email: `faraytodiatmajaya@gmail.com`
  - Catat Template ID (contoh: `template_xyz5678`)
  
- [ ] **Dapatkan Public Key** dari Account settings
  - Catat Public Key (contoh: `AbCdEfGh123456`)

- [ ] **Update `contact.html`** (baris 121)
  ```javascript
  emailjs.init('AbCdEfGh123456'); // Ganti dengan Public Key Anda
  ```

- [ ] **Update `assets/js/main.js`** (baris 108)
  ```javascript
  await emailjs.send('service_abc1234', 'template_xyz5678', {
  ```

- [ ] **Test form** sebelum deploy
  - Buka `contact.html` di browser
  - Kirim pesan test
  - Cek email masuk ke faraytodiatmajaya@gmail.com

📄 **Panduan lengkap:** `EMAILJS-QUICK-START.md`

---

## 📸 Direkomendasikan (Konten)

- [ ] Tambahkan **foto profil** di `about.html`
- [ ] Tambahkan **screenshot proyek** di `assets/img/`
- [ ] Update **link GitHub** (ganti `https://github.com` dengan link asli)
- [ ] Update **link LinkedIn** (ganti `https://linkedin.com` dengan link asli)
- [ ] Buat **favicon** (bisa pakai https://favicon.io/)
- [ ] Review semua **placeholder text** di HTML

---

## 🚀 Opsional (SEO & Analytics)

- [ ] Tambahkan **Open Graph tags** untuk preview di social media
- [ ] Tambahkan **Google Analytics** (tracking visitor)
- [ ] Buat **sitemap.xml** (https://www.xml-sitemaps.com/)
- [ ] Buat **robots.txt**
- [ ] Minify CSS/JS (bisa pakai https://www.minifier.org/)
- [ ] Compress images ke WebP

---

## 🌐 Deploy Options

Pilih salah satu:

### 1. GitHub Pages (Gratis)
1. Push ke GitHub repo
2. Settings → Pages → Deploy from branch `main`
3. Website live di `https://username.github.io/repo-name`

### 2. Netlify (Gratis)
1. Drag & drop folder ke https://app.netlify.com/drop
2. Dapat domain: `https://random-name.netlify.app`
3. (Opsional) Connect custom domain

### 3. Vercel (Gratis)
1. Import dari GitHub
2. Deploy otomatis setiap push
3. Dapat domain: `https://project-name.vercel.app`

---

## 🧪 Test Sebelum Deploy

- [ ] Buka `index.html` → Check semua link works
- [ ] Buka `about.html` → Check skill bars animate
- [ ] Buka `projects.html` → Check filter works
- [ ] Buka `stack.html` → Check layout
- [ ] Buka `contact.html` → **TEST FORM KIRIM EMAIL**
- [ ] Test di mobile (responsive check)
- [ ] Test di browser lain (Chrome, Firefox, Edge)

---

## 📊 After Deploy

- [ ] Test form kontak di live website
- [ ] Submit ke Google Search Console
- [ ] Share link di social media
- [ ] Monitor EmailJS dashboard untuk email masuk

---

## 🆘 Jika Ada Masalah

**Form tidak kirim:**
- Cek console browser (F12) untuk error
- Pastikan Service ID, Template ID, Public Key benar
- Cek quota EmailJS (200 email/bulan gratis)

**Email masuk spam:**
- Buka email, klik "Not spam"
- Buat filter Gmail (lihat `EMAILJS-QUICK-START.md`)

**Support:**
- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

## 🎯 Priority Order

**HARI INI:**
1. ✅ Setup EmailJS (15 menit)
2. ✅ Test form kontak
3. ✅ Deploy ke Netlify/Vercel

**MINGGU INI:**
1. Tambah screenshot proyek
2. Update link sosial media
3. Buat favicon

**BULAN INI:**
1. Google Analytics
2. SEO optimization
3. Blog section (opsional)

---

**Good luck! 🚀**
