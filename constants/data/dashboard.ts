import type {
  LoanStepDataType,
  sidebarDataType,
  TransactionTable,
} from "@/types";
import type { NotificationsType, OBGDashboard } from "@/types/dashboard";
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
    href: "/dashboard",
  },
  {
    icon: BellIcon,
    alt: "Notifications icon",
    title: "Notifications",
    href: "/dashboard/notifications",
  },
  {
    icon: BookIcon,
    alt: "Document icon",
    title: "Your Documents",
    href: "/dashboard/kyc",
  },
  {
    icon: ChartBarIcon,
    alt: "Chart icon",
    title: "Transactions",
    href: "/dashboard/transactions",
  },
  {
    icon: Headphones,
    alt: "headphones icon",
    title: "Customer Support",
    href: "/dashboard/support",
  },
  {
    icon: SettingsIcon,
    alt: "Settings icon",
    title: "Settings",
    href: "/dashboard/settings",
  },
  {
    icon: ArrowLeftCircle,
    alt: "arrow left icon",
    title: "Log out",
    href: "/",
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

export const NotificationsData: NotificationsType[] = [
  {
    username: "James",
    title: "Loan Application Received",
    message:
      "We've received your loan application #L-2048. Our team will review it within 24 hours.",
    timestamp: "15th July 2025, 08:30",
  },
  {
    username: "James",
    title: "Loan Approved",
    message:
      "Congratulations! Your loan of ZMW 5,000 has been approved. Funds will be available in your account shortly.",
    timestamp: "16th July 2025, 11:45",
  },
  {
    username: "James",
    title: "Loan Disbursed",
    message:
      "Your approved loan of ZMW 5,000 has been sent to your bank account (****1234).",
    timestamp: "16th July 2025, 15:20",
  },
  {
    username: "James",
    title: "Payment Reminder",
    message:
      "Friendly reminder James, your payment of ZMW 1,250 is due tomorrow. Pay via mobile money or bank transfer.",
    timestamp: "30th July 2025, 09:15",
  },
  {
    username: "James",
    title: "Payment Received",
    message:
      "Thank you James! We've received your payment of ZMW 1,250. Next payment due on 30th August 2025.",
    timestamp: "30th July 2025, 14:00",
  },
  {
    username: "James",
    title: "Loan Rejected",
    message:
      "We couldn't approve your recent application. Please try again after 30 days or contact support.",
    timestamp: "5th August 2025, 10:30",
  },
  {
    username: "James",
    title: "Late Payment Notice",
    message:
      "URGENT: James, your payment of ZMW 1,250 is now 5 days overdue. Late fees may apply if not paid today.",
    timestamp: "5th August 2025, 16:45",
  },
];

export const LoanTrackingData: LoanStepDataType[] = [
  {
    title: "Application sent",
    text: "We have received your loan request",
    step: 1,
  },
  {
    title: "Request Under Review",
    text: "Kindly wait for atleast 30 minutes as we review your loan request",
    step: 2,
  },
  {
    title: "Request Processed",
    text: "Your loan has been processed. We thank you for your patience. Kindly check your notifications for your confirmation message",
    step: 3,
  },
];
