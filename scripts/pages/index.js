//Class qui se charge de connecter a l'api et insert le template pour chaque photographe

class Accueil {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );
    this.photographersApi = new Api("./data/photographers.json");
  }

  async main() {
    let photographersData = await this.photographersApi.getPhotographers();

    photographersData
      .map((photographer) => new Photographers(photographer))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }
}

const accueil = new Accueil();
accueil.main();
