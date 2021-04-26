"use strict";

//CONTACT SECTION FORM INTERACTION

var contactSec = document.getElementById("contactSection");

function contactSecClick()
{
    contactSec.innerHTML = "a";
}

contactSec.addEventListener("click", contactSecClick);



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
