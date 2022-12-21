class PhotographerFactory {
  constructor(type, data) {
    if (type === "card") {
      return new PhotographerCard(data);
    }
    if (type === "banner") {
      return new Banner(data);
    }
    if (type === undefined) {
      throw "Format not supported";
    }
  }
}
