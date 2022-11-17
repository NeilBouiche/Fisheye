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
}
