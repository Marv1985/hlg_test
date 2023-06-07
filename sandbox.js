const checked = document.getElementById("checked");
const mobileNav = document.querySelector(".mobile-nav");

//function for sliding mobile view menu checkbox
checked.addEventListener("click", function () {
  if (checked.checked) {
    mobileNav.setAttribute("id", "slide");
  } else {
    mobileNav.removeAttribute("id");
  }
});

//check screen size for controlling checked box for hamburger menu click
window.addEventListener(
  "resize",
  function () {
    if (window.matchMedia("(min-width: 800px)").matches) {
      document.getElementById("checked").checked = false;
      mobileNav.removeAttribute("id");
    }
  },
  true
);

//button ripple onclick effect
function createRipple(e) {
  const button = e.currentTarget;
  const btnRect = button.getBoundingClientRect();

  const circle = document.createElement("span");
  const diameter = Math.max(btnRect.width, btnRect.height);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - (btnRect.left + radius)}px`;
  circle.style.top = `${e.clientY - (btnRect.top + radius)}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
