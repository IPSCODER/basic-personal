export interface SubLink {
    title: string;
    href: string;
  }
  
  export interface NestedSubLink {
    title: string;
    subLinks: SubLink[];
  }
  
  export interface MenuItem {
    title: string;
    href?: string; // Optional for direct links
    subLinks?: NestedSubLink[]; // Optional for dropdown menus
  }
  