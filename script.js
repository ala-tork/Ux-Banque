let videoBtn = document.querySelector(".video-btn");
let reviewBtn = document.querySelector(".review-btn");

videoBtn.addEventListener("click", function () {
  scrollToOffers();
});
reviewBtn.addEventListener("click", function () {
  scrollToOffers();
});

let scrollToOffers = function () {
  let packCoords = document
    .querySelector(".offers-sections")
    .getBoundingClientRect();
  window.scrollTo({
    top: packCoords.y,
    behavior: "smooth",
  });
};

let etudBtn = document.querySelector(".offre-etud-btn")
let empBtn = document.querySelector(".offre-emp-btn")
let premBtn = document.querySelector(".offre-prem-btn")
let helpBtn = document.querySelector(".help-btn")
let needsBtn = document.querySelector(".needs-btn")

etudBtn.addEventListener("click", function(){
    window.location.href = "../Pack-Etudiant/pack-etudiant.html";

})
empBtn.addEventListener("click", function(){
    window.location.href = "../Pack-Employee/pack-employee.html";

})
premBtn.addEventListener("click", function(){
    window.location.href = "../Pack-Premium/pack-premium.html";

})
helpBtn.addEventListener("click", function(){
    window.location.href = "../Demande-Aide/demande-aide.html";

})
needsBtn.addEventListener("click", function(){
    window.location.href = "../Simulateur-Besoins/simulateur-besoins.html";

})