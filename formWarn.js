"use strict";

//Form warn
let contactSec = document.getElementById("contactSection");
let formModal = document.getElementById("fwModal");
let formModalBtn = document.getElementById("fwModalButton");

function showFormWarn(){
    formModal.style.display = "block";
}
function closeFormWarn(){
    formModal.style.display = "none";
}

contactSec.addEventListener("click", showFormWarn);
formModalBtn.addEventListener("click", closeFormWarn);






