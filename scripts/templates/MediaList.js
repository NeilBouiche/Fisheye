class MediaList {
  constructor(media, photographer) {
    this._media = media;
    this._photographer = photographer;
    this.$body = document.querySelector("body");
  }

  createMediaList(type) {
    const $wrapper = document.querySelector(".media-container");
    const $postWrapper = document.createElement("div");
    $postWrapper.classList.add("post-container");

    if (type === "image") {
      const imageMedia = `
            <img alt="${this._media.title}" name="${this._media.title}" id="${this._media.id}" class="post-media post-img" src="${this._media.image}" aria-label="ouvrir la vue agrandie" tabindex="0">
            <div>
                <h3>${this._media.title}</h3>
                <div>
                    <p class="post-like">${this._media.likes}</p>
                    <i class="fa-regular fa-heart post-heart" tabindex="0"/></i>
                </div>
            </div>
        `;
      $postWrapper.innerHTML = imageMedia;
    }

    if (type === "video") {
      const videoMedia = `
            <video title="${this._media.title}" name="${this._media.title}" id="${this._media.id}" class="post-media post-video" autoplay loop src="${this._media.video}" aria-label="ouvrir la vue agrandie"></video>
            <div>
                <h3>${this._media.title}</h3>
                <div>
                    <p class="post-like">${this._media.likes}</p>
                    <i class="fa-regular fa-heart post-heart"/></i>
                </div>
            </div>
        `;
      $postWrapper.innerHTML = videoMedia;
    }
    $wrapper.appendChild($postWrapper);
    // Insertion de la LightBox
    let mediaCollection = document.querySelectorAll(".post-media");
    mediaCollection = [...mediaCollection];
    for (let i = 0; i < mediaCollection.length; i++) {
      ["click", "keydown"].forEach((e) => {
        mediaCollection[i].addEventListener(e, (key) => {
          if (key.code === "Enter" || e === "click") {
            const lightBox = new LightBox(
              mediaCollection[i],
              mediaCollection.indexOf(mediaCollection[i])
            );
            const createdLightBox = lightBox.createLightBox();
            lightBox.openLightBox(mediaCollection);
            lightBox.closeLightBox();
            lightBox.prev(mediaCollection);
            lightBox.next(mediaCollection);
            this.$body.appendChild(createdLightBox);
          }
        });
      });
    }
    return $wrapper;
  }
}
