document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector(".charge").classList.add("cache");
    }, 3600); // 3 secondes
  });
  // 1. Menu Burger (Dynamisme de navigation)
  //const nav = document.querySelector("nav ul");
 // const header = document.querySelector("header");

  //const burgerBtn = document.createElement("button");
  //burgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
  //burgerBtn.className = "burger-menu";
  //header.prepend(burgerBtn);

 // burgerBtn.addEventListener("click", () => {
    //nav.classList.toggle("active");
  //});

  // 2. Contrôle de saisie formulaire 
  const contactForm = document.querySelector("form");

  contactForm.addEventListener("submit", (e) => {
    const message = document.getElementById("message").value;

    if (message.length < 10) {
      e.preventDefault();
      alert("Votre message doit contenir au moins 10 caractères.");
    } else {
      alert("Merci ! Votre message a été envoyé (Simulation).");
    }
  });

  // 3. Animation fluide pour les ancres [cite: 13]
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
