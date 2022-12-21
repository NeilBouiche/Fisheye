class Languette {
  constructor(dataLike, dataPrice) {
    this._likes = dataLike.likes;
    this._photographerPrice = dataPrice.price;
  }

  languetteLike(data) {
    this._likes = 0;
    for (let i = 0; i < data.length; i++) {
      const mediaLikes = data[i].likes;
      this._likes += mediaLikes;
    }
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
    const postLike = document.querySelectorAll(".post-like");
    const languetteLikeText = document.querySelector(".languette-like-text");
    for (let i = 0; i < postHeart.length; i++) {
      ["click", "keydown"].forEach((e) => {
        postHeart[i].addEventListener(e, (key) => {
          if (key.code === "Enter" || e === "click") {
            if (postHeart[i].classList.contains("fa-regular")) {
              postHeart[i].classList.replace("fa-regular", "fa-solid");
              postLike[i].textContent++;
              languetteLikeText.textContent++;
            } else if (postHeart[i].classList.contains("fa-solid")) {
              postHeart[i].classList.replace("fa-solid", "fa-regular");
              postLike[i].textContent--;
              languetteLikeText.textContent--;
            }
          }
        });
      });
    }
  }
}
