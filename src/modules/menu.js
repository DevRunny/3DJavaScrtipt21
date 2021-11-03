const menu = () => {
  const menu = document.querySelector("menu");

  document.addEventListener("click", (e) => {
    if (
      e.target.closest(".menu") ||
      e.target.classList.contains("close-btn") ||
      e.target.closest("ul")
    ) {
      menu.classList.toggle("active-menu");
    } else if (!e.target.closest(".active-menu")) {
      menu.classList.remove("active-menu");
    }
  });
};

export default menu;
