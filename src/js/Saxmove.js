//? Finds how far for top of the page user scrolled to animate a Saxophone picture */
window.addEventListener("scroll", () => {
  //*consts
  const bodyStyle = document.body.style;
  var saxophone = document.getElementById("movingSax");
  //*
  bodyStyle.setProperty(
    "--scroll",
    Math.min(
      (
        window.pageYOffset /
        (window.innerHeight * 2 - window.innerHeight)
      ).toFixed(4),
      1
    )
  );
  if (bodyStyle.getPropertyValue("--scroll") >= 1) {
    saxophone.classList.remove("fixed");
    saxophone.classList.add("absolute");
  }
  if (bodyStyle.getPropertyValue("--scroll") < 1) {
    saxophone.classList.add("fixed");
    saxophone.classList.remove("absolute");
  }
});
