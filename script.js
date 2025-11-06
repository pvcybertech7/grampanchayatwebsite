// script.js - mobile menu, font-size toggle, hero lightbox

document.addEventListener('DOMContentLoaded', function() {

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('show');
    });
  }

  // Font size toggle (small demo: cycles between normal, large)
  const fontBtn = document.getElementById('changeFont');
  let fontState = 0;
  if (fontBtn) {
    fontBtn.addEventListener('click', function () {
      fontState = (fontState + 1) % 3;
      if (fontState === 0) document.documentElement.style.fontSize = '100%';
      if (fontState === 1) document.documentElement.style.fontSize = '115%';
      if (fontState === 2) document.documentElement.style.fontSize = '130%';
    });
  }

  // Hero image lightbox (click to open large)
  const heroImg = document.getElementById('heroImage');
  if (heroImg) {
    heroImg.style.cursor = 'zoom-in';
    heroImg.addEventListener('click', function () {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0; overlay.style.left = 0; overlay.style.right = 0; overlay.style.bottom = 0;
      overlay.style.background = 'rgba(0,0,0,0.85)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;
      overlay.addEventListener('click', () => document.body.removeChild(overlay));

      const img = document.createElement('img');
      img.src = heroImg.src;
      img.style.maxWidth = '92%';
      img.style.maxHeight = '92%';
      img.style.boxShadow = '0 8px 30px rgba(0,0,0,0.6)';
      overlay.appendChild(img);
      document.body.appendChild(overlay);
    });
  }


  // Simple dot slider effect (for future multiple images)
document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});

// JS placeholder (optional future interactivity)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Map + Profile section loaded.");
});

  // smooth scroll for internal anchors (if present)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav
        navLinks.classList.remove('show');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

});

// Sidebar button active toggle
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sidebar button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

// Simple horizontal slider for scheme cards
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".scheme-wrapper");
  const next = document.querySelector(".arrow.next");
  const prev = document.querySelector(".arrow.prev");

  if (wrapper && next && prev) {
    next.addEventListener("click", () => {
      wrapper.scrollBy({ left: 320, behavior: "smooth" });
    });
    prev.addEventListener("click", () => {
      wrapper.scrollBy({ left: -320, behavior: "smooth" });
    });
  }
});


// Simple form handler (for demo only)
document.querySelector(".contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("तुमची तक्रार नोंदवली गेली आहे. धन्यवाद!");
  this.reset();
});

