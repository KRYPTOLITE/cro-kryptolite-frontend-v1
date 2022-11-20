import classNames from "classnames";
import React from "react";
import type { cardType } from "../../globals";
import Link from "../Link";

type Props = {
  classname?: string;
} & cardType;

const Card = ({ title, content, src, link, id }: Props) => {
  return (
    <Link
      to={link}
      className={`max-w-[500px] md:mt-0 ${
        id !== 1 ? "mt-28" : ""
      } bg-white text-center shadow-[0_4px_10px_2px_rgba(0,0,0,0.25)] p-4 basis-1/5  h-[22rem]`}
    >
      <div className="relative top-[-100px]">
        <span className={classNames("m-auto clip-image h-[250px] w-[250px] block bg-cover bg-center ", src)}></span>
        <h3>{title}</h3>
        <p className="text-base">{content}</p>
      </div>
    </Link>
  );
};

export default Card;
