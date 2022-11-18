//Class qui se charge de connecter a l'api et insert les templates neccessaires a la construction de la page

class Profil {
  constructor() {
    this.$main = document.getElementById("main");
    this.$body = document.querySelector("body");
    this.photographersApi = new Api("./data/photographers.json");
    this.idQuery = new URL(document.location).searchParams;
    this.id = this.idQuery.get("id");
  }

  async main() {
    // Utilisation du fetch ne retournant que le bon utilisateur
    const photographerIdedData =
      await this.photographersApi.getPhotographerById(this.id);
    // Creation d'un photographe pour le profile et assignement de la banner
    const IdedPhotographer = new Photographers(photographerIdedData);
    const TemplateBanner = new Banner(IdedPhotographer);
    this.$main.appendChild(TemplateBanner.createBanner());
    //Insertion du filtre
    const postFilter = new Filter();
    this.$main.appendChild(postFilter.createFilter());
    postFilter.dropDownhandler();
    // Insertion de la liste des posts et detecte la source du media dans le template
    const allMediasData = await this.photographersApi.getAllMedias();
    allMediasData.forEach((e) => {
      //Image
      if (e.hasOwnProperty("image") && e.photographerId == this.id) {
        const mediaImage = new MediaFactory("image", e);
        const TemplateImage = new MediaList(mediaImage);
        this.$main.appendChild(TemplateImage.createMediaList("image"));
        // Video
      } else if (e.hasOwnProperty("video") && e.photographerId == this.id) {
        const mediaVideo = new MediaFactory("video", e);
        const TemplateVideo = new MediaList(mediaVideo);
        this.$main.appendChild(TemplateVideo.createMediaList("video"));
      }
    });
    // Insertion de la languette customized (nombre de like et prix du photographe)
    const IdedPortfolio = await this.photographersApi.getPortfolioByUserId(
      this.id
    );
    let totalLikes = 0;
    for (let i = 0; i < IdedPortfolio.length; i++) {
      const mediaLikes = IdedPortfolio[i].likes;
      totalLikes += mediaLikes;
    }
    const userLanguette = new Languette(totalLikes, photographerIdedData);
    this.$main.appendChild(userLanguette.createLanguette());
    // Insertion de la lightbox apres tri des informations passed
    const mediaCollection = document.getElementsByClassName("post-media");
    for (let i = 0; i < mediaCollection.length; i++) {
      mediaCollection[i].addEventListener("click", () => {
        const userLightBox = new LightBox(mediaCollection[i]);
        const renderLightBox = userLightBox.createLightBox();
        userLightBox.openLightBox();
        userLightBox.closeLightBox();
        this.$body.appendChild(renderLightBox);
      });
    }
  }
}

const profil = new Profil();
profil.main();
