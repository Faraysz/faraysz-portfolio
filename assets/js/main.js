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

  /* --- Efek glow kursor pada card & glass-card --- */
  document.querySelectorAll('.card, .glass-card, .project-item, .tech-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  /* --- Counter angka statistik (mis. 12+, 24 Jam) --- */
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

  /* --- Hero Headline Typewriter (v4) --- */
  const heroTypewriterEl = document.querySelector('.typewriter-text');
  if (heroTypewriterEl) {
    const heroWords = [
      'ruang digital saya.',
      'sudut kreasi aplikasi.',
      'tempat eksperimen kode.',
      'dunia web & mobile.'
    ];

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      heroTypewriterEl.textContent = heroWords[0];
    } else {
      let wordIdx = 0;
      let charIdx = heroWords[0].length;
      let isDeleting = false;
      let timer = null;
      let isVisible = true;

      const TYPE_SPEED = 70;   // ~70ms per huruf ngetik
      const HOLD_TIME = 2000;  // ~2s tahan penuh
      const DELETE_SPEED = 40; // ~40ms per huruf hapus
      const PAUSE_TIME = 400;  // ~400ms jeda sebelum frasa berikutnya

      const typeLoop = () => {
        if (!isVisible) return;
        const currentWord = heroWords[wordIdx];

        if (!isDeleting) {
          charIdx++;
          heroTypewriterEl.textContent = currentWord.slice(0, charIdx);

          if (charIdx >= currentWord.length) {
            isDeleting = true;
            timer = setTimeout(typeLoop, HOLD_TIME);
            return;
          }
          timer = setTimeout(typeLoop, TYPE_SPEED);
        } else {
          charIdx--;
          heroTypewriterEl.textContent = currentWord.slice(0, charIdx);

          if (charIdx <= 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % heroWords.length;
            timer = setTimeout(typeLoop, PAUSE_TIME);
            return;
          }
          timer = setTimeout(typeLoop, DELETE_SPEED);
        }
      };

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          isVisible = false;
          if (timer) clearTimeout(timer);
        } else {
          if (!isVisible) {
            isVisible = true;
            typeLoop();
          }
        }
      });

      isDeleting = true;
      timer = setTimeout(typeLoop, HOLD_TIME);
    }
  }

  /* --- Interactive Playful Cats (Mood Ref: superti4r.net) --- */
  const catItems = document.querySelectorAll('.hero-cat-item');
  catItems.forEach((cat) => {
    cat.addEventListener('click', () => {
      cat.style.transform = 'translateY(-12px) scale(1.15)';
      setTimeout(() => {
        cat.style.transform = '';
      }, 320);
    });
  });

  /* --- Form contact: kirim via EmailJS; kalau config belum diisi, fallback WhatsApp --- */
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const alertBox = document.getElementById('form-alert');
      const original = btn.textContent;

      // Reset alert
      alertBox.style.display = 'none';

      // Disable button
      btn.textContent = 'Mengirim...';
      btn.disabled = true;

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value;
      const message = form.message.value.trim();

      // Config dianggap siap hanya bila file emailjs-config.js ikut ter-load
      // DAN key-nya sudah diisi (bukan placeholder dari file contoh).
      const emailjsReady = typeof EMAILJS_CONFIG !== 'undefined'
        && typeof emailjs !== 'undefined'
        && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY';

      try {
        if (emailjsReady) {
          // Template parameters - SESUAI dengan template "Contact Us" bawaan EmailJS
          // Template Contact Us hanya punya variable {{name}} dan {{message}}
          const templateParams = {
            name: name,
            email: email,
            message: `
=================================
KONTAK DARI PORTFOLIO FARAYSZ
=================================

NAMA: ${name}
EMAIL: ${email}
JENIS PROYEK: ${subject}

---------------------------------
PESAN:
---------------------------------
${message}

=================================
Dikirim pada: ${new Date().toLocaleString('id-ID')}
Balas ke: ${email}
=================================
          `.trim()
          };

          // Gunakan config dari emailjs-config.js
          await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams);

          showAlert(alertBox, 'success', 'Pesan berhasil dikirim! Terima kasih sudah menghubungi.');
          form.reset();
        } else {
          // FALLBACK: EmailJS belum dikonfigurasi (file config tidak ada / masih
          // berisi placeholder) — arahkan pesan ke WhatsApp, tanpa error.
          const waText = `Halo Faraysz, saya ${name}.\n\nJenis proyek: ${subject}\nEmail: ${email}\n\n${message}`;
          window.open('https://wa.me/6282333000472?text=' + encodeURIComponent(waText), '_blank');

          showAlert(alertBox, 'info',
            'EmailJS belum dikonfigurasi, jadi pesan Anda dibuka lewat WhatsApp. ' +
            'Bisa juga kirim manual ke faraytodiatmajaya@gmail.com. ' +
            'Ingin pengiriman email otomatis? Isi assets/js/emailjs-config.js (lihat file contohnya).');
          form.reset();
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        showAlert(alertBox, 'error', 'Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email/WhatsApp.');
      }

      // Re-enable button
      btn.textContent = original;
      btn.disabled = false;
    });
  }

  function showAlert(element, type, message) {
    const styles = {
      success: { bg: 'rgba(0, 219, 231, 0.15)', border: '1px solid rgba(0, 219, 231, 0.4)', color: 'var(--cyan-bright)' },
      error:   { bg: 'rgba(232, 196, 35, 0.15)', border: '1px solid rgba(232, 196, 35, 0.4)', color: 'var(--amber)' },
      info:    { bg: 'rgba(138, 75, 255, 0.15)', border: '1px solid rgba(138, 75, 255, 0.4)', color: 'var(--violet-bright)' }
    };
    const s = styles[type] || styles.info;
    element.textContent = message;
    element.style.display = 'block';
    element.style.background = s.bg;
    element.style.border = s.border;
    element.style.color = s.color;
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

  /* --- Interactive Project Modal --- */
  const interactiveCards = document.querySelectorAll('.project-card[data-project-details]');
  const projectModal = document.querySelector('#projectDetailModal');

  if (interactiveCards.length && projectModal) {
    const modalTitle = projectModal.querySelector('.modal-target-title');
    const modalBadge = projectModal.querySelector('.modal-target-badge');
    const modalYear = projectModal.querySelector('.modal-target-year');
    const modalDesc = projectModal.querySelector('.modal-target-desc');
    const modalChallenge = projectModal.querySelector('.modal-target-challenge');
    const modalFeatures = projectModal.querySelector('.modal-target-features');
    const modalTags = projectModal.querySelector('.modal-target-tags');
    const modalLink = projectModal.querySelector('.modal-target-link');
    const closeBtn = projectModal.querySelector('.project-modal__close');
    const dismissBtns = projectModal.querySelectorAll('[data-modal-close]');

    let lastFocusedEl = null;

    const openModal = (card) => {
      lastFocusedEl = card;
      let data = {};
      try {
        data = JSON.parse(card.getAttribute('data-project-details') || '{}');
      } catch (err) {
        console.error('Failed to parse project details:', err);
      }

      if (modalTitle) modalTitle.textContent = data.title || card.querySelector('.project-card__title')?.textContent || '';
      if (modalBadge) modalBadge.textContent = data.badge || '';
      if (modalYear) modalYear.textContent = data.year || '';
      if (modalDesc) modalDesc.textContent = data.desc || '';
      if (modalChallenge) modalChallenge.textContent = data.challenge || '';

      if (modalFeatures && Array.isArray(data.features)) {
        modalFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
      }

      if (modalTags && Array.isArray(data.tags)) {
        modalTags.innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');
      }

      if (modalLink) {
        modalLink.href = data.url || '#';
        modalLink.innerHTML = `${data.urlText || 'Buka Link Website'} <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link" style="margin-left:6px; vertical-align:middle;"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`;
      }

      projectModal.classList.add('is-open');
      projectModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    };

    const closeModal = () => {
      projectModal.classList.remove('is-open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedEl) lastFocusedEl.focus();
    };

    interactiveCards.forEach(card => {
      card.addEventListener('click', () => openModal(card));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    dismissBtns.forEach(btn => btn.addEventListener('click', closeModal));

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }
});
