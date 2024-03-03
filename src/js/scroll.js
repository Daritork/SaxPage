document.getElementById("scroll").addEventListener("click", Scroll);
document
  .querySelector("#scrollToWelcome")
  .addEventListener("click", ScrollToWelcomeTrue);
document
  .querySelector("#scrollToSaxophoneParts")
  .addEventListener("click", ScrollToWelcomeFalse);
document
  .querySelector("#scrollToHistory")
  .addEventListener("click", ScrollToHistory);
document
  .querySelector("#scrollToTypesOfSax")
  .addEventListener("click", ScrollToTypesOfSax);

function Scroll() {
  document.querySelector("#Welcome").scrollIntoView(true);
}
function ScrollToWelcomeTrue() {
  document.querySelector("#Welcome").scrollIntoView(true);
}
function ScrollToWelcomeFalse() {
  document.querySelector("#Welcome").scrollIntoView(false);
}
function ScrollToHistory() {
  document.querySelector("#History").scrollIntoView(true);
}
function ScrollToTypesOfSax() {
  document.querySelector("#Types").scrollIntoView(true);
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
