class PhotographerFactory {
  constructor(type, data) {
    if (type === "card") {
      return new PhotographerCard(data);
    } else if (type === "banner") {
      return new Banner(data);
    } else {
      throw "Format not supported";
    }
  }
}
