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

/*
.nav-links .contact{ -
  text-transform: uppercase; -
  background-color: white; -
  color: black; -
  border-radius: 34px; -
  font-family: "Fraunces", serif; -
  
  }
.nav-links {
  display: flex;
  /* justify-content: space-between;
  width: 50%; 
}

.nav-links a {
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  padding: 1.5rem;
  font-family: "Barlow", sans-serif;
}
*/