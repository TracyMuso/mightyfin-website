import type { sidebarDataType, TransactionTable } from "@/types";
import type { OBGDashboard } from "@/types/dashboard";
import {
  BellIcon,
  BookIcon,
  ChartBarIcon,
  Headphones,
  SettingsIcon,
  ArrowLeftCircle,
  BoxesIcon,
} from "lucide-react";

export const LeftSidebarData: sidebarDataType[] = [
  {
    icon: BoxesIcon,
    alt: "Dashboard icon",
    title: "Dashboard",
    onClick: () => {},
  },
  {
    icon: BellIcon,
    alt: "Notifications icon",
    title: "Notifications",
    onClick: () => {},
  },
  {
    icon: BookIcon,
    alt: "Document icon",
    title: "Your Documents",
    onClick: () => {},
  },
  {
    icon: ChartBarIcon,
    alt: "Chart icon",
    title: "Transactions",
    onClick: () => {},
  },
  {
    icon: Headphones,
    alt: "headphones icon",
    title: "Customer Support",
    onClick: () => {},
  },
  {
    icon: SettingsIcon,
    alt: "Settings icon",
    title: "Settings",
    onClick: () => {},
  },
  {
    icon: ArrowLeftCircle,
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

export const OnboardingGuideSteps: OBGDashboard[] = [
  {
    element: "#apply-for-loan",
    popover: {
      title: "1. START HERE",
      description: "Select this button to  apply for a loan",
    },
  },
  {
    element: "#track-loan",
    popover: {
      title: "2. CHECK PROGRESS",
      description:
        "Check how much time you have to wait before your loan is approved here",
    },
  },
  {
    element: "#Notifications",
    popover: {
      title: "3. CONFIRMATION MESSAGE",
      description:
        "You will receive a confirmation message immediately your loan is approved.",
    },
  },
  {
    element: "#current-loan",
    popover: {
      title: "4. LOAN AMOUNT",
      description:
        "The amount you requested, and is now approved, will be shown here.",
    },
  },
  {
    element: "#loan-deduction",
    popover: {
      title: "5. PAYMENT DATE AND AMOUNT",
      description:
        "The amount you have to pay the following month and the date will show here. Make sure to COME HERE FREQUENTLY.",
    },
  },
  {
    element: "#repay-loan",
    popover: {
      title: "6. PAY HERE",
      description:
        "When you are ready to repay, come here. You can also pay ALL AT ONCE.",
    },
  },
  {
    element: "#payment-progress",
    popover: {
      title: "7. REPAYMENT PROGRESS",
      description: "Check how much you have left to pay here.",
    },
  },
  {
    element: "#withdraw-amount",
    popover: {
      title: "8. WITHDRAW AMOUNT",
      description:
        "Deposit the amount requested directly to your bank or mobile money",
    },
  },
];
