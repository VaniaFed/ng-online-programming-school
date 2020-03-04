export class Course {
  id: string;
  name: string;
  price: string;
  imgSrc: string;
  constructor(id?, name?, price?, imgSrc?) {
    this.id = id ? id : '';
    this.name = name ? name : '';
    this.price = price ? price : '';
    this.imgSrc = imgSrc ? imgSrc : '';
  }
}
