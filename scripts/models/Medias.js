// class modele des medias

class Image {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
    this._image = data.image;
  }

  get id() {
    return this._id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }

  get image() {
    return `assets/sample/${this._image}`;
  }
}

class Video {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._video = data.video;
    this._title = data.title;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
    this._image = data.image;
  }

  get id() {
    return this._id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }

  get video() {
    return `assets/sample/${this._video}`;
  }
}
