/* ==========================================================================
   EMAILJS CONFIG — Example File
   
   CARA SETUP:
   1. Copy file ini jadi 'emailjs-config.js'
   2. Isi dengan credentials EmailJS Anda
   3. File 'emailjs-config.js' sudah ada di .gitignore (aman)
   ========================================================================== */

const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',      // Dari EmailJS Account → API Keys
  serviceId: 'YOUR_SERVICE_ID',       // Dari EmailJS Email Services
  templateId: 'YOUR_TEMPLATE_ID'      // Dari EmailJS Email Templates
};

// Export untuk dipakai di main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EMAILJS_CONFIG;
}
