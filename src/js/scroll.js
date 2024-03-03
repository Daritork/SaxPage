document.querySelector(".Scrollbutton").style.opacity = "0";

function Scroll() {
  const welcome = document.getElementById("Welcome");

  welcome.scrollIntoView(true); // align bottom
}

window.addEventListener("scroll", () => {
  const bodyStyle = document.body.style;
  if (bodyStyle.getPropertyValue("--scroll") > 0.3) {
    document.querySelector(".Scrollbutton").style.opacity = "1";
  } else {
    document.querySelector(".Scrollbutton").style.opacity = "0";
  }
});
