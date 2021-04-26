"use strict";

var contactSec = document.getElementById("contactSection");
var formModal = document.getElementById("modal");
var formModalBtn = document.getElementById("modalButton");

function showModal()
{
    console.log("Kawabanga!");
    formModal.style.display = "block";
}

function closeModal()
{
    formModal.style.display = "none";
}

contactSec.addEventListener("click", showModal);
formModalBtn.addEventListener("click", closeModal);



//LOG TESTS
var cat = { name :  "Ruby",
            age  :  4,
            color:  "black",
            meow :  function () 
            {
                console.log("Meow!");
            }
}

cat.meow();
