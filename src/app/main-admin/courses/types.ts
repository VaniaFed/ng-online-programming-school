export interface ICourse {
  _id: string;
  name: string;
  description: string;
  price: string;
  imgSrc: string;
}

export interface IStudent {
  _id: string;
  fullName: string;
  course: string;
}
