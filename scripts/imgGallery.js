"use strict";

//html elements references
let modalImg = document.getElementById("imgHolder");
let galleryImg = document.getElementsByClassName("imgFromGallery");
let galleryModal = document.getElementById("glyModal");
let glyModalWindow = document.getElementById("glyModalWindow");
let galleryModalBtn = document.getElementById("glyModalButton");
let galleryVideo = document.getElementById('galleryVideo');

//img references
let imgReferences = ["media\\gallery\\img1.png",
                     "media\\gallery\\img2.png",
                     "media\\gallery\\img3.png",
                     "media\\gallery\\img4.png",
                     "media\\gallery\\img5.png"]

//adds images to gallery
for (let i = 0; i < galleryImg.length; i++){
    galleryImg[i].setAttribute("src", imgReferences[i]);
}

//adds listeners to open gallery modal
for (let i = 0; i < galleryImg.length; i++){
    galleryImg[i].addEventListener("click", function(){galleryModal.style.display = "flex"});
}
//adds listener to close gallery modal
galleryModalBtn.addEventListener("click", function(){galleryModal.style.display = "none";});

//Mouse out close
let isOut = false;

glyModalWindow.addEventListener("mouseover", function(){isOut = 'false'});
glyModalWindow.addEventListener("mouseout", function(){isOut = 'true'});
galleryModal.addEventListener("click", function(){if(isOut === 'true') {galleryModal.style.display = "none";}});

//adds listeners on images to set modalImg
for (let i = 0; i < galleryImg.length; i++){
    galleryImg[i].addEventListener("click", function(){ modalImg.setAttribute("src", imgReferences[i])});
    galleryImg[i].addEventListener("click", function(){ galleryVideo.hidden = true});
    galleryImg[i].addEventListener("click", function(){ modalImg.hidden = false});
    screen.orientation.lock("landscape");

}

galleryImg[0].addEventListener("click", function(){ galleryVideo.hidden = false});
galleryImg[0].addEventListener("click", function(){ modalImg.hidden = true});
