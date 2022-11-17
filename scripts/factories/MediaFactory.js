class MediaFactory {
  constructor(type, data) {
    if (type === "image") {
      return new Image(data);
    } else if (type === "video") {
      return new Video(data);
    } else {
      throw "Format not supported";
    }
  }
}
