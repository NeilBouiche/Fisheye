class Filter {
  constructor() {
    this.$main = document.getElementById("main");
  }

  createFilter() {
    const $wrapper = document.querySelector(".filter-container");

    const filter = `
    <p class="filter-text">Filtrer par</p>
    <div class="select-wrapper">
        <div class="select">
            <div class="select__trigger" role="button" aria-haspopup="listbox" aria-expanded="false"  tabindex="0"><span>Popularité</span>
                <div class="arrow"></div>
            </div>
            <div class="custom-options" role="listbox">
                <span  id="filter__option1" class="custom-option selected" aria-label="Trier par popularité" role="option" tabindex="0" data-value="Popularité">Popularité</span>
                <span  id="filter__option2" class="custom-option" aria-label="Trier par date" role="option" tabindex="0" data-value="date">Date</span>
                <span  id="filter__option3" class="custom-option" aria-label="Trier par titre" role="option" tabindex="0" data-value="titre">Titre</span>
            </div>
        </div>
    </div>
    `;
    $wrapper.innerHTML = filter;
    return $wrapper;
  }

  dropDownhandler() {
    const selectWrapper = document.querySelector(".select-wrapper");
    const customOptions = document.querySelectorAll(".custom-option");
    const selectBox = document.querySelector(".select__trigger");
    ["click", "keydown"].forEach((e) => {
      selectWrapper.addEventListener(e, (key) => {
        if (key.code == "Enter" || e == "click") {
          document.querySelector(".select").classList.toggle("open");
          if (selectBox.getAttribute("aria-expanded") == "false") {
            selectBox.setAttribute("aria-expanded", "true");
          } else {
            selectBox.setAttribute("aria-expanded", "false");
          }
        }
      });
    });
    for (const option of customOptions) {
      option.addEventListener("click", function () {
        if (!this.classList.contains("selected")) {
          this.parentNode
            .querySelector(".custom-option.selected")
            .classList.remove("selected");
          this.classList.add("selected");
          this.closest(".select").querySelector(
            ".select__trigger span"
          ).textContent = this.textContent;
        }
      });
      option.addEventListener("keydown", function (key) {
        if (key.code == "Enter") {
          if (!this.classList.contains("selected")) {
            this.parentNode
              .querySelector(".custom-option.selected")
              .classList.remove("selected");
            this.classList.add("selected");
            this.closest(".select").querySelector(
              ".select__trigger span"
            ).textContent = this.textContent;
          }
        }
      });
    }
    // Ferme les filtres si on clique ailleur
    window.addEventListener("click", function (e) {
      const select = document.querySelector(".select");
      if (!select.contains(e.target)) {
        select.classList.remove("open");
      }
    });
  }
  //Insertion de la liste des posts
  postGeneration(data) {
    data.forEach((e) => {
      if (e.hasOwnProperty("image")) {
        const mediaImage = new MediaFactory("image", e);
        const TemplateImage = new MediaList(mediaImage);
        this.$main.appendChild(TemplateImage.createMediaList("image"));
      } else if (e.hasOwnProperty("video")) {
        const mediaVideo = new MediaFactory("video", e);
        const TemplateVideo = new MediaList(mediaVideo);
        this.$main.appendChild(TemplateVideo.createMediaList("video"));
      }
    });
  }
  // Insertion de la languette
  languetteAndLike(data, photographer) {
    const userLanguette = new Languette(data, photographer);
    userLanguette.languetteLike(data);
    this.$main.appendChild(userLanguette.createLanguette());
    userLanguette.likeHandler();
  }
  // Fonction de trie et d'affichage des donnees triées ainsi que de la languette
  displayMediasAndLanguette(data, photographer) {
    const filterOption = document.getElementsByClassName("custom-option");
    const filterSelected = document.querySelector(".select__trigger span");
    const $wrapper = document.querySelector(".media-container");
    data.sort((a, b) => b.likes - a.likes);
    this.postGeneration(data);
    this.languetteAndLike(data, photographer);
    for (let i = 0; i < filterOption.length; i++) {
      ["click", "keydown"].forEach((e) => {
        filterOption[i].addEventListener(e, (key) => {
          if (key.code == "Enter" || e == "click") {
            $wrapper.innerHTML = "";
            if (filterSelected.innerHTML === "Popularité") {
              data.sort((a, b) => b.likes - a.likes);
              this.postGeneration(data);
              this.languetteAndLike(data, photographer);
            } else if (filterSelected.innerHTML === "Date") {
              data.sort((a, b) => b.date - a.date);
              this.postGeneration(data);
              this.languetteAndLike(data, photographer);
              console.log(data);
            } else if (filterSelected.innerHTML === "Titre") {
              data.sort(function (a, b) {
                if (a.title < b.title) {
                  return -1;
                }
                if (a.title > b.title) {
                  return 1;
                }
                return 0;
              });
              this.postGeneration(data);
              this.languetteAndLike(data, photographer);
            }
          }
        });
      });
    }
  }
}
