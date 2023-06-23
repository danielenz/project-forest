// NAV HAMBURGER
const burgerBtn = document.querySelector(".burger");
const barsIco = document.querySelector(".fa-bars");
const xIco = document.querySelector(".fa-times");
const nav = document.querySelector(".nav-mobile ul");
const navA = document.querySelector(".nav-mobile ul li a");

const handleNav = () => {
  nav.classList.toggle("visible");
  burgerBtn.classList.toggle("visible");
  barsIco.classList.toggle("hide");
  xIco.classList.toggle("hide");
};

function removeVisibleClass() {
  burgerBtn.classList.remove("visible");
  nav.classList.remove("visible");
  barsIco.classList.toggle("hide");
  xIco.classList.toggle("hide");
}

burgerBtn.addEventListener("click", handleNav);

// koniec NAV HAMBURGER


// Klasa active dla nawigacji 


function activateNavLinkOnScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav div a');

  function activateLink(link) {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }
    link.classList.add('active');
  }

  function checkSectionPosition() {
    const navHeight = document.querySelector('nav').offsetHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight;
      const sectionBottom = sectionTop + section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        const targetLink = document.querySelector('nav div a[href="#' + section.getAttribute('id') + '"]');
        activateLink(targetLink);
      }
    });
  }

  checkSectionPosition();

  window.addEventListener('scroll', checkSectionPosition);
}

activateNavLinkOnScroll();

// Koniec klasy dla nawigacji

// CAŁA STRONA
const navLinkAboutUs = document.querySelector(".navLink-aboutUs");

function GoToAboutUsSection() {
  window.location.href = "index.html";
  scrollToSectionAboutus();
}

navLinkAboutUs.addEventListener("click", GoToAboutUsSection);

const navLinkOffers = document.querySelector(".navLink-offers");

function GoToOffersSection() {
  window.location.href = "index.html";
  scrollToSectionOffers();
}

navLinkOffers.addEventListener("click", GoToOffersSection);



function addBounceClass() {
  const btn = document.querySelector(".btn-offers");

  if (window.scrollY >= document.querySelector("#offers").offsetTop) {
    btn.classList.add("bounce-top");
  } else {
    btn.classList.remove("bounce-top");
  }
}

function scrollToSectionAboutus() {
  window.location.href = "index.html#aboutUs";
};

function scrollToSectionOffers() {
  window.location.href = "index.html#offers";
};

const addActiveClass = () => {
  const currentUrl = window.location.href;
  const contactLink = document.querySelector(".contact-link");
  if (currentUrl.includes("contactPage.html")) {
    contactLink.classList.add("active");
  }
};

addActiveClass();





window.addEventListener("scroll", addBounceClass);
