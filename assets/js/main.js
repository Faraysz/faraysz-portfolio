/* ==========================================================================
   MAIN.JS — interaksi ringan, tanpa dependency eksternal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Tandai link nav aktif berdasarkan halaman --- */
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === page) link.classList.add('is-active');
  });

  /* --- Toggle nav mobile --- */
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open');
    });

    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        toggle.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
      });
    });
  }

  /* --- Smooth scroll untuk anchor internal --- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
        }
      }
    });
  });

  /* --- Scroll reveal via IntersectionObserver --- */
  const revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);

          // animasi skillbar saat section terlihat
          entry.target.querySelectorAll('.skillbar__fill[data-width]').forEach((bar) => {
            requestAnimationFrame(() => {
              bar.style.width = bar.dataset.width;
            });
          });
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* --- Efek glow kursor pada card --- */
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  /* --- Counter angka statistik (mis. 250+, 99.9%) --- */
  document.querySelectorAll('.stat-value[data-count]').forEach((el) => {
    const raw = el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const target = parseFloat(raw);
    const isFloat = raw.includes('.');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(el);
        const duration = 1200;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    io.observe(el);
  });

  /* --- Typewriter untuk eyebrow/tagline hero --- */
  document.querySelectorAll('[data-typewriter]').forEach((el) => {
    const words = JSON.parse(el.dataset.typewriter);
    let wordIndex = 0, charIndex = 0, deleting = false;
    const caret = document.createElement('span');
    caret.className = 'typewriter-caret';
    el.after(caret);

    const tick = () => {
      const current = words[wordIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 70);
    };
    tick();
  });

  /* --- Form contact: kirim via EmailJS --- */
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const btn = form.querySelector('button[type="submit"]');
      const alert = document.getElementById('form-alert');
      const original = btn.textContent;
      
      // Reset alert
      alert.style.display = 'none';
      
      // Disable button
      btn.textContent = 'Mengirim...';
      btn.disabled = true;

      // EmailJS Send
      try {
        // Template parameters - SESUAI dengan template "Contact Us" bawaan EmailJS
        // Template Contact Us hanya punya variable {{name}} dan {{message}}
        const templateParams = {
          name: form.name.value,
          email: form.email.value,
          message: `
=================================
KONTAK DARI PORTFOLIO FARAYSZ
=================================

NAMA: ${form.name.value}
EMAIL: ${form.email.value}
JENIS PROYEK: ${form.subject.value}

---------------------------------
PESAN:
---------------------------------
${form.message.value}

=================================
Dikirim pada: ${new Date().toLocaleString('id-ID')}
Balas ke: ${form.email.value}
=================================
          `.trim()
        };
        
        // Gunakan config dari emailjs-config.js
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams);
        
        showAlert(alert, 'success', 'Pesan berhasil dikirim! Terima kasih sudah menghubungi.');
        form.reset();
      } catch (error) {
        console.error('EmailJS Error:', error);
        showAlert(alert, 'error', 'Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.');
      }
      
      // Re-enable button
      btn.textContent = original;
      btn.disabled = false;
    });
  }

  function showAlert(element, type, message) {
    element.textContent = message;
    element.style.display = 'block';
    element.style.background = type === 'success' 
      ? 'rgba(0, 219, 231, 0.15)' 
      : 'rgba(232, 196, 35, 0.15)';
    element.style.border = type === 'success'
      ? '1px solid rgba(0, 219, 231, 0.4)'
      : '1px solid rgba(232, 196, 35, 0.4)';
    element.style.color = type === 'success' ? 'var(--cyan-bright)' : 'var(--amber)';
  }

  /* --- Navbar: sedikit lebih pekat saat discroll --- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.borderBottomColor = window.scrollY > 24
        ? 'rgba(255,255,255,0.14)'
        : 'rgba(255,255,255,0.08)';
    }, { passive: true });
  }

  /* --- Filter proyek (visual, client-side) --- */
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const filter = btn.dataset.filter;
        projectCards.forEach((card) => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }
});
