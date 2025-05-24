import type { sidebarDataType, TransactionTable } from "@/types";

export const LeftSidebarData: sidebarDataType[] = [
  {
    icon: "/Icons/Category.png",
    alt: "Dashboard icon",
    title: "Dashboard",
    onClick: () => {},
  },
  {
    icon: "/Icons/Notifications.png",
    alt: "Notifications icon",
    title: "Notifications",
    onClick: () => {},
  },
  {
    icon: "/Icons/fi-rr-document.png",
    alt: "Document icon",
    title: "Your Documents",
    onClick: () => {},
  },
  {
    icon: "/Icons/Loan-History.png",
    alt: "Chart icon",
    title: "Transactions",
    onClick: () => {},
  },
  {
    icon: "/Icons/fi_headphones.png",
    alt: "headphones icon",
    title: "Customer Support",
    onClick: () => {},
  },
  {
    icon: "/Icons/Settings.png",
    alt: "Settings icon",
    title: "Settings",
    onClick: () => {},
  },
  {
    icon: "/Icons/Sign-out.png",
    alt: "arrow left icon",
    title: "Log out",
    onClick: () => {},
  },
];

export const TransactionTableData: TransactionTable[] = [
  {
    txnId: "MFT000026",
    amount: "5000",
    date: "May 18, 2024",
    status: "paid",
    receipt: "/receipt1",
  },
  {
    txnId: "MFT000027",
    amount: "3000",
    date: "June 18, 2024",
    status: "paid",
    receipt: "/receipt2",
  },
  {
    txnId: "MFT000028",
    amount: "2000",
    date: "Aug 18, 2024",
    status: "pending",
    receipt: "/receipt3",
  },
  {
    txnId: "MFT000029",
    amount: "8000",
    date: "Sep 18, 2024",
    status: "paid",
    receipt: "/receipt4",
  },
];
