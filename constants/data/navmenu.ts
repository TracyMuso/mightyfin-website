export interface NavigationLink {
  title: string;
  url: string;
}

export const navLinks: NavigationLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about-us",
  },
  {
    title: "Products",
    url: "/product",
  },
  {
    title: "Blog & News",
    url: "/blog",
  },
];
