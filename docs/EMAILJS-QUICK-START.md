# ⚡ EmailJS Quick Start — Faraysz Portfolio

Email langsung masuk ke: **faraytodiatmajaya@gmail.com** (tidak akan masuk spam!)

---

## 🎯 3 Langkah Setup (15 Menit)

### 📝 STEP 1: Daftar & Setup EmailJS

1. **Daftar:** https://www.emailjs.com/
   - Gunakan email: **faraytodiatmajaya@gmail.com**
   - Verifikasi email

2. **Buat Email Service:**
   - Dashboard → "Email Services" → "Add New Service"
   - Pilih: **Gmail**
   - Klik: "Connect Account"
   - Login dengan: **faraytodiatmajaya@gmail.com**
   - Izinkan akses
   - ✅ Dapat **Service ID** (contoh: `service_abc1234`)

3. **Buat Email Template:**
   - Dashboard → "Email Templates" → "Create New Template"
   
   **Subject:**
   ```
   Pesan Baru dari Portfolio: {{subject}}
   ```
   
   **Content:**
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
   
   **Settings:**
   - To Email: `faraytodiatmajaya@gmail.com`
   - Reply To: `{{reply_to}}`
   
   - ✅ Dapat **Template ID** (contoh: `template_xyz5678`)

4. **Dapatkan Public Key:**
   - Dashboard → "Account" → "API Keys"
   - ✅ Dapat **Public Key** (contoh: `AbCdEfGh123456`)

---

### 💻 STEP 2: Update Kode (Copy-Paste)

#### A. Update `contact.html`

Cari baris ini (baris 121):
```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // <<< GANTI INI
```

**GANTI dengan:**
```javascript
emailjs.init('AbCdEfGh123456'); // Ganti dengan Public Key Anda
```

#### B. Update `assets/js/main.js`

Cari baris ini (sekitar baris 108):
```javascript
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```

**GANTI dengan:**
```javascript
await emailjs.send('service_abc1234', 'template_xyz5678', {
```

**Contoh lengkap (baris 108-114):**
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

### 🧪 STEP 3: Test Form

1. Buka `contact.html` di browser
2. Isi form test:
   ```
   Nama: Test User
   Email: test@example.com
   Jenis Proyek: Web (Laravel)
   Pesan: Ini adalah pesan test dari form kontak
   ```
3. Klik **"Kirim Pesan"**
4. Harus muncul: **"Pesan berhasil dikirim!"** (alert hijau)
5. **Cek email:** faraytodiatmajaya@gmail.com (refresh, tunggu 1-2 menit)

✅ **Email masuk! Selesai!**

---

## 🛡️ Mengapa Tidak Masuk Spam?

EmailJS menggunakan **Gmail OAuth2**, jadi:

- ✅ Email dikirim dari **Gmail server resmi**
- ✅ DKIM & SPF **sudah built-in**
- ✅ From & To sama (faraytodiatmajaya → faraytodiatmajaya)
- ✅ Reply-to ke email pengirim asli

**Gmail trust emailnya sendiri**, jadi 99% tidak masuk spam!

---

## 🎁 Bonus Tips

### 1. Jika Email Masuk Spam (Jarang):

Di Gmail:
1. Buka email dari EmailJS
2. Klik **"Report not spam"**
3. Buat filter:
   - Klik **⋮** → "Filter messages like this"
   - From: `faraytodiatmajaya@gmail.com`
   - Subject contains: `Pesan Baru dari Portfolio`
   - ✅ Never send to spam

### 2. Notifikasi Push:

Install **Gmail app** di smartphone, enable notifikasi → Dapat alert langsung saat ada pesan baru!

### 3. Auto-Reply (Opsional):

Di EmailJS dashboard, bisa buat template kedua untuk auto-reply ke pengirim:
```
Terima kasih sudah menghubungi! Saya akan membalas dalam 1x24 jam.
```

---

## 📊 Quota Gratis

- ✅ 200 email/bulan
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Unlimited websites

Cukup untuk portfolio pribadi!

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Alert merah "Gagal mengirim" | Cek console browser (F12), pastikan Service ID & Template ID benar |
| Email tidak masuk | Cek folder Spam, pastikan Public Key sudah di-init |
| Error di console | Pastikan EmailJS SDK sudah load (cek Network tab) |
| Quota habis | Upgrade ke paid ($7/bulan) atau tunggu bulan depan |

---

## 📞 Support

- **Panduan lengkap:** `EMAILJS-SETUP-GUIDE.md`
- **EmailJS Docs:** https://www.emailjs.com/docs/
- **EmailJS Support:** support@emailjs.com

---

## ✅ Checklist

Centang saat setup:

- [ ] Daftar EmailJS dengan faraytodiatmajaya@gmail.com
- [ ] Buat Gmail Service → Dapatkan Service ID
- [ ] Buat Email Template → Dapatkan Template ID
- [ ] Dapatkan Public Key dari Account settings
- [ ] Update `contact.html` dengan Public Key
- [ ] Update `assets/js/main.js` dengan Service ID & Template ID
- [ ] Test kirim form
- [ ] Cek inbox faraytodiatmajaya@gmail.com
- [ ] ✅ EMAIL MASUK!

---

**Setup selesai! User kirim form → Email masuk ke inbox Anda dalam 1-2 menit!** 🎉
