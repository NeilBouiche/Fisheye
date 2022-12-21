class MediaFactory {
  constructor(type, data) {
    if (type === "image") {
      return new Image(data);
    }
    if (type === "video") {
      return new Video(data);
    }
    if (type === undefined) {
      throw "Format not supported";
    }
  }
}
