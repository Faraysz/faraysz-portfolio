# Panduan SEO: Agar Muncul di Pencarian Google ("faraysz" & kata kunci terkait)

Panduan ini menjelaskan (1) apa saja yang **sudah dipasang** di website ini,
(2) langkah-langkah yang **harus Anda lakukan sendiri** agar Google mengindeks
website, dan (3) cara mempertahankan/menaikkan peringkat.

> **Ekspektasi yang jujur:** tidak ada yang bisa *menjamin* posisi #1 di Google —
> itu algoritma Google. TAPI untuk kata kunci nama unik seperti **"faraysz"**
> kompetisinya nyaris nol, jadi posisi #1 sangat realistis, biasanya tercapai
> dalam beberapa hari sampai 2–4 minggu setelah Google mengindeks website.

---

## 1. Yang SUDAH terpasang di website ini (technical SEO)

| Komponen | File | Fungsi |
|---|---|---|
| Title & description per halaman, memuat "Faraysz" | semua `.html` | Google menampilkan ini di hasil pencarian |
| Canonical URL | tiap halaman | Mencegah duplikat konten |
| Open Graph + Twitter Card | tiap halaman | Preview rapi saat link dibagikan ke WA/LinkedIn/Twitter |
| Structured data JSON-LD (Person + WebSite) | `index.html` | Membantu Google memahami ini profil "Faraytodi Atmajaya (Faraysz)" |
| `robots.txt` + `sitemap.xml` | root | Petunjuk resmi untuk crawler Google |
| Favicon (SVG + PNG + apple-touch) | `assets/img/` | Ikon tampil di tab & hasil pencarian mobile |
| `site.webmanifest` | root | PWA-friendly, nama "Faraysz" muncul di Android |
| `404.html` | root | Halaman error rapi, tidak merusak crawling |
| Halaman berisi kata kunci: "Faraysz", "Faraytodi Atmajaya", "POLIJE", "Laravel", "Flutter", "React Native" | semua halaman | Relevansi konten |

## 2. Yang HARUS Anda lakukan (langkah wajib)

### Langkah A — Pastikan website online dulu
Ikuti `CARA-MENJALANKAN.md` bagian GitHub Pages sampai website live di
`https://faraysz.github.io/faraysz-portfolio/`. Google tidak bisa mengindeks
website yang tidak online.

### Langkah B — Daftar & verifikasi Google Search Console (15 menit)
1. Buka **https://search.google.com/search-console** → login pakai Gmail
2. Klik **Add property → URL prefix** → masukkan
   `https://faraysz.github.io/faraysz-portfolio/`
3. Pilih metode verifikasi **"HTML tag"** → Google memberi kode seperti:
   `<meta name="google-site-verification" content="abc123..." />`
4. Buka `index.html` di repo, cari komentar
   `VERIFIKASI GOOGLE SEARCH CONSOLE` dekat `</head>`, hapus komentar dan
   ganti `ISI_KODE_VERIFIKASI` dengan kode Anda:
   ```html
   <meta name="google-site-verification" content="abc123..." />
   ```
5. Commit & push → tunggu deploy hijau → klik **Verify** di Search Console

### Langkah C — Kirim sitemap (5 menit)
1. Di Search Console, menu **Sitemaps**
2. Isi: `sitemap.xml` → Submit
3. Status akan "Success / Couldn't fetch" — ulangi cek 1–2 hari kemudian

### Langkah D — Minta pengindeksan cepat (langsung hari ini)
1. Di Search Console, gunakan kolom **URL Inspection** di atas
2. Masukkan `https://faraysz.github.io/faraysz-portfolio/` → Enter
3. Klik **Request Indexing**. Ulangi untuk `projects.html` dan `about.html`
4. Biasanya terindeks dalam 1–7 hari

### Langkah E — Pastikan Google menemukan Anda dari luar (backlink)
Google mempercayai website yang **dirujuk tempat lain**. Buat tautan ke
website portfolio Anda di:
- Profil GitHub (Settings → Profile → Website/Bio) — `github.com/faraysz`
- Profil LinkedIn (Contact info → Website)
- Bio Instagram/TikTok/Twitter bila ada
- README repo GitHub proyek Anda lainnya
- Signature email (opsional)

Satu-dua tautan saja sudah cukup untuk nama unik seperti "faraysz".

## 3. Kata kunci target

Yang paling realistis #1:
- `faraysz` ← target utama, kompetisi nol
- `faraytodi atmajaya`
- `faraysz portfolio`
- `faraysz github`

Kata kunci jangka menengah (butuh konten & waktu lebih):
- `portfolio laravel polije`, `fullstack developer jember`,
  `jasa web laravel mahasiswa` — untuk ini, konten halaman harus
  makin kaya (tambahkan artikel/proyek nyata).

## 4. Cara mengecek hasilnya

1. Buka Google dalam mode **incognito** → ketik `faraysz`
2. Atau di Search Console → **Performance** → lihat query "faraysz",
   impressions & clicks akan naik setelah terindeks
3. Cek juga `site:faraysz.github.io/faraysz-portfolio` untuk melihat
   halaman yang sudah terindeks

## 5. Checklist lanjutan (opsional, menaikkan peringkat)

- [ ] Ganti data proyek contoh di `projects.html` dengan proyek nyata + link GitHub
- [ ] Tambah screenshot proyek di `assets/img/` (gambar ber-`alt` membantu Google Images)
- [ ] Tulis 2–3 artikel/catatan proyek (halaman blog sederhana) — konten baru = alasan Google kembali
- [ ] Aktifkan Google Analytics 4 atau gunakan Search Console saja (gratis & cukup)
- [ ] Setelah 1 bulan: cek Search Console → Pages → perbaiki error bila ada
- [ ] Bila ada domain custom: pasang domain utama (URL canonical satu-satunya)

## 6. Hal yang HARUS dihindari (dapat penalti Google)

- Jangan beli "jasa backlink" murah — berisiko penalti manual
- Jangan taruh kata kunci berulang tersembunyi (keyword stuffing)
- Jangan copy-paste konten orang lain
- Jangan ganti-ganti canonical URL tanpa alasan jelas
