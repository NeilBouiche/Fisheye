class Filter {
  constructor() {}

  createFilter() {
    const $wrapper = document.querySelector(".filter-container");

    const filter = `
    <p class="filter-text">Filtrer par</p>
    <div class="select-wrapper">
        <div class="select">
            <div class="select__trigger"><span>Popularité</span>
                <div class="arrow"></div>
            </div>
            <div class="custom-options">
                <span  id="filter__option1" class="custom-option selected" role="option" tabindex="-1" data-value="Popularité">Popularité</span>
                <span  id="filter__option2" class="custom-option" role="option" tabindex="-1" data-value="date">Date</span>
                <span  id="filter__option3" class="custom-option" role="option" tabindex="-1" data-value="titre">Titre</span>
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
    selectWrapper.addEventListener("click", function () {
      this.querySelector(".select").classList.toggle("open");
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
    }
  }
}
