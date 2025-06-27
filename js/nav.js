document.addEventListener("DOMContentLoaded", () => {
  const currentButton = document.querySelector('.nav button[data-current="true"]');
  if (currentButton) {
    currentButton.classList.add("selected");

    // disable click by removing href from parent <a>
    const parentLink = currentButton.closest("a");
    if (parentLink) {
      parentLink.removeAttribute("href");
    }
  }
});