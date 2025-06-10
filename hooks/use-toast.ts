"use client";

import { toast as sonnerToast } from "sonner";
import type { ExternalToast } from "sonner";

type ToastVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "loading";

type Toast = {
  title?: string; // Only strings allowed for server components
  description?: React.ReactNode; // Only strings allowed for server components
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
} & Omit<ExternalToast, "description" | "jsx" | "icon">; // Exclude non-serializable options

function toast({
  variant = "default",
  title,
  description,
  action,
  ...props
}: Toast) {
  const options: ExternalToast = {
    description,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
    ...props,
  };

  switch (variant) {
    case "success":
      return sonnerToast.success(title, options);
    case "warning":
      return sonnerToast.warning(title, options);
    case "error":
      return sonnerToast.error(title, options);
    case "info":
      return sonnerToast.info(title, options);
    case "loading":
      return sonnerToast.loading(title, options);
    default:
      return sonnerToast(title, options);
  }
}

function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  };
}

export { useToast, toast };
