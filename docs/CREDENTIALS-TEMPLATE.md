# 🔑 EmailJS Credentials — TEMPLATE

Catat credentials Anda di sini saat setup EmailJS:

---

## 📧 Email Tujuan
```
faraytodiatmajaya@gmail.com
```

---

## 🔐 EmailJS Credentials

### 1. Service ID
```
service_____________
```
Dari: Dashboard → Email Services → [Service Name]

---

### 2. Template ID
```
template_____________
```
Dari: Dashboard → Email Templates → [Template Name]

---

### 3. Public Key
```
_____________________
```
Dari: Dashboard → Account → API Keys

---

## 📝 Update Files

Setelah dapat credentials di atas:

### File 1: `contact.html` (baris 121)
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```
↓ Ganti dengan:
```javascript
emailjs.init('_____________________'); // Public Key Anda
```

---

### File 2: `assets/js/main.js` (baris 108)
```javascript
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```
↓ Ganti dengan:
```javascript
await emailjs.send('service_____________', 'template_____________', {
```

---

## ✅ Test Checklist

- [ ] Public Key sudah diisi di `contact.html`
- [ ] Service ID sudah diisi di `main.js`
- [ ] Template ID sudah diisi di `main.js`
- [ ] Test form → Email masuk ke faraytodiatmajaya@gmail.com

---

## 🎯 Quick Links

- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Test Form:** Buka `contact.html` di browser
- **Email Inbox:** https://mail.google.com/ (login dengan faraytodiatmajaya@gmail.com)

---

**JANGAN COMMIT FILE INI KE GIT!** (Sudah ada di `.gitignore`)
