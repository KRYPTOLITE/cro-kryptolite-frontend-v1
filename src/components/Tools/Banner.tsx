import React from "react";
import cls from "classnames";
import { alertVariants } from "../Alerts";

interface BannerProps {
  children: React.ReactNode;
  type?: typeof alertVariants[keyof typeof alertVariants];
  className?: string;
}
export default function Banner({ type, children, className }: BannerProps) {
  const info = type === "info",
    success = type === "success",
    error = type === "error",
    warn = type === "warning";

  return (
    <div
      className={cls(
        "p-4 text-center border",
        {
          "text-teal-500 border-teal-100 bg-teal-50": info,
          "text-red-400 border-red-400": error,
          "text-primary-600 border-primary-200 bg-primary-50": success,
          "text-yellow-400 border-yellow-400": warn,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
