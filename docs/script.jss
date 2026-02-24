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
