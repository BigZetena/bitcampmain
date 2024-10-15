export interface CourseProps {
  course: Course;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string; // URL или путь к изображению
}
