import React from "react";
import cls from "classnames";

interface ComponentProps {
  left?: boolean;
  heading: string;
  body: React.ReactNode;
  image: JSX.Element;
}
export default function TwoColumnLayoutWithIcon({ left = false, heading, body, image }: ComponentProps) {
  const position = left ? "flex-row text-left md:flex-row-reverse md:text-right" : "flex-row text-left";
  return (
    <div className={cls("flex items-center p-2 gap-3 w-full", position)}>
      <div className="flex-none">{image}</div>
      <div className="w-full">
        <div className="font-bold my-2">{heading}</div>
        <div className="text-sm">{body}</div>
      </div>
    </div>
  );
}
