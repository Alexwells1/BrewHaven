export interface MenuItem {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  brewTime?: string;
  featured: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  comments: number;
  image: string;
}



