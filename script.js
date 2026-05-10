// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.85)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.35)";
    navbar.style.boxShadow = "none";
  }
});

// ================= SMOOTH BUTTON ANIMATION =================

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-5px)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0px)";
  });
});

// ================= STATS COUNTER ANIMATION =================

const counters = document.querySelectorAll(".stat-box h2");

const speed = 100;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.innerText.replace(/\D/g, "");

    let data = +counter.getAttribute("data-count") || 0;

    const time = value / speed;

    if (data < value) {
      data += Math.ceil(time);

      counter.setAttribute("data-count", data);

      if (counter.innerText.includes("+")) {
        counter.innerText = data + "+";
      } else {
        counter.innerText = data;
      }

      setTimeout(animate, 20);
    } else {
      counter.innerText = value + "+";
    }
  };

  animate();
});

// ================= SERVICE CARD HOVER EFFECT =================

const cards = document.querySelectorAll(".service-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `radial-gradient(circle at ${x}px ${y}px,
            rgba(255,123,0,0.15),
            rgba(255,255,255,0.02))`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,0.03)";
  });
});

// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
  ".service-card, .stat-box, .cta, .section-title",
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0px)";
    } else {
      element.style.opacity = "0";
      element.style.transform = "translateY(50px)";
    }
  });
}

revealElements.forEach((element) => {
  element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================= HERO TEXT ANIMATION =================

const heroTitle = document.querySelector(".hero-content h1");

heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(50px)";

setTimeout(() => {
  heroTitle.style.transition = "1s ease";

  heroTitle.style.opacity = "1";
  heroTitle.style.transform = "translateY(0px)";
}, 300);

// ================= PARALLAX HERO EFFECT =================

const heroImage = document.querySelector(".hero-img");

window.addEventListener("scroll", () => {
  let scrollPosition = window.pageYOffset;

  heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

// ================= CTA BUTTON CLICK EFFECT =================

const primaryButtons = document.querySelectorAll(".primary-btn");

primaryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.innerText = "Loading...";

    setTimeout(() => {
      button.innerText = "Done ✓";
    }, 1500);

    setTimeout(() => {
      button.innerText = "Get a Quote";
    }, 3000);
  });
});

// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;

    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
