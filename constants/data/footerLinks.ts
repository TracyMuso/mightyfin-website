import { type NavItem } from "@/types";

interface FooterLink {
  title: string;
  titleLink: string;
  links: NavItem[];
}

interface SocialLink {
  label: string;
  icon: string;
  link: string;
}

export const footerLinks: FooterLink[] = [
  {
    title: "Company",
    titleLink: "#",
    links: [
      {
        label: "Home",
        link: "/",
      },
      {
        label: "About",
        link: "/about",
      },
      {
        label: "Products",
        link: "/products",
      },
      // {
      //   label: "Blog",
      //   link: "#",
      // },
    ],
  },
  {
    title: "Legal",
    titleLink: "#",
    links: [
      // {
      //   label: "FAQs",
      //   link: "#",
      // },
      // {
      //   label: "Legal",
      //   link: "#",
      // },
      {
        label: "Terms and conditions",
        link: "#",
      },
      {
        label: "Privacy",
        link: "#",
      },
      // {
      //   label: "Sitemap",
      //   link: "#",
      // },
    ],
  },
];

export {};

export const ContactLinks: SocialLink[] = [
  {
    label: "+260 97 8555299",
    icon: "/Icons/fluent_call-12-regular.svg",
    link: "tel:0978555299",
  },
  {
    label: "info@mightyfinance.co.zm",
    icon: "/Icons/quill_mail.svg",
    link: "mailto:mightyfinance.co.zm",
  },
  {
    label: "First Floor, Sunshare Tower",
    icon: "/Icons/system-uicons_location.svg",
    link: "https://maps.app.goo.gl/5x4LxLNNPeDM82Uu9",
  },
];

export const footerSocialLinks: SocialLink[] = [
  // {
  //   label: "Instagram",
  //   icon: "/Icons/instagram.svg",
  //   link: "#",
  // },
  {
    label: "Linkedin",
    icon: "/Icons/linkedin.svg",
    link: "https://www.linkedin.com/company/mighty-finance-solution/",
  },
  {
    label: "Facebook",
    icon: "/Icons/fb-icon.svg",
    link: "https://web.facebook.com/mightyfinsol/",
  },
];
