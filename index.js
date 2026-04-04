
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const dot = document.getElementById('cursor-dot');
  document.addEventListener('mousemove', e => {
    cursor.style.left = (e.clientX - 9) + 'px';
    cursor.style.top = (e.clientY - 9) + 'px';
    dot.style.left = (e.clientX - 2.5) + 'px';
    dot.style.top = (e.clientY - 2.5) + 'px';
  });
  document.querySelectorAll('a, button, .proj-card, .photo-wrap, .chip').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2)'; cursor.style.borderColor = 'var(--accent2)'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)'; cursor.style.borderColor = 'var(--accent)'; });
  });

  // Scroll progress
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    document.getElementById('scrollLine').style.width = (scrolled * 100) + '%';
  });

  // Fade-up on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Skill bars animate
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(fill => {
          fill.style.width = fill.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-group').forEach(g => barObserver.observe(g));

  // Photo toggle
  let isToggled = false;
  function togglePhoto() {
    isToggled = !isToggled;
    document.getElementById('photoWrap').classList.toggle('photo-toggled', isToggled);
    document.getElementById('photoLabel').textContent = isToggled ? 'CASUAL MODE 🎉' : 'FORMAL MODE';
    document.getElementById('photoLabel').style.color = isToggled ? 'var(--accent2)' : 'var(--accent)';
  }

  // Contact form
  function handleSend() {
    document.getElementById('form-msg').style.display = 'block';
    setTimeout(() => { document.getElementById('form-msg').style.display = 'none'; }, 4000);
  }

  // Floating particles
  function makeParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    const colors = ['var(--accent)', 'var(--accent2)', 'var(--accent3)'];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}vw;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      opacity:${Math.random()*0.4+0.1};
      animation-duration:${Math.random()*12+8}s;
      animation-delay:${Math.random()*5}s;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 20000);
  }
  setInterval(makeParticle, 600);

  // Typing effect on notepad (subtle)
  // Already static for performance; cursor blink is enough