class Languette {
  constructor(dataLike, dataPrice) {
    this._likes = dataLike;
    this._photographerPrice = dataPrice.price;
  }

  createLanguette() {
    const $wrapper = document.querySelector(".languette-container");
    const languette = `
      <div class="languette-like-container">
        <p class="languette-like-text">${this._likes}</p>
        <i class="fa-sharp fa-solid fa-heart"></i>
      </div>
      <div class="languette-price-container">
        <p class="languette-price">${this._photographerPrice} €/jours</p>
      </div>
    `;
    $wrapper.innerHTML = languette;
    return $wrapper;
  }

  likeHandler() {
    const postHeart = document.querySelectorAll(".post-heart");
    let postLike = document.querySelectorAll(".post-like");
    let languetteLikeText = document.querySelector(".languette-like-text");
    let isLiked = false;
    postHeart.forEach((e) => {
      e.addEventListener("click", () => {
        if (!isLiked || e.classList.contains("fa-regular")) {
          e.classList.replace("fa-regular", "fa-solid");
          postLike.textContent++;
          languetteLikeText.textContent++;
          isLiked = true;
        } else if ((isLiked = true && e.classList.contains("fa-solid"))) {
          e.classList.replace("fa-solid", "fa-regular");
          postLike.textContent--;
          languetteLikeText.textContent--;
          isLiked = false;
        }
      });
    });
  }
}
