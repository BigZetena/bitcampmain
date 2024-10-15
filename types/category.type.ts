import { Service } from './service';

export interface CategoryData {
  id: number;
  color: string;
  title: string;
  services: Service[];
}

export interface StackCategoryProps {
  name: string;
  items: string[];
}
