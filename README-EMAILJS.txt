================================================================================
  EMAILJS SETUP — Faraysz Portfolio Contact Form
================================================================================

Email tujuan: faraytodiatmajaya@gmail.com
Status: BELUM SETUP (perlu credentials EmailJS)

================================================================================
  QUICK SETUP (3 LANGKAH, 15 MENIT)
================================================================================

STEP 1: DAFTAR EMAILJS
-----------------------
1. Buka: https://www.emailjs.com/
2. Sign Up dengan email: faraytodiatmajaya@gmail.com
3. Verifikasi email di inbox


STEP 2: SETUP DI DASHBOARD EMAILJS
-----------------------------------

A. Buat Email Service:
   - Dashboard → "Email Services" → "Add New Service"
   - Pilih: Gmail
   - Klik: "Connect Account"
   - Login: faraytodiatmajaya@gmail.com
   - Izinkan akses EmailJS
   - CATAT: Service ID (contoh: service_abc1234)

B. Buat Email Template:
   - Dashboard → "Email Templates" → "Create New Template"
   - Template Name: Portfolio Contact Form
   
   Subject:
   Pesan Baru dari Portfolio: {{subject}}
   
   Content:
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
   
   Settings:
   - To Email: faraytodiatmajaya@gmail.com
   - Reply To: {{reply_to}}
   
   - Save
   - CATAT: Template ID (contoh: template_xyz5678)

C. Dapatkan Public Key:
   - Dashboard → "Account" → "API Keys"
   - CATAT: Public Key (contoh: AbCdEfGh123456)


STEP 3: UPDATE KODE
--------------------

File 1: contact.html (baris 121)
--------------------------------
CARI:
  emailjs.init('YOUR_PUBLIC_KEY'); // <<< GANTI INI

GANTI DENGAN:
  emailjs.init('AbCdEfGh123456'); // Ganti dengan Public Key Anda


File 2: assets/js/main.js (baris 108)
--------------------------------------
CARI:
  await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {

GANTI DENGAN:
  await emailjs.send('service_abc1234', 'template_xyz5678', {
  
(Ganti service_abc1234 dan template_xyz5678 dengan ID Anda)


STEP 4: TEST
------------
1. Buka contact.html di browser
2. Isi form test:
   Nama: Test User
   Email: test@example.com
   Jenis Proyek: Web (Laravel)
   Pesan: Ini adalah pesan test dari form kontak
3. Klik "Kirim Pesan"
4. Harus muncul alert hijau: "Pesan berhasil dikirim!"
5. Cek email: faraytodiatmajaya@gmail.com (tunggu 1-2 menit)
6. Email harus masuk! ✓


================================================================================
  KENAPA TIDAK MASUK SPAM?
================================================================================

EmailJS pakai Gmail OAuth2, jadi:
✓ Email dikirim dari Gmail server resmi
✓ DKIM & SPF sudah built-in
✓ From & To sama (faraytodiatmajaya → faraytodiatmajaya)
✓ Reply-to ke email pengirim asli

Gmail trust emailnya sendiri = 99% tidak masuk spam!


================================================================================
  FILE PANDUAN LENGKAP
================================================================================

- EMAILJS-QUICK-START.md      → Panduan singkat dengan checklist
- EMAILJS-SETUP-GUIDE.md       → Panduan lengkap dengan troubleshooting
- CREDENTIALS-TEMPLATE.md      → Template untuk catat credentials
- TODO-BEFORE-DEPLOY.md        → Checklist sebelum deploy website


================================================================================
  TROUBLESHOOTING
================================================================================

Problem: Form tidak kirim (alert merah)
Solution: Buka Console browser (F12), lihat error. Pastikan Service ID,
          Template ID, dan Public Key sudah benar.

Problem: Email tidak masuk
Solution: Cek folder Spam di Gmail. Pastikan Public Key sudah di-init
          di contact.html.

Problem: Error "Service not found"
Solution: Pastikan Service ID di main.js sama dengan di dashboard EmailJS.

Problem: Error "Template not found"
Solution: Pastikan Template ID di main.js sama dengan di dashboard EmailJS.


================================================================================
  QUOTA GRATIS
================================================================================

✓ 200 email/bulan
✓ 2 email services
✓ 2 email templates
✓ Unlimited websites

Cukup untuk portfolio pribadi!

Upgrade ke paid ($7/bulan) jika butuh lebih banyak.


================================================================================
  SUPPORT
================================================================================

EmailJS Docs: https://www.emailjs.com/docs/
EmailJS Support: support@emailjs.com
Dashboard: https://dashboard.emailjs.com/


================================================================================
  CATATAN PENTING
================================================================================

⚠ JANGAN lupa update credentials sebelum deploy!
⚠ JANGAN commit file CREDENTIALS-TEMPLATE.md ke Git (sudah di .gitignore)
✓ Test form setelah deploy ke live website (bukan hanya localhost)


================================================================================
  HAPPY CODING! 🚀
================================================================================
