function openMenu() {
  document.getElementById("sideMenu").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

function unlockArticle(button) {
  const card = button.closest(".article-card");
  card.classList.remove("locked");
  card.classList.add("unlocked");
}
function showPasswordBox() {
  document.getElementById("passwordModal").style.display = "flex";
}

function checkPassword() {
  const entered = document.getElementById("articlePassword").value;
  const correctPassword = "hunter123"; // change this

  if (entered === correctPassword) {
    document.getElementById("fullArticle").style.display = "block";
    document.querySelector(".locked-content").style.display = "none";
    document.getElementById("passwordModal").style.display = "none";
  } else {
    document.getElementById("errorMsg").innerText = "Incorrect password.";
  }
}
