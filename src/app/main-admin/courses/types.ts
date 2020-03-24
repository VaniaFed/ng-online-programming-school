export interface ICourse {
  id: string;
  name: string;
  description: string;
  price: string;
  imgSrc: string;
}

export interface IStudent {
  id: string;
  fullName: string;
  course: string;
}
