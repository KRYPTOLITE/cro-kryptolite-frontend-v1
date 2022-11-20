import React from "react";
import cls from "classnames";

export default function highlighText(text: string, className?: string) {
  return (
    <span
      className={cls(className ? className : "text-primary-700 font-semibold")}
    >
      {text}
    </span>
  );
}
