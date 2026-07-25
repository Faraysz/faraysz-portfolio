# Setup Form Kontak — 3 Opsi

Form kontak sudah diupdate dengan 3 metode pengiriman email. Pilih salah satu yang paling cocok dengan setup hosting Anda:

---

## 📧 OPSI 1: PHP Mail (Sudah Aktif)

**Cocok untuk:** Shared hosting dengan PHP support (Hostinger, Niagahoster, dll.)

### Setup:
1. Buka `send-email.php`
2. **GANTI** baris 12:
   ```php
   $to_email = 'hello@faraysz.dev'; // <<< GANTI DENGAN EMAIL ANDA
   ```
3. Upload semua file ke hosting via FTP/cPanel
4. **Test** form di website Anda

### Catatan:
- Beberapa hosting memerlukan konfigurasi SMTP tambahan
- Jika email masuk ke spam, tambahkan SPF/DKIM record di DNS hosting
- Alternatif: pakai plugin SMTP seperti PHPMailer dengan Gmail SMTP

---

## 📮 OPSI 2: Formspree (Paling Mudah, Tanpa Backend)

**Cocok untuk:** GitHub Pages, Netlify, Vercel, atau hosting static

### Setup:
1. Buka https://formspree.io/
2. Sign up gratis (50 submissions/bulan)
3. Buat form baru, Formspree akan kasih ID (contoh: `xvgpkjdl`)
4. Buka `assets/js/main.js`
5. **Comment OPSI 1** (baris 96-110) dan **Uncomment OPSI 2** (baris 112-128)
6. Ganti `YOUR_FORM_ID` dengan ID dari Formspree:
   ```javascript
   const response = await fetch('https://formspree.io/f/xvgpkjdl', {
   ```
7. Deploy website, test form

### Kelebihan:
✅ Tidak perlu backend  
✅ Langsung kirim ke email  
✅ Anti-spam built-in  
✅ Setup 5 menit  

---

## ⚡ OPSI 3: EmailJS (Frontend Only)

**Cocok untuk:** Static hosting tanpa backend sama sekali

### Setup:
1. Buka https://www.emailjs.com/
2. Sign up gratis (200 emails/bulan)
3. Buat Email Service (pilih Gmail/Outlook/SendGrid)
4. Buat Email Template dengan variabel:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   Message: {{message}}
   ```
5. Dapatkan:
   - Service ID (contoh: `service_abc123`)
   - Template ID (contoh: `template_xyz789`)
   - Public Key (contoh: `user_XyZ123456`)

6. Buka `contact.html`, tambahkan **SEBELUM** tag `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
     emailjs.init('user_XyZ123456'); // Ganti dengan Public Key
   </script>
   ```

7. Buka `assets/js/main.js`
8. **Comment OPSI 1** dan **Uncomment OPSI 3** (baris 130-146)
9. Ganti credentials:
   ```javascript
   await emailjs.send('service_abc123', 'template_xyz789', {
   ```

### Kelebihan:
✅ 100% frontend  
✅ Tidak perlu PHP hosting  
✅ Email langsung dari browser  

---

## 🧪 Testing

Setelah setup salah satu opsi:

1. Buka `contact.html` di browser
2. Isi form dengan data test
3. Klik "Kirim Pesan"
4. Harus muncul alert sukses/error
5. **Cek inbox email** Anda (juga folder spam)

---

## 🔒 Keamanan

Semua opsi sudah include:
- ✅ Input sanitization
- ✅ Email validation
- ✅ CSRF protection (untuk PHP)
- ✅ Rate limiting (Formspree & EmailJS)

Untuk PHP production, pertimbangkan:
- Gunakan PHPMailer dengan SMTP Gmail/SendGrid
- Tambahkan Google reCAPTCHA v3
- Logging error ke file

---

## 📊 Perbandingan

| Fitur | PHP Mail | Formspree | EmailJS |
|-------|----------|-----------|---------|
| **Setup** | Medium | Mudah | Medium |
| **Butuh Backend** | Ya | Tidak | Tidak |
| **Limit Gratis** | Unlimited* | 50/bulan | 200/bulan |
| **Custom Domain** | Ya | Ya | Ya |
| **Anti-Spam** | Manual | Built-in | Built-in |
| **Best For** | cPanel/Shared | Static Sites | SPA/React |

*Tergantung hosting

---

## 🆘 Troubleshooting

**PHP Mail tidak kirim:**
- Cek `error_log` di hosting
- Test dengan mail tester: https://www.mail-tester.com/
- Pakai SMTP plugin (PHPMailer) lebih reliable

**Formspree tidak jalan:**
- Pastikan form ID benar
- Cek console browser untuk error CORS
- Verifikasi email di dashboard Formspree

**EmailJS gagal:**
- Pastikan Public Key sudah di-init
- Cek quota di dashboard EmailJS
- Test connection di EmailJS playground

---

## 💡 Rekomendasi

Untuk portfolio Faraysz:

1. **Jika ada hosting PHP** → Gunakan **OPSI 1** (PHP Mail)
2. **Jika hosting GitHub Pages/Netlify** → Gunakan **OPSI 2** (Formspree)
3. **Jika butuh advanced features** → Gunakan **OPSI 3** (EmailJS)

**Easiest:** Formspree (setup 5 menit, no coding)  
**Most Control:** PHP Mail + PHPMailer  
**Best UX:** EmailJS (instant send, no page reload)

---

## 🎯 ACTIVE: OPSI 3 (EmailJS)

Website ini sekarang menggunakan **EmailJS**.

📄 **Panduan lengkap setup:** Lihat file `EMAILJS-SETUP-GUIDE.md`

### Quick Setup:
1. Daftar di https://www.emailjs.com/ dengan **faraytodiatmajaya@gmail.com**
2. Buat Gmail service, catat Service ID
3. Buat email template, catat Template ID
4. Dapatkan Public Key dari Account settings
5. Update `contact.html` dan `assets/js/main.js` dengan credentials
6. Test form, cek email masuk ke **faraytodiatmajaya@gmail.com**

✅ Email tidak akan masuk spam karena menggunakan Gmail OAuth2
