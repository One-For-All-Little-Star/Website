(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    let navbarlinks = select("#menu .NavItem", true);
    console.log(navbarlinks);
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("highlight");
      } else {
        navbarlink.classList.remove("highlight");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);
})();
