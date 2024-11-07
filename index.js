"use strict";
const button = document.querySelector("#t");
const section = document.querySelector("#Skills");
let slideV = true;
button.addEventListener("click", () => {
    if (slideV) {
        section.style.display = "none";
        button.innerHTML = "Show Skills";
    }
    else {
        section.style.display = "block";
        button.innerHTML = "Hide Skills";
    }
    slideV = !slideV;
});
