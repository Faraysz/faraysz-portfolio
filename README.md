# Faraysz — Portfolio

Portfolio statis, ringan, tanpa build tool dan tanpa framework JS besar.
Stack: **HTML + CSS murni + Vanilla JS**. Tidak ada dependency npm, tidak ada
Tailwind CDN (yang berat karena compile JIT di browser) — semua sudah
di-compile jadi CSS biasa, jadi loading-nya cepat bahkan di koneksi lambat.

## Struktur folder

```
faraysz-portfolio/
├── index.html          # Beranda
├── about.html           # Tentang saya
├── projects.html         # Daftar proyek (dengan filter kategori)
├── stack.html            # Tools & teknologi
├── contact.html           # Form kontak
├── assets/
│   ├── css/
│   │   ├── variables.css   # Design tokens (warna, font, spacing)
│   │   ├── base.css        # Reset & elemen dasar
│   │   ├── components.css  # Navbar, button, card, form, footer
│   │   └── animations.css  # Semua keyframes & efek scroll-reveal
│   ├── js/
│   │   └── main.js         # Nav mobile, reveal animasi, typewriter,
│   │                       # counter angka, glow kursor, filter proyek,
│   │                       # form (visual only, belum terhubung backend)
│   └── img/                # Taruh foto/gambar proyek di sini
└── README.md
```

## Cara menjalankan

Tidak perlu build apa pun. Tinggal buka `index.html` langsung di browser,
atau untuk pengalaman terbaik (path relatif & font loading benar) jalankan
local server ringan:

```bash
# Python
python3 -m http.server 8080

# atau Node (kalau sudah terpasang)
npx serve .
```

Lalu buka `http://localhost:8080`.

## Animasi yang ditambahkan

- **Scroll reveal** — elemen fade-up saat masuk viewport (IntersectionObserver, hemat performa dibanding library scroll seperti AOS/GSAP).
- **Typewriter** di hero (eyebrow tag) — mengetik & menghapus beberapa frasa.
- **Counter angka** naik otomatis saat statistik terlihat.
- **Skill bar** mengisi otomatis saat section "Kemampuan Teknis" terlihat.
- **Glow kursor** mengikuti mouse di atas card (`::before` + CSS variable, tanpa JS berat).
- **Blob ambient** melayang pelan di background hero.
- **Filter proyek** client-side tanpa reload halaman.

## Kustomisasi cepat

- Ganti warna di `assets/css/variables.css` (semua warna terpusat di `:root`).
- Ganti isi teks langsung di masing-masing file `.html` — tidak ada templating,
  jadi cukup cari & edit.
- Tambahkan gambar proyek nyata di `assets/img/` lalu ganti placeholder ikon
  di `projects.html`.
- Ganti link GitHub/LinkedIn/email placeholder di navbar & footer setiap
  halaman.

## Catatan performa

- Tidak ada request ke CDN besar (Tailwind CDN dihapus, ~300KB+ JS runtime).
- Hanya 3 keluarga font (Inter, Plus Jakarta Sans, JetBrains Mono) dengan
  weight terbatas.
- Semua ikon pakai karakter Unicode/monospace, bukan icon font tambahan.
- Total aset CSS+JS custom sangat kecil (~15KB gabungan, belum di-minify).

## Setup Form Kontak

Form kontak menggunakan **EmailJS** — kirim email langsung dari frontend tanpa backend.

### 🚀 Setup Singkat:

1. Daftar di https://www.emailjs.com/ dengan **faraytodiatmajaya@gmail.com**
2. Buat Gmail service → Dapatkan **Service ID**
3. Buat email template → Dapatkan **Template ID**
4. Ambil **Public Key** dari Account settings
5. Update credentials di:
   - `contact.html` → Public Key
   - `assets/js/main.js` → Service ID & Template ID
6. Test form → Email masuk ke **faraytodiatmajaya@gmail.com**

📄 **Panduan lengkap:** Lihat file `EMAILJS-SETUP-GUIDE.md`

✅ Gratis 200 email/bulan  
✅ Tidak masuk spam (pakai Gmail OAuth2)  
✅ No backend needed

**Alternatif:** Lihat `SETUP-CONTACT-FORM.md` untuk opsi PHP Mail atau Formspree
