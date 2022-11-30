class LightBox {
  constructor(data) {
    this._data = data;
  }

  createLightBox() {
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

  openLightBox() {
    const $wrapper = document.querySelector(".lightbox-container");
    $wrapper.style.display = "block";
    main.style.display = "none";
    header.style.display = "none";
  }

  closeLightBox() {
    const $wrapper = document.querySelector(".lightbox-container");
    const closeLightBox = document.querySelector(".close-lightbox");
    closeLightBox.addEventListener("click", function () {
      $wrapper.style.display = "none";
      main.style.display = "block";
      header.style.display = "block";
    });
    document.addEventListener("keydown", function (e) {
      if (e.code == "Escape") {
        $wrapper.style.display = "none";
        main.style.display = "block";
        header.style.display = "block";
      }
    });
  }
}
