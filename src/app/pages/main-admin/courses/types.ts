export interface ICourse {
  id: string;
  name: string;
  price: string;
  imgSrc: string;
}

export interface IStudent {
  id: string;
  fullName: string;
  course: string;
}
