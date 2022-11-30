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
    const newPostArray = [];
    allMediasData.forEach((e) => {
      if (e.photographerId == this.id) {
        newPostArray.push(e);
        console.log(newPostArray);
        const filteredPost = postFilter.sortingHandler(newPostArray);
        console.log(filteredPost);
        //Image
        if (e.hasOwnProperty("image")) {
          const mediaImage = new MediaFactory("image", e);
          const TemplateImage = new MediaList(mediaImage);
          this.$main.appendChild(TemplateImage.createMediaList("image"));
          // Video
        } else if (e.hasOwnProperty("video")) {
          const mediaVideo = new MediaFactory("video", e);
          const TemplateVideo = new MediaList(mediaVideo);
          this.$main.appendChild(TemplateVideo.createMediaList("video"));
        }
      }
    });
    // for (let i = 0; i < allMediasData.length; i++) {
    //   if (allMediasData[i].photographerId == this.id) {
    //     newPostArray.push(allMediasData[i]);
    //     console.log(newPostArray);
    //     const filteredPost = postFilter.sortingHandler(newPostArray);
    //     console.log(filteredPost);
    //     //Image
    //     if (filteredPost[i].hasOwnProperty("image")) {
    //       const mediaImage = new MediaFactory("image", filteredPost[i]);
    //       const TemplateImage = new MediaList(mediaImage);
    //       this.$main.appendChild(TemplateImage.createMediaList("image"));
    //       // Video
    //     } else if (filteredPost[i].hasOwnProperty("video")) {
    //       const mediaVideo = new MediaFactory("video", filteredPost[i]);
    //       const TemplateVideo = new MediaList(mediaVideo);
    //       this.$main.appendChild(TemplateVideo.createMediaList("video"));
    //     }
    //   }
    // }
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
    userLanguette.likeHandler();
    // Insertion de la lightbox apres tri des informations passé
    let mediaCollection = document.getElementsByClassName("post-media");
    mediaCollection = [...mediaCollection];
    for (let i = 0; i < mediaCollection.length; i++) {
      ["click", "keydown"].forEach((event) => {
        mediaCollection[i].addEventListener(event, (key) => {
          if (key.code == "Enter" || event == "click") {
            const userLightBox = new LightBox(mediaCollection[i]);
            const renderLightBox = userLightBox.createLightBox();
            userLightBox.openLightBox();
            userLightBox.closeLightBox();
            this.$body.appendChild(renderLightBox);
          }
          const prev = document.querySelector(".prev-media");
          prev.addEventListener("click", () => {
            const prevLightBox = new LightBox(mediaCollection[i - 1]);
            const renderPrevLightBox = prevLightBox.createLightBox();
            prevLightBox.closeLightBox();
            this.$body.appendChild(renderPrevLightBox);
          });
          const next = document.querySelector(".next-media");
          next.addEventListener("click", () => {
            const nextLightBox = new LightBox(mediaCollection[i + 1]);
            const renderNextLightBox = nextLightBox.createLightBox();
            nextLightBox.closeLightBox();
            this.$body.appendChild(renderNextLightBox);
          });
        });
      });
    }
  }
}

const profil = new Profil();
profil.main();
