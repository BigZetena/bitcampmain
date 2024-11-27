export interface StackBlockProps {
  title: string;
  link?: string;
  href?: string;
  categories: {
    name: string;
    items: string[];
  }[];
}

export interface StackSectionType {
  id: number;
  title: string;
  link?: string;
  href?: string;
  categories: {
    name: string;
    items: string[];
  }[];
}
