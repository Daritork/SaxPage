document
  .getElementById("scroll")
  .addEventListener("click", () => Scroll("#Welcome", true));
window.addEventListener("load", () => {
  document
    .querySelector("#scrollToWelcome")
    .addEventListener("click", () => Scroll("#Welcome", true));
  document
    .querySelector("#scrollToSaxophoneParts")
    .addEventListener("click", () => Scroll("#Welcome", false));
  document
    .querySelector("#scrollToHistory")
    .addEventListener("click", () => Scroll("#History", true));
  document
    .querySelector("#scrollToTypesOfSax")
    .addEventListener("click", () => Scroll("#Types", true));
});

function Scroll(id, position) {
  document.querySelector(id).scrollIntoView(position);
}

window.addEventListener("scroll", () => {
  const bodyStyle = document.body.style;
  if (bodyStyle.getPropertyValue("--scroll") > 0.3) {
    document.querySelector(".Scrollbutton").style.visibility = "visible";
    document.querySelector(".Scrollbutton").style.opacity = "1";
  } else {
    document.querySelector(".Scrollbutton").style.visibility = "hidden";
    document.querySelector(".Scrollbutton").style.opacity = "0";
  }
});
