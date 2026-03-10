// ============================================
// MAIN.JS — Portfolio Interactions
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // ----------------------------------------
  // 1. AOS — Scroll Reveal Animations
  // ----------------------------------------
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }

  // ----------------------------------------
  // 2. Typed.js — Typewriter Tagline
  // ----------------------------------------
  const typedEl = document.getElementById("typed-tagline");
  if (typedEl && typeof Typed !== "undefined") {
    new Typed("#typed-tagline", {
      strings: [
        "Engineer",
        "Data Scientist",
        "Researcher",
        "Developer",
        "Problem Solver",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }

  // ----------------------------------------
  // 3. tsParticles — Hero Background
  // ----------------------------------------
  const particlesEl = document.getElementById("particles-js");
  if (particlesEl && typeof tsParticles !== "undefined") {
    tsParticles.load("particles-js", {
      fpsLimit: 60,
      particles: {
        number: {
          value: 40,
          density: { enable: true, area: 900 },
        },
        color: { value: "#E84C3D" },
        shape: { type: "circle" },
        opacity: {
          value: 0.3,
          random: true,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#E84C3D",
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          outModes: "bounce",
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.4 } },
        },
      },
      detectRetina: true,
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 20 },
              move: { speed: 0.5 },
            },
          },
        },
      ],
    });
  }

  // ----------------------------------------
  // 4. VanillaTilt — 3D Card Hover
  // ----------------------------------------
  if (typeof VanillaTilt !== "undefined") {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        scale: 1.02,
      });
    }
  }

  // ----------------------------------------
  // 5. Animated Counters
  // ----------------------------------------
  const counters = document.querySelectorAll(".stat-number[data-target]");
  if (counters.length > 0) {
    const animateCounter = (el) => {
      const target = parseFloat(el.getAttribute("data-target"));
      const suffix = el.getAttribute("data-suffix") || "";
      const prefix = el.getAttribute("data-prefix") || "";
      const decimals = el.getAttribute("data-decimals")
        ? parseInt(el.getAttribute("data-decimals"))
        : 0;
      const duration = 2000;
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        el.textContent = prefix + current.toFixed(decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((c) => counterObserver.observe(c));
  }

  // ----------------------------------------
  // 6. Timeline Scroll Highlighting
  // ----------------------------------------
  const timelineItems = document.querySelectorAll(".timeline-item");
  if (timelineItems.length > 0) {
    const tlObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineItems.forEach((item) => tlObserver.observe(item));
  }

  // ----------------------------------------
  // 7. Smooth Scroll for Anchor Links
  // ----------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ----------------------------------------
  // 8. Project Filter (Portfolio Page)
  // ----------------------------------------
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");

        filterBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        document.querySelectorAll(".project-card").forEach((card) => {
          if (filter === "all" || card.getAttribute("data-tags").includes(filter)) {
            card.style.display = "";
            card.style.opacity = "0";
            requestAnimationFrame(() => {
              card.style.transition = "opacity 0.4s ease";
              card.style.opacity = "1";
            });
          } else {
            card.style.opacity = "0";
            setTimeout(() => (card.style.display = "none"), 400);
          }
        });
      });
    });
  }
});
