class LightBox {
  static init() {
    const triggers = document
      .querySelectorAll(".post-media")
      .forEach((trigger) =>
        trigger.addEventListener("click", (e) => {
          e.preventDefault();
          const $wrapper = document.querySelector(".lightbox-container");
          $wrapper.style.display = "block";
          main.style.display = "none";
          header.style.display = "none";
          console.log("ok");
          new LightBox(e.currentTarget.getAttribute("src"));
        })
      );
  }

  constructor() {
    this._data = querySelectorAll(".post-media");
    [...this._data] = this._data;
    const element = this.buildDOM(src);
    document.body.appendChild(element);
  }

  buildDOM(src) {
    const $wrapper = document.querySelector(".lightbox-container");
    if (this._data.classList.contains("post-img")) {
      const lightBox = `
            <div class="lightbox">
                <i class="fa-solid chevron fa-chevron-left prev-media"></i>
                <div class="lightbox-text">
                    <img alt="${this._data.getAttribute(
                      "alt"
                    )}" class="lightbox-media lightbox-img lightbox-active" src="${this._data.getAttribute(
        "src"
      )}"/>
                    <p>${this._data.getAttribute("alt")}</p>
                </div>
          <i class="fa-solid chevron fa-chevron-right next-media"></i>
          <i class="close-lightbox fa-solid croix fa-x"></i>
            </div>
        `;
      $wrapper.innerHTML = lightBox;
    } else if (this._data.classList.contains("post-video")) {
      const lightBox = `
            <div class="lightbox">
                <i class="fa-solid chevron fa-chevron-left prev-media"></i>
                <div class="lightbox-text">
                    <video title="${this._data.getAttribute(
                      "title"
                    )}" class="lightbox-media lightbox-video lightbox-active" autoplay loop src="${this._data.getAttribute(
        "src"
      )}"></video>
                    <p>${this._data.getAttribute("title")}</p>
                </div>
                <i class="fa-solid chevron fa-chevron-right next-media"></i>
                <i class="close-lightbox fa-solid croix fa-x"></i>
            </div>
    `;
      $wrapper.innerHTML = lightBox;
    }
    return $wrapper;
  }
}
