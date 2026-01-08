
export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  isNew?: boolean;
  hasDropdown?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  sacco: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
