import React from "react";
import Button from "../Buttons/Button";

interface MonthBoxProps {
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const MonthBox = ({ onClick, value }: MonthBoxProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick && onClick(e);
  };

  return (
    <Button variant="outline" className="px-4 py-1 text-base w-28" onClick={handleClick}>
      {value || "N/A"}
    </Button>
  );
};

export default MonthBox;
