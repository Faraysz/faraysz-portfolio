# 📧 EmailJS Setup Guide untuk Faraysz Portfolio

Panduan lengkap setup EmailJS agar email dari form kontak langsung masuk ke **faraytodiatmajaya@gmail.com** dan tidak masuk spam.

---

## 🚀 LANGKAH 1: Daftar EmailJS

1. Buka https://www.emailjs.com/
2. Klik **"Sign Up Free"**
3. Daftar dengan Gmail Anda: **faraytodiatmajaya@gmail.com**
4. Verifikasi email (cek inbox)
5. Login ke dashboard EmailJS

---

## ⚙️ LANGKAH 2: Buat Email Service

Di dashboard EmailJS:

1. Klik **"Email Services"** di sidebar
2. Klik **"Add New Service"**
3. Pilih **"Gmail"**
4. Klik **"Connect Account"**
5. Login dengan **faraytodiatmajaya@gmail.com**
6. Izinkan akses EmailJS ke Gmail
7. **Service ID** akan muncul (contoh: `service_abc1234`)
8. **CATAT Service ID ini** ✍️

### Tips Anti-Spam Gmail:
- ✅ Gunakan akun Gmail Anda sendiri sebagai service
- ✅ Email akan dikirim DARI Gmail Anda KE Gmail Anda
- ✅ EmailJS menggunakan OAuth2 (aman, tidak pakai password)

---

## 📝 LANGKAH 3: Buat Email Template

1. Klik **"Email Templates"** di sidebar
2. Klik **"Create New Template"**
3. **Isi template dengan format ini:**

### Template Settings:
- **Template Name:** `Portfolio Contact Form`

### Email Template Content:

**Subject:**
```
Pesan Baru dari Portfolio: {{subject}}
```

**Content (Body):**
```html
<h2>Pesan Baru dari Portfolio Faraysz</h2>

<p><strong>Dari:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Jenis Proyek:</strong> {{subject}}</p>

<hr>

<h3>Pesan:</h3>
<p>{{message}}</p>

<hr>

<p style="color: #666; font-size: 12px;">
  Email ini dikirim dari form kontak di portfolio Faraysz<br>
  Balas langsung ke: {{reply_to}}
</p>
```

### Email Settings:
- **From Name:** `Faraysz Portfolio`
- **From Email:** `faraytodiatmajaya@gmail.com` (auto-filled)
- **To Email:** `faraytodiatmajaya@gmail.com` ← **PENTING!**
- **Reply To:** `{{reply_to}}` ← Ini akan isi email pengirim

4. Klik **"Save"**
5. **CATAT Template ID** yang muncul (contoh: `template_xyz5678`) ✍️

---

## 🔑 LANGKAH 4: Dapatkan Public Key

1. Klik **"Account"** di sidebar
2. Scroll ke bawah ke bagian **"API Keys"**
3. Lihat **"Public Key"** (contoh: `AbCdEfGh123456`)
4. **CATAT Public Key ini** ✍️

---

## 💻 LANGKAH 5: Update Kode Website

Sekarang masukkan credentials ke kode:

### A. Update `contact.html`

Buka file `contact.html`, cari baris ini (dekat akhir file):

```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // <<< GANTI INI
```

**GANTI dengan Public Key Anda:**
```javascript
emailjs.init('AbCdEfGh123456'); // Contoh, ganti dengan key Anda
```

### B. Update `assets/js/main.js`

Buka file `assets/js/main.js`, cari baris ini:

```javascript
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```

**GANTI dengan ID Anda:**
```javascript
await emailjs.send('service_abc1234', 'template_xyz5678', {
```

**Contoh lengkap:**
```javascript
await emailjs.send('service_abc1234', 'template_xyz5678', {
  from_name: form.name.value,
  from_email: form.email.value,
  subject: form.subject.value,
  message: form.message.value,
  reply_to: form.email.value
});
```

---

## 🧪 LANGKAH 6: Testing

1. Buka `contact.html` di browser (bisa localhost atau online)
2. Isi form test:
   - **Nama:** Test User
   - **Email:** test@example.com
   - **Jenis Proyek:** Web (Laravel)
   - **Pesan:** Ini adalah pesan test dari form kontak
3. Klik **"Kirim Pesan"**
4. Harus muncul **alert hijau "Pesan berhasil dikirim!"**
5. **Cek inbox** faraytodiatmajaya@gmail.com (refresh beberapa kali)
6. Email harus masuk dalam **1-2 menit**

### Kalau Tidak Masuk:

1. Cek **folder Spam/Junk** di Gmail
2. Buka **Console Browser** (F12) → Tab Console, lihat error
3. Cek **quota di dashboard EmailJS** (gratis: 200 email/bulan)
4. Pastikan Service ID, Template ID, dan Public Key sudah benar

---

## 🛡️ Tips Anti-Spam

### Mengapa EmailJS Tidak Masuk Spam:

✅ **Menggunakan Gmail OAuth2** → Email dikirim dari Gmail server resmi  
✅ **DKIM & SPF sudah built-in** → Gmail trust emailnya sendiri  
✅ **From & To sama** (faraytodiatmajaya → faraytodiatmajaya)  
✅ **Reply-to ke pengirim asli** → Bisa balas langsung  

### Jika Tetap Masuk Spam (Jarang Terjadi):

1. Di Gmail, buka email dari EmailJS
2. Klik **"Report not spam"**
3. Buat filter:
   - Klik **⋮** (titik 3) → "Filter messages like this"
   - From: `faraytodiatmajaya@gmail.com`
   - Subject contains: `Pesan Baru dari Portfolio`
   - ✅ Never send to spam
   - ✅ Mark as important

---

## 📊 Dashboard EmailJS

Setelah setup, Anda bisa:

- ✅ Monitor berapa email terkirim (200/bulan gratis)
- ✅ Lihat error log kalau ada yang gagal
- ✅ Upgrade ke paid plan jika perlu lebih (dari $7/bulan)

### Quota Gratis:
- 200 emails/bulan
- 2 email services
- 2 email templates
- Unlimited websites

---

## 🔥 Keunggulan EmailJS

| Fitur | Benefit |
|-------|---------|
| **No Backend** | Tidak perlu PHP/server |
| **100% Frontend** | Jalan di GitHub Pages, Netlify, Vercel |
| **Anti-Spam** | Pakai OAuth2 Gmail, DKIM/SPF built-in |
| **Reply-To** | Email balas langsung ke pengirim |
| **Rate Limiting** | Anti-bot otomatis |
| **Analytics** | Dashboard monitor email terkirim |

---

## 🆘 Troubleshooting

### Error: "Invalid public key"
→ Pastikan Public Key di `contact.html` sudah benar (copy-paste dari dashboard)

### Error: "Service or template not found"
→ Pastikan Service ID dan Template ID di `main.js` sudah benar

### Email tidak masuk sama sekali
→ Cek console browser (F12), lihat error detail

### Email masuk ke spam
→ Lakukan langkah filter Gmail di atas (sangat jarang terjadi)

### Quota habis
→ Upgrade ke paid plan atau tunggu bulan depan (reset otomatis)

---

## ✅ Checklist Setup

Copy checklist ini saat setup:

- [ ] Daftar EmailJS dengan faraytodiatmajaya@gmail.com
- [ ] Buat Email Service (Gmail), catat Service ID
- [ ] Buat Email Template, catat Template ID
- [ ] Catat Public Key dari Account settings
- [ ] Update `contact.html` dengan Public Key
- [ ] Update `assets/js/main.js` dengan Service ID & Template ID
- [ ] Test kirim form
- [ ] Cek inbox faraytodiatmajaya@gmail.com
- [ ] (Opsional) Buat filter Gmail anti-spam

---

## 📧 Support

Jika ada masalah:

1. **EmailJS Docs:** https://www.emailjs.com/docs/
2. **EmailJS Support:** support@emailjs.com
3. **Test Connection:** https://dashboard.emailjs.com/admin/integration/test

---

## 🎯 Summary

Setelah setup selesai:

1. User isi form di `contact.html`
2. JavaScript kirim data ke EmailJS
3. EmailJS forward ke **faraytodiatmajaya@gmail.com**
4. Anda terima email dalam 1-2 menit
5. Reply langsung, email balas ke user

**No PHP, no database, no spam!** 🚀
