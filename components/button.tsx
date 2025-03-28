'use client';

import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Variants and sizes
type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

// Shared props
interface SharedProps {
  text?: string;
  type?:"submit" | "reset" | "button";
  target?:string;
  icon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
}

// Props for <button>
type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

// Props for <a> tag (external or internal links)
type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  };

// Final button props union
type ButtonProps = NativeButtonProps | AnchorButtonProps;

export const Button: React.FC<ButtonProps> = ({
  text,
  children,
  href,
  target,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon,
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-purple-600 text-white font-semibold hover:bg-purple-500",
    secondary: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
    tertiary: "bg-white text-gray-900 border border-yellow-400 hover:bg-yellow-200",
    ghost: "bg-transparent text-purple-600 hover:bg-purple-100",
  };

  const content = (
    <>
      {loading ? (
        <span className="animate-spin mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full" />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      <span>{text || children}</span>
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  const isExternal = href && target === "_blank";

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} passHref legacyBehavior>
        <a
          className={combinedClasses}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={combinedClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};
