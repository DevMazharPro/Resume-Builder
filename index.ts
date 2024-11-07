const button = document.querySelector("#t") as HTMLButtonElement;
const section = document.querySelector("#Skills") as HTMLTableSectionElement;

let slideV = true;

button.addEventListener("click", () => {
  if (slideV) {
    section.style.display = "none";
    button.innerHTML = "Show Skills";
  } else {
    section.style.display = "block"; 
    button.innerHTML = "Hide Skills";
  }
  slideV = !slideV;
});
