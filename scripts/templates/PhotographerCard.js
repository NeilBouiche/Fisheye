// Class Template qui me permet de mettre en page et permet dans index.js de lier les valeurs
class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const $wrapper = document.createElement("article");

    const photographerCard = `
            <a href="./photographer.html?id=${this._photographer.id}" role="link" aria-description="Zone clickable pour accéder aux informations du photographe">
                <img src="${this._photographer.portrait}" alt="Photo de ${this._photographer.name}">
                <h2>${this._photographer.name}</h2>
            </a>    
            <div aria-description="Présentation de ${this._photographer.name}">
                <h3>${this._photographer.city} ${this._photographer.country}</h3>
                <p aria-description="Message du photographe">${this._photographer.tagline}</p>
                <small araia-description="Prix du photographe">${this._photographer.price} €/jours</small>
            </div>
        `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
