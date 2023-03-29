$(document).ready(function () {
  $("[data-scroll-top]").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  $(".lightgallery").lightGallery();

  function sharePage() {
    const url = window.location.href;
    const title = document.title;
    const text = "Confira esta página:";

    navigator
      .share({ url, title, text })
      .then(() => console.log("Compartilhado com sucesso!"))
      .catch((error) => console.error("Erro ao compartilhar: ", error));
  }

  const btnShare = document.querySelector(".btn-share");
  btnShare.addEventListener("click", sharePage);

  const btnWishlist = document.querySelector(".btn-wishlist");
  btnWishlist.addEventListener("click", (event) => {
    event.preventDefault();
    btnWishlist.classList.toggle("active");
  });
});
