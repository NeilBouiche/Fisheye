//Class qui se charge de connecter a l'api et insert les templates neccessaires a la construction de la page
class Profil {
  constructor() {
    this.$main = document.getElementById("main");
    this.photographersApi = new Api("./data/photographers.json");
    this.idQuery = new URL(document.location).searchParams;
    this.id = this.idQuery.get("id");
  }

  async main() {
    // Utilisation des differents fetch pour ne recuperer que ce dont on a besoin
    const photographerIdedData =
      await this.photographersApi.getPhotographerById(this.id);
    const getPortfolioIdedData =
      await this.photographersApi.getPortfolioByUserId(this.id);
    // Creation d'un photographe pour le profile et assignement de la banner
    const IdedPhotographer = new Photographers(photographerIdedData);
    const TemplateBanner = new PhotographerFactory("banner", IdedPhotographer);
    this.$main.appendChild(TemplateBanner.createBanner());
    //Insertion du filtre
    const postFilter = new Filter();
    this.$main.appendChild(postFilter.createFilter());
    postFilter.dropDownhandler();
    //Insertion de la liste des posts
    postFilter.displayMediasAndLanguette(
      getPortfolioIdedData,
      photographerIdedData
    );
  }
}
const profil = new Profil();
profil.main();
