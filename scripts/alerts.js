let closeBtn = document.getElementById("alertBoxCloseBtn");
let gitBtn = document.getElementById("asideGitBtn");
let alert = document.getElementById("alert");

function showAlert(){
    alert.style.display = "inline";
}

function hideAlert(){
    alert.style.display = "none";
}

gitBtn.addEventListener("click", showAlert);
closeBtn.addEventListener("click", hideAlert);

