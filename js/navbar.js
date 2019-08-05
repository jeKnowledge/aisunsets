function toggle() {
  var x = document.getElementById("collapse");
  var y = document.getElementById("no-scroll");
  if (x.style.height === "100%") {
    x.style.height = "0%";
    y.style.overflow = "scroll";
  } else {
    x.style.height = "100%";
    y.style.overflow = "hidden";
  }
}
