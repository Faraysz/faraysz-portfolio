# Cara Menjalankan Website Faraysz Portfolio

Website ini 100% statis (HTML + CSS + JS murni) — tidak ada proses build.
Ada 3 cara menjalankan, dari yang paling cepat sampai yang online untuk publik.

---

## 1. Buka langsung di browser (paling cepat)

Double-click `index.html`. Semua halaman akan jalan normal.

> Catatan: form kontak tetap berfungsi (fallback WhatsApp), tapi beberapa
> browser membatasi fetch lokal. Untuk pengalaman terbaik pakai cara 2.

## 2. Local server (direkomendasikan untuk development)

Dari folder proyek, jalankan salah satu:

```bash
# Python (biasanya sudah ada di Windows/Mac/Linux)
python3 -m http.server 8080

# atau Node.js
npx serve .
```

Lalu buka **http://localhost:8080** di browser.

Halaman yang tersedia:
| Halaman | URL |
|---|---|
| Beranda | http://localhost:8080/index.html |
| Proyek | http://localhost:8080/projects.html |
| Stack | http://localhost:8080/stack.html |
| Tentang | http://localhost:8080/about.html |
| Kontak | http://localhost:8080/contact.html |

Untuk mengaktifkan kirim email via EmailJS (opsional):
```bash
cp assets/js/emailjs-config.example.js assets/js/emailjs-config.js
# lalu isi 3 key di file itu (publicKey, serviceId, templateId)
```
Tanpa file config itu, form otomatis fallback ke WhatsApp — tidak error.

## 3. Online gratis via GitHub Pages (untuk publik)

Workflow deploy **sudah terpasang** di `.github/workflows/jekyll-gh-pages.yml`,
jadi cukup push dan website otomatis live:

1. Push repo ini ke GitHub (username: `faraysz`, nama repo: `faraysz-portfolio`)
2. Tunggu 1–2 menit, cek tab **Actions** — workflow "Deploy Jekyll..." harus hijau
3. Pastikan **Settings → Pages → Source = GitHub Actions**
4. Website live di: **https://faraysz.github.io/faraysz-portfolio/**

Setiap kali `git push` ke branch `main`, website otomatis ter-deploy ulang.

> **Kalau nama repo / username berbeda:** URL website akan berbeda juga.
> Saat itu terjadi, ganti alamat di 4 tempat (find & replace):
> `index.html`, `sitemap.xml`, `robots.txt`, dan tag canonical di tiap halaman —
> cari teks `https://faraysz.github.io/faraysz-portfolio`.

### Alternatif hosting lain
- **Netlify**: drag & drop folder ke https://app.netlify.com/drop
- **Vercel**: import repo GitHub, deploy otomatis

---

## Update domain custom (opsional)

Kalau punya domain sendiri (mis. `faraysz.dev`):
1. Tambahkan file `CNAME` berisi domain di root repo
2. Setting DNS: record CNAME → `faraysz.github.io`
3. Settings → Pages → Custom domain → isi domain
4. Ganti semua `https://faraysz.github.io/faraysz-portfolio` di
   `sitemap.xml`, `robots.txt`, canonical/OG tiap halaman, dan
   JSON-LD di `index.html` dengan domain baru
