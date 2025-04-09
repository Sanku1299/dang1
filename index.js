const sections = document.querySelectorAll(".con");
let lastScrollY = window.scrollY;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      const img = section.querySelector(".slide-img");

      if (entry.isIntersecting) {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        lastScrollY = currentScrollY;

        document.body.style.backgroundColor = section.getAttribute("data-color");

        // Reset old animation classes
        img.classList.remove("from-top", "from-bottom", "visible");

        // Add direction and visibility
        img.classList.add(scrollingDown ? "from-bottom" : "from-top");
        requestAnimationFrame(() => {
          img.classList.add("visible");
        });
      } else {
        img.classList.remove("visible", "from-top", "from-bottom");
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));
