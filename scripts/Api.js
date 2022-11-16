// class qui se charge d'effectuer une requete fetch

class Api {
  constructor(url) {
    this._url = url;
  }

  async get() {
    return fetch(this._url)
      .then((res) => res.json())
      .catch((err) => JSON.parse(JSON.stringify(err)));
  }
}

class PhotographersApi extends Api {
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    return await this.get();
  }
}
