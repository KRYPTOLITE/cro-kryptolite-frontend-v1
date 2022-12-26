import React, { useCallback, useRef } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import Picker from "react-month-picker";
import "react-month-picker/css/month-picker.css";
import Button from "../Buttons/Button";
import MonthBox from "./MonthBox";

interface ListProps {
  handleAMonthChange: (arg: any) => void;
  handleNextMonth: (index: number) => void;
  state: { year: number; month: number };
}
const List = ({ handleAMonthChange, handleNextMonth, state }: ListProps) => {
  const pickAMonth2 = useRef<{ show: () => void } | null>(null);

  const handleClickMonthBox2 = useCallback(() => {
    pickAMonth2.current?.show();
  }, [pickAMonth2]);

  const handleAMonthDissmis2 = (value: { year: number; month: number }) => {
    handleAMonthChange(value);
  };

  const pickerLang = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    from: "From",
    to: "To",
  };

  const makeText = (m: { year: number; month: number }) => {
    if (m && m.year && m.month) return pickerLang.months[m.month - 1] + ". " + m.year;
    return "?";
  };

  return (
    <div className="flex flex-row gap-3 justify-between">
      <span className="font-light text-base">Pick a month</span>
      <div className="flex flex-row gap-3">
        <Button variant="outline" className="text-sm px-3 py-1" onClick={() => handleNextMonth(-1)}>
          <MdOutlineArrowBackIosNew />
        </Button>
        <Picker
          ref={pickAMonth2}
          years={[2022]}
          value={state}
          lang={pickerLang.months}
          theme="light"
          onDismiss={handleAMonthDissmis2}
        >
          <MonthBox value={makeText(state)} onClick={handleClickMonthBox2} />
        </Picker>
        <Button variant="outline" className="text-sm px-3 py-1" onClick={() => handleNextMonth(1)}>
          <MdOutlineArrowForwardIos />
        </Button>
      </div>
    </div>
  );
};

export default List;
