// class template qui permet de mettre en page la partie Banner de la page photographe

class Banner {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createBanner() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photograph-header");

    const banner = `
        <div class="photograph-header__textBlock">
            <h1>${this._photographer.name}</h1>
            <h2>${this._photographer.city}, ${this._photographer.country}</h2>
            <p aria-description='Texte de présentation du photographe'>${this._photographer.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">
        Contactez-moi
        </button>
        <img class="photograph-header__img" alt="Portrait de ${this._photographer.name}" src="${this._photographer.portrait}"/>`;
    $wrapper.innerHTML = banner;
    return $wrapper;
  }
}
