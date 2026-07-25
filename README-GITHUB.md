# Faraysz — Portfolio

Portfolio statis, ringan, tanpa build tool dan tanpa framework JS besar.  
Stack: **HTML + CSS murni + Vanilla JS**

## 🚀 Quick Start

1. Clone repository ini
2. Setup EmailJS credentials (lihat di bawah)
3. Buka `index.html` di browser

Atau jalankan local server:
```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

---

## 📧 Setup Form Kontak (EmailJS)

Form kontak menggunakan EmailJS untuk kirim email tanpa backend.

### Step 1: Copy Config File

```bash
cp assets/js/emailjs-config.example.js assets/js/emailjs-config.js
```

### Step 2: Daftar EmailJS

1. Buka https://www.emailjs.com/
2. Sign up gratis (200 email/bulan)
3. Buat **Email Service** (pilih Gmail)
4. Buat **Email Template**
5. Dapatkan credentials:
   - **Public Key** (Account → API Keys)
   - **Service ID** (Email Services)
   - **Template ID** (Email Templates)

### Step 3: Isi Config

Edit `assets/js/emailjs-config.js`:

```javascript
const EMAILJS_CONFIG = {
  publicKey: 'your_public_key_here',
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here'
};
```

### Step 4: Test Form

Buka `contact.html` dan test kirim pesan!

📄 **Panduan lengkap:** Lihat file `EMAILJS-QUICK-START.md`

---

## 📁 Struktur Folder

```
faraysz-portfolio/
├── index.html              # Beranda
├── about.html              # Tentang saya
├── projects.html           # Daftar proyek
├── stack.html              # Tools & teknologi
├── contact.html            # Form kontak
├── assets/
│   ├── css/
│   │   ├── variables.css   # Design tokens
│   │   ├── base.css        # Reset & elemen dasar
│   │   ├── components.css  # Navbar, button, card, form
│   │   └── animations.css  # Keyframes & scroll-reveal
│   ├── js/
│   │   ├── main.js         # All interactions
│   │   ├── emailjs-config.js           # ⚠️ GITIGNORED
│   │   └── emailjs-config.example.js   # Template config
│   └── img/                # Images
└── README.md
```

---

## ✨ Fitur

- ✅ **Scroll reveal** dengan IntersectionObserver
- ✅ **Typewriter effect** di hero section
- ✅ **Counter animasi** untuk statistik
- ✅ **Skill bar** progresif
- ✅ **Cursor glow** pada card
- ✅ **Filter proyek** client-side
- ✅ **Form kontak** dengan EmailJS (no backend!)
- ✅ **Mobile responsive**

---

## 🎨 Kustomisasi

### Warna

Edit `assets/css/variables.css`:

```css
:root {
  --cyan: #00dbe7;
  --violet: #8a4bff;
  --bg: #0d0d0f;
  /* ... */
}
```

### Konten

Semua konten ada di file HTML. Cari & edit langsung:
- Proyek unggulan → `index.html`
- Semua proyek → `projects.html`
- Skill bars → `about.html`
- Tech stack → `stack.html`

### Link Sosial Media

Update di footer semua file HTML:
```html
<a href="https://github.com/yourusername">Github</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
<a href="https://wa.me/your-number">WhatsApp</a>
```

---

## 📊 Performa

- ✅ No build tools required
- ✅ No npm dependencies
- ✅ No CDN (kecuali Google Fonts & EmailJS SDK)
- ✅ Total CSS+JS custom: ~20KB
- ✅ Semua icon pakai emoji Unicode

---

## 🔒 Security & Git

File yang **TIDAK** di-commit (sudah di `.gitignore`):

```
assets/js/emailjs-config.js    # Berisi API keys
CREDENTIALS-TEMPLATE.md        # Template credentials
EMAILJS-*.md                   # Panduan setup
README-EMAILJS.txt             # Panduan text format
```

**⚠️ JANGAN commit API keys ke public repository!**

---

## 🚢 Deploy

### GitHub Pages

```bash
# Push ke GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Settings → Pages → Deploy from main branch
```

### Netlify

Drag & drop folder ke https://app.netlify.com/drop

### Vercel

```bash
vercel
```

---

## 📝 License

Free to use untuk portfolio pribadi. Kalau mau modifikasi bebas, tapi credit appreciated! 

---

## 📧 Kontak

- **Email:** faraytodiatmajaya@gmail.com
- **GitHub:** [@faraysz](https://github.com/faraysz)
- **LinkedIn:** [faraysz](https://linkedin.com/in/faraysz)
- **WhatsApp:** +62 823-3300-0473

---

**Made with ❤️ and ☕ by Faraysz**
