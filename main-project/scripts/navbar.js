const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const contact = document.querySelector(".contact");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    contact.classList.toggle("contact--yellow");
  });
};

navSlide();
