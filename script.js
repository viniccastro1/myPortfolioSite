"use strict";

//Form warn
var contactSec = document.getElementById("contactSection");
var formModal = document.getElementById("fwModal");
var formModalBtn = document.getElementById("fwModalButton");

function showFormWarn(){
    formModal.style.display = "block";
}
function closeFormWarn(){
    formModal.style.display = "none";
}

contactSec.addEventListener("click", showFormWarn);
formModalBtn.addEventListener("click", closeFormWarn);


//Image gallery
var galleryImg = document.getElementsByClassName("imgFromGallery");
var galleryModal = document.getElementById("glyModal");
var galleryModalBtn = document.getElementById("glyModalButton");

function showImgGly(){
    galleryModal.style.display = "flex";
}
function closeImgGly(){
    galleryModal.style.display = "none";
}

/*for (var i = 0; i < galleryImg.length; i++){
    galleryImg[i].setAttribute("src", "media\\gallery\\img1.jpg");
}*/

for (var i = 0; i < galleryImg.length; i++){
    galleryImg[i].addEventListener("click", showImgGly);
}

galleryModalBtn.addEventListener("click", closeImgGly);


//imgHolder.setAttribute("src", "media\\gitIcon.png");






