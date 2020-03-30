export class Course {
  _id: string;
  name: string;
  price: string;
  imgSrc: string;
  constructor(id?, name?, price?, imgSrc?) {
    this._id = id ? id : '';
    this.name = name ? name : '';
    this.price = price ? price : '';
    this.imgSrc = imgSrc ? imgSrc : '';
  }
}
