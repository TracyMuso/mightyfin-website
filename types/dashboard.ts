export interface OBGDashboard {
  element: string;
  popover: popoverType;
}

interface popoverType {
  title: string;
  description: string;
}

export interface NotificationsType {
  username: string;
  title: string;
  message: string;
  timestamp: string;
  tabIndex?: number;
}
