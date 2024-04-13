let exitBtn = document.querySelector(".exit");

exitBtn.addEventListener("click", function () {
  window.location.href = "../index.html";
});


var modal = document.getElementById('myModal');

var confirmBtn = document.querySelector(".confirm");

confirmBtn.onclick = function() {
  modal.style.display = "block";
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let continueBtn = document.querySelector(".continue");
continueBtn.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
  