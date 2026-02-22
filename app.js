/* ============================================================
   APP.JS — Portfolio Interactive Logic
============================================================ */

// ── Custom Cursor ──────────────────────────────────────────
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
    rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
    if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
    requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll('a,button,.project-card,.filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => { if (ring) ring.style.transform = 'translate(-50%,-50%) scale(1.8)'; });
    el.addEventListener('mouseleave', () => { if (ring) ring.style.transform = 'translate(-50%,-50%) scale(1)'; });
});

// ── Particle Canvas ────────────────────────────────────────
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.05;
        this.color = Math.random() > 0.5 ? '0,217,255' : '139,92,246';
    }
    update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.fill();
    }
}
for (let i = 0; i < 120; i++) particles.push(new Particle());
function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0,217,255,${0.05 * (1 - dist / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ── Navbar Scroll ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    // Active link
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
});

// ── Hamburger ──────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));
navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinksEl.classList.remove('open')));

// ── Role Typewriter ────────────────────────────────────────
const roles = [
    'intelligent ML systems',
    'end-to-end MLOps pipelines',
    'cloud-native applications',
    'custom LLM solutions',
    'computer vision tools',
    'full-stack AI products'
];
let roleIdx = 0, charIdx = 0, deleting = false;
const roleEl = document.getElementById('roleDynamic');
function typeRole() {
    const current = roles[roleIdx];
    if (!deleting) {
        if (charIdx < current.length) { roleEl.textContent = current.substring(0, ++charIdx); setTimeout(typeRole, 60); }
        else { deleting = true; setTimeout(typeRole, 2000); }
    } else {
        if (charIdx > 0) { roleEl.textContent = current.substring(0, --charIdx); setTimeout(typeRole, 35); }
        else { deleting = false; roleIdx = (roleIdx + 1) % roles.length; setTimeout(typeRole, 400); }
    }
}
typeRole();

// ── Counter Animation ──────────────────────────────────────
function animateCounter(el, target) {
    let count = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(() => {
        count = Math.min(count + increment, target);
        el.textContent = count + (target >= 1000 ? '+' : (target > 5 ? '+' : ''));
        if (count >= target) clearInterval(timer);
    }, 30);
}
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-num').forEach(el => {
                animateCounter(el, parseInt(el.dataset.target));
            });
            counterObserver.disconnect();
        }
    });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

// ── Skill Bar Animation ────────────────────────────────────
const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar-fill').forEach(bar => {
                bar.style.width = bar.style.getPropertyValue('--pct');
            });
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-bars').forEach(el => barObserver.observe(el));

// ── Scroll Reveal ──────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

// ── Build Projects ─────────────────────────────────────────
function buildCard(p) {
    const isOngoing = p.status === 'Ongoing';
    const ghBtn = p.github ? `<a href="${p.github}" target="_blank" class="p-link" title="GitHub"><i class="fab fa-github"></i></a>` : '';
    const liBtn = p.linkedin ? `<a href="${p.linkedin}" target="_blank" class="p-link" title="LinkedIn"><i class="fab fa-linkedin"></i></a>` : '';
    return `
    <div class="project-card reveal" data-id="${p.id}" data-filter="${p.filter}">
      <div class="project-img-wrap">
        <img class="project-img" src="${p.image}" alt="${p.title}" loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x200/0d0d1f/00d9ff?text=Project+${p.id}'" />
        <span class="project-status-badge ${isOngoing ? 'ongoing' : ''}">${isOngoing ? '⟳ Ongoing' : '✓ Completed'}</span>
      </div>
      <div class="project-body">
        <div class="project-cat">${p.category}</div>
        <h3 class="project-name">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-techs">${p.tech.slice(0, 4).map(t => `<span class="p-tech">${t}</span>`).join('')}${p.tech.length > 4 ? `<span class="p-tech">+${p.tech.length - 4}</span>` : ''}</div>
        <div class="project-footer">
          <div class="project-links">${ghBtn}${liBtn}</div>
          <button class="view-more-btn" data-id="${p.id}">Details →</button>
        </div>
      </div>
    </div>`;
}

const completedProjects = projects.filter(p => p.status === 'Completed');
const ongoingProjects = projects.filter(p => p.status === 'Ongoing');
const grid = document.getElementById('projectsGrid');
const ongoingGrid = document.getElementById('ongoingGrid');

grid.innerHTML = completedProjects.map(buildCard).join('');
ongoingGrid.innerHTML = ongoingProjects.map(buildCard).join('');

// Re-observe new cards
document.querySelectorAll('.project-card').forEach(el => revealObserver.observe(el));

// ── Filter Bar ─────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('#projectsGrid .project-card').forEach(card => {
            const cardFilter = card.dataset.filter;
            const match = filter === 'all' || cardFilter === filter;
            card.style.display = match ? '' : 'none';
            card.style.animationDelay = '0s';
        });
    });
});

// ── Build Timeline ─────────────────────────────────────────
const timeline = document.getElementById('timeline');
timeline.innerHTML = experiences.map((e, i) => `
  <div class="tl-item reveal" style="--delay:${i * 0.1}s">
    <div class="tl-dot"></div>
    <div class="tl-content">
      <div class="tl-company">${e.company}</div>
      <div class="tl-role">${e.role}</div>
      <div class="tl-period"><i class="fas fa-clock"></i> ${e.period}</div>
      <div class="tl-desc">${e.desc}</div>
      <div class="tl-tags">${e.tags.map(t => `<span class="tl-tag">${t}</span>`).join('')}</div>
    </div>
  </div>`).join('');
document.querySelectorAll('.tl-item').forEach(el => revealObserver.observe(el));

// ── Modal ──────────────────────────────────────────────────
const modalOverlay = document.getElementById('modalOverlay');
const modalInner = document.getElementById('modalInner');
const modalClose = document.getElementById('modalClose');

function openModal(project) {
    const ghBtn = project.github ? `<a href="${project.github}" target="_blank" class="modal-btn modal-btn-gh"><i class="fab fa-github"></i> GitHub Repo</a>` : '';
    const liBtn = project.linkedin ? `<a href="${project.linkedin}" target="_blank" class="modal-btn modal-btn-li"><i class="fab fa-linkedin"></i> LinkedIn Post</a>` : '';
    modalInner.innerHTML = `
    <img class="modal-hero-img" src="${project.image}" alt="${project.title}"
      onerror="this.style.display='none'" />
    <div class="modal-cat">${project.category}</div>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-meta">
      <div class="modal-meta-item"><i class="fas fa-clock"></i> ${project.duration}</div>
      <div class="modal-meta-item"><i class="fas fa-circle-check"></i> ${project.status}</div>
    </div>
    <div class="modal-divider"></div>
    <div class="modal-section-title"><i class="fas fa-info-circle"></i> Overview</div>
    <p class="modal-desc">${project.desc}</p>
    <div class="modal-section-title"><i class="fas fa-star"></i> Key Features</div>
    <ul class="modal-features">${project.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <div class="modal-section-title"><i class="fas fa-tools"></i> Tech Stack</div>
    <div class="modal-tech-stack">${project.tech.map(t => `<span class="modal-tech">${t}</span>`).join('')}</div>
    ${(ghBtn || liBtn) ? `<div class="modal-divider"></div><div class="modal-actions">${ghBtn}${liBtn}</div>` : ''}
  `;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal() { modalOverlay.classList.remove('open'); document.body.style.overflow = ''; }
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('click', e => {
    const btn = e.target.closest('.view-more-btn');
    const card = e.target.closest('.project-card');
    if (btn) {
        const id = parseInt(btn.dataset.id);
        const project = projects.find(p => p.id === id);
        if (project) openModal(project);
    } else if (card && !e.target.closest('a')) {
        const id = parseInt(card.dataset.id);
        const project = projects.find(p => p.id === id);
        if (project) openModal(project);
    }
});

// ── Contact Form ───────────────────────────────────────────
const toast = document.createElement('div');
toast.className = 'toast';
toast.innerHTML = '<i class="fas fa-check-circle"></i> Message sent! I\'ll get back to you soon.';
document.body.appendChild(toast);

document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('send-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'; btn.disabled = false; e.target.reset(); }, 3000);
    }, 1500);
});

// ── About Section Reveal ───────────────────────────────────
document.querySelectorAll('.about-visual, .about-text, .info-card, .about-tags span').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});
