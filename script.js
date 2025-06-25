window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".main_visual .title");
  title.style.opacity = 0;
  title.style.transition = "opacity 2s ease";

  setTimeout(() => {
    title.style.opacity = 1;
  }, 500);
});
