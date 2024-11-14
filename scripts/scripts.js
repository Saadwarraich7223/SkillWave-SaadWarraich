// change navbar style on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrol", window.scrollY > 50);
});

//  FAQ open close
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // icon plus to minus
    const icon = faq.querySelector(".faq-icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// ======= Responsive nav bar

const openBtn = document.querySelector("#open-menu-icon");
const closeBtn = document.querySelector("#close-menu-icon");
const navMenu = document.querySelector(".nav-menu");
console.log(navMenu);

openBtn.addEventListener("click", () => {
  navMenu.style.display = "flex";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});
closeBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});
