# Faraysz — Portfolio

Situs portofolio statis (HTML/CSS/JS murni, tanpa framework build). Deploy otomatis ke
GitHub Pages lewat workflow `.github/workflows/jekyll-gh-pages.yml` — Jekyll di sini
hanya menyalin file statis, jadi tidak ada langkah build khusus yang perlu disetel.

## Struktur

```
index.html                → Beranda (hero + typewriter, statistik, layanan, proyek unggulan)
projects.html             → Daftar proyek + filter kategori (Web / Mobile / IoT & AI)
stack.html                → Tech stack (skill bars + ekosistem tools)
about.html                → Tentang
contact.html              → Form kontak (EmailJS, dengan fallback WhatsApp)
404.html                  → Halaman error kustom (otomatis dipakai GitHub Pages)
assets/css/               → variables, base, components, animations (tema dark cyan-violet)
assets/js/main.js         → Interaksi: nav, reveal, counter, typewriter, filter, form
assets/js/emailjs-config.example.js → Contoh config EmailJS (copy → isi key)
assets/img/               → favicon (SVG+PNG), apple-touch-icon, og-image.jpg
sitemap.xml, robots.txt   → SEO: peta situs & aturan crawler
site.webmanifest          → Identitas PWA (nama "Faraysz", ikon, warna tema)
.github/workflows/        → Deploy GitHub Pages (tidak diubah)
```

## Panduan penting

- **Cara menjalankan website** (lokal & deploy GitHub Pages): `CARA-MENJALANKAN.md`
- **Agar muncul di pencarian Google** ("faraysz", dll): `PANDUAN-SEO-GOOGLE.md`

## SEO yang sudah terpasang

- Title & meta description per halaman + canonical URL + `robots` meta
- Open Graph & Twitter Card dengan gambar preview (`assets/img/og-image.jpg`)
- Structured data JSON-LD (`Person` Faraytodi Atmajaya / "Faraysz" + `WebSite`) di `index.html`
- `sitemap.xml` + `robots.txt` siap didaftarkan ke Google Search Console
- Favicon SVG/PNG/apple-touch + `site.webmanifest`
- Slot verifikasi Search Console sudah disiapkan (komentar di `index.html`)

## Setup form kontak (EmailJS)

1. Buat akun di [emailjs.com](https://www.emailjs.com/) → catat **Public Key**,
   buat **Email Service** dan **Email Template** (template "Contact Us" bawaan sudah
   cukup — variabel `{{name}}` dan `{{message}}`).
2. Salin file contoh lalu isi key-nya:
   ```
   cp assets/js/emailjs-config.example.js assets/js/emailjs-config.js
   ```
3. File `emailjs-config.js` **sengaja ada di `.gitignore`** — tidak ikut ter-push,
   jadi credentials tidak bocor di GitHub Pages.

**Fallback otomatis:** selama `emailjs-config.js` tidak ada (atau key masih
placeholder), tombol "Kirim Pesan" tidak akan error — pesan form otomatis dibuka
lewat WhatsApp (`wa.me/6282333000472`) dengan isi pesan terformat, plus info untuk
kirim manual ke `faraytodiatmajaya@gmail.com`.

## Data yang perlu Anda sesuaikan

- **Angka statistik** di `index.html` (cari `data-count`) — nilai contoh: 12+ proyek,
  8+ klien, 6+ teknologi, 24 jam respons.
- **Daftar proyek** di `projects.html` dan kartu unggulan di `index.html` — judul,
  deskripsi, dan tag di bawah ini adalah **data contoh yang realistis**, tinggal
  diganti dengan proyek asli. Link repo proyek belum ditautkan; tambahkan `<a>`
  ke GitHub bila repo-nya publik.

## Rangkuman perbaikan

- Menambahkan `index.html`, `projects.html`, `stack.html` yang sebelumnya hilang
  (nav menuju ke sana tapi filenya tidak ada → homepage Pages 404).
- Menghapus `assets/index.html` (halaman placeholder Diskon.com yang menutupi
  homepage — masih ada di riwayat git bila diperlukan).
- Form kontak tidak lagi crash saat `emailjs-config.js` tidak ada: guard
  `typeof EMAILJS_CONFIG` + `emailjs.init` yang aman + fallback WhatsApp.
- Menambahkan `404.html` dan `.gitignore`.
