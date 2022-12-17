class LightBox {
  constructor(data, index) {
    this._data = data;
    this._index = index;
  }

  createLightBox() {
    const $wrapper = document.querySelector(".lightbox-container");
    if (this._data.classList.contains("post-img")) {
      const lightBox = `
        <div class="lightbox">
            <i class="fa-solid chevron fa-chevron-left prev-media" aria-label="Passer au medias précédent" tabindex="1"></i>
            <div class="lightbox-text">
                <img alt="${this._data.getAttribute(
                  "alt"
                )}" class="lightbox-media lightbox-img lightbox-active" src="${this._data.getAttribute(
        "src"
      )}"/>
                <h3>${this._data.getAttribute("alt")}</h3>
            </div>
      <i class="fa-solid chevron fa-chevron-right next-media" aria-label="Passer au medias suivant"tabindex="2"></i>
      <i class="close-lightbox fa-solid croix fa-x" aria-label="Fermer la vue agrandie" tabindex="3"></i>
        </div>
    `;
      $wrapper.innerHTML = lightBox;
    } else if (this._data.classList.contains("post-video")) {
      const lightBox = `
        <div class="lightbox">
            <i class="fa-solid chevron fa-chevron-left prev-media" aria-label="Passer au medias précédent" tabindex="1"></i>
            <div class="lightbox-text">
                <video title="${this._data.getAttribute(
                  "title"
                )}" class="lightbox-media lightbox-video lightbox-active" autoplay loop src="${this._data.getAttribute(
        "src"
      )}"></video>
                <h3>${this._data.getAttribute("title")}</h3>
            </div>
            <i class="fa-solid chevron fa-chevron-right next-media" aria-label="Passer au medias suivant" tabindex="2"></i>
            <i class="close-lightbox fa-solid croix fa-x" aria-label="Fermer la vue agrandie" tabindex="3"></i>
        </div>
`;
      $wrapper.innerHTML = lightBox;
    }
    return $wrapper;
  }

  prev(data) {
    const prev = document.querySelector(".prev-media");
    ["click", "keydown"].forEach((e) => {
      prev.addEventListener(e, (key) => {
        if (key.code == "Enter" || e == "click") {
          this._index--;
          if (this._index <= 0) {
            this._index = data.length - 1;
          }
          const currentItem = data[this._index];
          const lightBoxMedia = document.querySelector(".lightbox-text");
          if (currentItem.src.includes(".mp4")) {
            lightBoxMedia.innerHTML = `<video title="${currentItem.title}" class="lightbox-media lightbox-video lightbox-active" autoplay loop src="${currentItem.src}"></video><p>${currentItem.title}</p>`;
          } else {
            lightBoxMedia.innerHTML = `<img alt="${currentItem.alt}" class="lightbox-media lightbox-img lightbox-active" src="${currentItem.src}"/><p>${currentItem.alt}</p>`;
          }
        }
      });
    });
  }

  next(data) {
    const next = document.querySelector(".next-media");
    ["click", "keydown"].forEach((e) => {
      next.addEventListener(e, (key) => {
        if (key.code == "Enter" || e == "click") {
          this._index++;
          if (this._index >= data.length) {
            this._index = 0;
          }
          const currentItem = data[this._index];
          const lightBoxMedia = document.querySelector(".lightbox-text");
          if (currentItem.src.includes(".mp4")) {
            lightBoxMedia.innerHTML = `<video title="${currentItem.title}" class="lightbox-media lightbox-video lightbox-active" autoplay loop src="${currentItem.src}"></video><p>${currentItem.title}</p>`;
          } else {
            lightBoxMedia.innerHTML = `<img alt="${currentItem.alt}" class="lightbox-media lightbox-img lightbox-active" src="${currentItem.src}"/><p>${currentItem.alt}</p>`;
          }
        }
      });
    });
  }

  openLightBox() {
    document.querySelector(".prev-media").focus();
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
