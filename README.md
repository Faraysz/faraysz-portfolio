# Faraysz — Portfolio

Website portofolio profesional Faraytodi Atmajaya (Faraysz) — Fullstack Web & Mobile Developer.
Dibangun menggunakan HTML5, CSS3 kustom (dark tech-noir), dan JavaScript murni tanpa framework build.

---

## 📁 Dokumentasi & Panduan Proyek (`/docs`)

Semua dokumen panduan, petunjuk teknis, dan catatan proyek telah dirapikan ke dalam folder **[`docs/`](./docs/)**:

| Dokumen | Deskripsi |
| :--- | :--- |
| [🚀 CARA-MENJALANKAN.md](./docs/CARA-MENJALANKAN.md) | Panduan menjalankan web di lokal dan deployment ke GitHub Pages |
| [🔍 PANDUAN-SEO-GOOGLE.md](./docs/PANDUAN-SEO-GOOGLE.md) | Langkah verifikasi Google Search Console & optimasi SEO |
| [✉️ EMAILJS-SETUP-GUIDE.md](./docs/EMAILJS-SETUP-GUIDE.md) | Panduan lengkap integrasi form kontak via EmailJS |
| [⚡ EMAILJS-QUICK-START.md](./docs/EMAILJS-QUICK-START.md) | Panduan singkat dan checklist konfigurasi EmailJS |
| [🔑 CREDENTIALS-TEMPLATE.md](./docs/CREDENTIALS-TEMPLATE.md) | Template pencatatan kredensial dan API keys |
| [📝 CHANGELOG-CV-UPDATE.md](./docs/CHANGELOG-CV-UPDATE.md) | Log pembaruan portofolio berdasarkan CV terbaru |
| [📄 README-EMAILJS.txt](./docs/README-EMAILJS.txt) | Catatan ringkas konfigurasi EmailJS |

---

## 🌐 Struktur Halaman Utama

```
index.html                → Landing page utama (High-converting: Hero, Value, Proyek, Alur Kerja, FAQ)
projects.html             → Daftar proyek portofolio + filter kategori interaktif
stack.html                → Katalog teknologi (Bahasa, Framework, Tools, & Bidang Teknis)
about.html                → Profil pengembang, bio, & kemampuan teknis
contact.html              → Formulir kontak (EmailJS) & tautan WhatsApp langsung
404.html                  → Halaman error 404 kustom
assets/css/               → variables.css, base.css, components.css, animations.css
assets/js/main.js         → Logika interaksi: navbar, smooth scroll, reveal, counter
docs/                     → Seluruh berkas dokumentasi & panduan
```

---

## 🚀 Setup Cepat Form Kontak (EmailJS)

1. Buat akun di [emailjs.com](https://www.emailjs.com/).
2. Salin template konfigurasi:
   ```bash
   cp assets/js/emailjs-config.example.js assets/js/emailjs-config.js
   ```
3. Buka `assets/js/emailjs-config.js` lalu masukkan **Service ID**, **Template ID**, dan **Public Key** Anda.
   *(File ini sudah otomatis ada di `.gitignore` sehingga aman dari kebocoran key)*.

---

## 📄 Lisensi & Kredit

Dibuat dengan presisi oleh **Faraytodi Atmajaya (Faraysz)** © 2026.
Tersedia untuk proyek freelance, kolaborasi, dan rekrutmen.
