import { Product } from "@/types";

export const comingSoonProducts: Product[] = [
  {
    id: "mamapay",
    title: "MamaPay: Your All-in-One Financial Companion (Coming Soon)",
    subtitle: "Make payments, join savings groups, and access loans - all in one app.",
    description: "We're building something special! MamaPay will revolutionize how you manage money.",
    benefits: [
      "Seamless payments: Send and receive money with just a few taps",
      "Community savings: Join or create savings groups with trusted circles",
      "Smart loans: Get personalized loan offers based on your transaction history",
      "Financial growth: Build creditworthiness through your daily transactions",
      "Cross-border Payments: Make secure payments across borders with low fees"
    ],
    ctaPrimary: {
      text: "Join Waitlist",
      action: "/waitlist/mamapay"
    },
    ctaSecondary: {
      text: "Learn More",
      action: "/coming-soon/mamapay"
    },
    image: {
      src: "/Images/LandingPage/woman-checking-smartphone.png", // You'll need to add this image
      alt: "MamaPay app interface preview",
      width: 500,
      height: 400
    },
    theme: {
      primaryColor: "bg-purple-500",
      secondaryColor: "hover:bg-yellow-400"
    }
  }
];

export const products: Product[] = [
  {
    id: "civil-servant-loan",
    title: "Civil Servant Loan: Empower Your Future Today",
    subtitle: "Fast, flexible, and affordable financing solutions tailored for civil servants.",
    description: "",
    benefits: [
      "Competitive rates: Enjoy interest rates designed to be budget-friendly for civil servants.",
      "Simplified process: Apply for your loan online in minutes, skip the hassle.",
      "Flexible repayment: Choose a plan that fits your monthly income and budget.",
      "Peace of mind: Focus on what matters, knowing your loan is secure."
    ],
    ctaPrimary: {
      text: "Apply now",
      action: "#"
    },
    ctaSecondary: {
      text: "Learn more",
      action: "#"
    },
    image: {
      src: "/Images/LandingPage/man-with-phone.png",
      alt: "man holding phone",
      width: 645,
      height: 380
    },
    theme: {
      primaryColor: "bg-purple-500",
      secondaryColor: "hover:bg-yellow-400"
    }
  },
  {
    id: "small-business-loan",
    title: "SmartBiz Loan: AI-Powered Funding for Your Business",
    subtitle: "Get approved based on your cashflow, not just credit history",
    description: "Our advanced AI analyzes your business transactions to provide fair, personalized loan offers tailored to your actual performance.",
    benefits: [
      "AI credit scoring evaluates your real cashflow patterns",
      "Fast approval - decisions in hours, not weeks",
      "Loan amounts that match your business capacity",
      "No physical collateral required",
      "Flexible repayment aligned with your cash cycles"
    ],
    ctaPrimary: {
      text: "Apply now",
      action: "#"
    },
    ctaSecondary: {
      text: "Learn more",
      action: "#"
    },
    image: {
      src: "/Images/LandingPage/woman-checking-her-smartphone-notifications-1.png",
      alt: "Business owner reviewing loan dashboard with AI insights",
      width: 380,
      height: 340
    },
    theme: {
      primaryColor: "bg-purple-500",
      secondaryColor: "hover:bg-yellow-400"
    }
  }
];
