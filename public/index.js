const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

function scrollActive() {
  const scrollY = window.pageYOffset;
  const sectionId = document.querySelectorAll("section[id]");
  sectionId.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(
  `.inicio__datos, .inicio__imagen, 
           .lugares__datos,
           .opiniones__content,
           .footer__content`,
  {
    origin: "buttom",
    interval: 200,
  }
);

sr.reveal(`.ventajas__video, .correo__content`, {
  origin: "left",
});

sr.reveal(`.ventajas__datos, .correo__imagen`, {
  origin: "right",
});

document.getElementById("boton").addEventListener("click", () => {
  alert("Correo registrado con exito");
  document.getElementById("information").value = "";
});

function miFuncion() {
  console.log("Test");

  const input = document.getElementById("email");
  const email = input.value;

  // Validar el correo electrónico utilizando una expresión regular
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    console.error("El correo electrónico no es válido");
    alert("Ingrese un correo electrónico válido.");
    return;
  } else {
    alert("En breve nos comunicaremos contigo.");
  }

  fetch("http://localhost:3000/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function togglePrices(button) {
  var prices = button.parentNode.querySelector(".prices-link");
  if (prices.style.display === "none") {
    prices.style.display = "block";
    button.textContent = "Ocultar precios";
  } else {
    prices.style.display = "none";
    button.textContent = "Ver precios";
  }
}


