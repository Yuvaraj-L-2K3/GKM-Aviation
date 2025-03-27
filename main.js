const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

//JS Function to animate scrolling top recruiters logos
function startInfiniteScroll() {
  const sliderTrack = document.querySelector('.slider-track');
  const sliderItems = document.querySelectorAll('.slider-item');
  const slideWidth = sliderItems[0].offsetWidth + parseInt(window.getComputedStyle(sliderItems[0]).marginRight);

  // Clone only visible items (within the viewport)
  const visibleItems = Array.from(sliderItems).slice(0, Math.ceil(window.innerWidth / slideWidth));
  const clonedItems = visibleItems.map(item => item.cloneNode(true));

  // Append cloned items to the end of the track
  clonedItems.forEach(clone => sliderTrack.appendChild(clone));

  // Set width of slider track to fit all items
  sliderTrack.style.width = `${slideWidth * (sliderItems.length + clonedItems.length)}px`;

  // Animation to continuously scroll the slider
  let pos = 0;
  function scroll() {
      pos -= 1; // Adjust scroll speed here
      sliderTrack.style.transform = `translateX(${pos}px)`;

      // Reset position to start once first set of items is off-screen
      if (pos <= -slideWidth * sliderItems.length) {
          pos = 0;
          sliderTrack.style.transition = 'none'; // Disable transition for immediate reset
          requestAnimationFrame(() => {
              sliderTrack.style.transform = `translateX(${pos}px)`;
              sliderTrack.style.transition = ''; // Re-enable transition
          });
      }

      requestAnimationFrame(scroll);
  }
  scroll(); // Start scrolling animation
}

// Start the infinite scrolling when the page loads
window.addEventListener('load', () => {
  startInfiniteScroll();
});




const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
