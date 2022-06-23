const pa = document.querySelectorAll("p");
pa.forEach(function (par) {
  if (par.textContent.includes("the")) {
    par.remove();
  }
});
