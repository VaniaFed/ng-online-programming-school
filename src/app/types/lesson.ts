export interface ILesson {
  _id: string;
  name: string;
  description: string;
  videoUrl?: string;
  textContent: string;
  courseId: string;
  linkHref?: string[];
}
