export class Tile {
  text: string;
  imgSrc: string;
  linkHref?: string;
  constructor(text?, imgSrc? , linkHref?) {
    this.text = text ? text : '';
    this.imgSrc = imgSrc ? imgSrc : '';
    this.linkHref = linkHref ? linkHref : null;
  }
}
