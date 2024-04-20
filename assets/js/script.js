//_____ Customize theme start _____//
let toggle_theme = document.querySelector(".toggle-theme");
let theme_icon = document.querySelector(".toggle-theme .fa-moon");
let setThemeValue;

// Change theme
const lightTheme = () => {
  document.body.classList.add("light");
  theme_icon.classList.replace("fa-moon", "fa-sun");
  setThemeValue = localStorage.setItem("Theme", 1);
};
const darkTheme = () => {
  document.body.classList.remove("light");
  theme_icon.classList.replace("fa-sun", "fa-moon");
  setThemeValue = localStorage.setItem("Theme", 2);
};

toggle_theme.addEventListener("click", () => {
  if (!document.body.classList.contains("light")) {
    lightTheme();
  } else {
    darkTheme();
  }
});

// Stop refresh theme
window.addEventListener("DOMContentLoaded", () => {
  let getThemeValue = localStorage.getItem("Theme");
  if (getThemeValue == 1) {
    lightTheme();
  } else if (getThemeValue == 2) {
    darkTheme();
  }
});
//_____ Customize theme end _____//

//_____ Nav bar background change when Window was scrolled start _____//
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  let pageHeight = window.scrollY;
  navHide;
  header.classList.toggle("scrolled", pageHeight > 10);
});
//_____ Nav bar background change when Window was scrolled end _____//

//_____ Nav toggler start _____//
const nav = document.querySelector(".menu ul");
const navItem = document.querySelectorAll("#navLink");
const nav_toggler = document.querySelector(".nav-toggler");
const nav_toggler_icon = document.querySelector(".nav-toggler i");
const body = document.querySelector("body");

const navShow = () => {
  nav.classList.add("active");
  nav_toggler_icon.classList.replace("fa-bars", "fa-close");
  body.classList.add("navActive");
};
const navHide = () => {
  nav.classList.remove("active");
  nav_toggler_icon.classList.replace("fa-close", "fa-bars");
  body.classList.remove("navActive");
};

nav_toggler.addEventListener("click", () => {
  if (!nav.classList.contains("active")) {
    navShow();
  } else {
    navHide();
  }
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navHide();
  });
});
//_____ Nav toggler end _____//

//_____ Nav active when click & window scroll start _____//
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".menu ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".menu ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
//_____ Nav active when click & window scroll end _____//

//_____ Sliding tab start _____//
const tab_btn = document.querySelectorAll(".tab-btn");
const all_contents = document.querySelectorAll(".content");

tab_btn.forEach((items, index) => {
  items.addEventListener("click", (e) => {
    tab_btn.forEach((tab) => {
      tab.classList.remove("active");
    });
    items.classList.add("active");

    all_contents.forEach((contents) => {
      contents.classList.remove("active");
    });
    all_contents[index].classList.add("active");
  });
});
//_____ Sliding tab end _____//

//___ Contact alert start ___//
/*
let contactInput = document.querySelectorAll("#input");
let popup = document.querySelector(".popup");
let popupBtn = document.querySelector(".popup button");

contactInput.forEach((contactInputs) => {
  contactInputs.addEventListener("click", () => {
    popup.classList.add("active");
  });
});
popupBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});
*/
//___ Contact alert end ___//
