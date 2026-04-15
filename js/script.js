document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector(".charge").classList.add("cache");
    }, 3600); // 3 secondes
  });
  // 1. Menu Burger (Dynamisme de navigation)
  const menu = document.getElementById("burger");
  const nav = document.querySelector(".nav_barre");
  //console.log(nav);

  menu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

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

  // 3. carrousel edito
  const data = [
    {
      img: "image/chat.jpg",
      title: "Profil",
      text: `
      Étudiant en <span>Bachelor Data Science & Management</span> à l'EPF Cachan,
      je conçois des solutions end-to-end.
    `,
    },
    {
      img: "image/photo/1.jpg",
      title: "Compétences",
      text: `
      Maîtrise de <span>Python, SQL, Power BI</span>,
      développement <span>Full Stack</span> et IA.
    `,
    },
    {
      img: "image/photo/3.jpg",
      title: "Vision",
      text: `
      Je combine <span>technique et management</span>
      pour créer des solutions performantes.
    `,
    },
  ];

  let index = 0;

  const img = document.getElementById("logo_p");
  const title = document.querySelector(".citation h2");
  const paragraph = document.querySelector(".citation p");

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % data.length;
    update();
  });

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + data.length) % data.length;
    update();
  });

  function update() {
    img.src = data[index].img;
    title.innerHTML = data[index].title;
    paragraph.innerHTML = data[index].text;
  }
});
