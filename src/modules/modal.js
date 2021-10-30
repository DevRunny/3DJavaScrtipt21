const modal = () => {
  console.dir(document);
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  const openModal = () => {
    modal.style.display = "block";
    modal.animate(
      [
        {
          transform: "translate3D(0, -100px, 0)",
          backgroundColor: "white",
        },
        {
          transform: "translate3D(0, 0, 0)",
        },
      ],
      {
        duration: 500,
      }
    );
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.outerWidth > 768) {
        openModal();
      } else {
        modal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;
