class MediaList {
  constructor(media, photographer) {
    this._media = media;
    this._photographer = photographer;
  }

  createMediaList(type) {
    const $wrapper = document.querySelector(".media-container");
    const $postWrapper = document.createElement("div");
    $postWrapper.classList.add("post-container");

    if (type === "image") {
      const imageMedia = `
            <img alt="${this._media.title}" name="${this._media.title}" id="${this._media.id}" class="post-media post-img" src="${this._media.image}" tabindex="0">
            <div>
                <h3>${this._media.title}</h3>
                <div>
                    <p class="post-like">${this._media.likes}</p>
                    <i class="fa-regular fa-heart post-heart" aria-label="Liker la photo" tabindex="0"/></i>
                </div>
            </div>
        `;
      $postWrapper.innerHTML = imageMedia;
    }

    if (type === "video") {
      const videoMedia = `
            <video title="${this._media.title}" name="${this._media.title}" id="${this._media.id}" class="post-media post-video" autoplay loop src="${this._media.video}"></video>
            <div>
                <h3>${this._media.title}</h3>
                <div>
                    <p class="post-like">${this._media.likes}</p>
                    <i class="fa-regular fa-heart post-heart" aria-label="Liker la video"/></i>
                </div>
            </div>
        `;
      $postWrapper.innerHTML = videoMedia;
    }
    $wrapper.appendChild($postWrapper);
    return $wrapper;
  }
}
