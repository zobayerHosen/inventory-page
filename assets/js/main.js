$(document).ready(function(){


    const mobilenav = () => {
        let wrapper = document.querySelector('.navrapper')

        if(wrapper){

            // Code goes here
        }
    }

    mobilenav()
    
    const footerLink = () => {
        let wrapper = document.querySelector('.footer')

        if(wrapper){

            // Code goes here

        }
    }

    footerLink()

    // AOS initialize
    AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



    

})


// Select the marquee containers
const marqueeContainers = document.querySelectorAll('.testimonial-cards');

marqueeContainers.forEach((container) => {
  const childNodes = Array.from(container.children);

  // Duplicate the nodes and append them
  childNodes.forEach((node) => {
    const clone = node.cloneNode(true);
    container.appendChild(clone);
  });
});


// accordion functionalities

// Get all accordion buttons and items
const accordionButtons = document.getElementsByClassName("accordion-button");

// Loop through all accordion buttons
for (let i = 0; i < accordionButtons.length; i++) {
  // Add event listener for button click
  accordionButtons[i].addEventListener("click", function (event) {
    const icon = event.currentTarget.querySelector(".plus-icon");

    // Toggle between plus and minus icon
    if (icon.src.includes("plusicon.svg")) {
      icon.src = "./assets/images/icons/minusicon.svg";
    } else {
      icon.src = "./assets/images/icons/plusicon.svg";
    }
  });
}

document.querySelectorAll(".accordion-collapse").forEach(function (collapse) {
  collapse.addEventListener("shown.bs.collapse", function () {
    let button = this.previousElementSibling.querySelector(".accordion-button");
    if (button) {
      let icon = button.querySelector(".plus-icon");
      if (icon) {
        icon.src = "./assets/images/icons/minus-icon.svg";
      }
    }
  });

  collapse.addEventListener("hidden.bs.collapse", function () {
    const button =
      this.previousElementSibling.querySelector(".accordion-button");
    if (button) {
      const icon = button.querySelector(".plus-icon");
      if (icon) {
        icon.src = "./assets/images/icons/plus-icon.svg";
      }
    }
  });
});


// navbar hamburger

function showSidebar() {
  document.getElementById('sidebar').classList.add('show');
}

function hideSidebar() {
  document.getElementById('sidebar').classList.remove('show');
}
