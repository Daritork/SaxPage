document
  .getElementById("scroll")
  .addEventListener("click", () => Scroll("#Welcome", true));

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

  if (
    bodyStyle.getPropertyValue("--scroll") > 0.92 &&
    window.innerWidth > 1300
  ) {
    document.querySelectorAll(".header_notes").forEach((el) => {
      el.style.visibility = "visible";
    });
  } else if (
    bodyStyle.getPropertyValue("--scroll") < 0.92 &&
    window.innerWidth > 1300
  ) {
    document.querySelectorAll(".header_notes").forEach((el) => {
      el.style.visibility = "hidden";
    });
  } else {
    document.querySelectorAll(".header_notes").forEach((el) => {
      el.style.visibility = "visible";
    });
  }
});
