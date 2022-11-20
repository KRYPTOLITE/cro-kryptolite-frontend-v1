import React from "react";
import { BsQuestionSquare } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import Section from "../Layouts/Section";
import Link from "../Link";
import highlighText from "../Tools/highlightText";

export default function ReachUsSection() {
  return (
    <Section
      padding={true}
      className="text-center"
      containerClass="bg-primary-50"
    >
      <h2>{highlighText("Reach us")} from here</h2>
      <p>
        If you have any question, feel free to drop us a message, we will get
        back to you as soon as we can
      </p>
      <div
        className="flex flex-col md:flex-row justify-center items-stretch max-w-xs md:max-w-2xl mx-auto
        gap-5 my-10 flex-wrap"
      >
        <Link
          to="mailto:admin@kryptolite.rocks"
          className="bg-white border-2 border-transparent hover:border-primary-500 p-10 w-full
        flex flex-col items-center max-w-xs shadow-md rounded-xl group cursor-pointer hover:underline
        hover:text-primary-500 transition-colors duration-150 hover:bg-primary-50 text-primary-800
        text-base md:text-lg"
        >
          <RiMailSendLine className="h-10 w-10" />
          <p>admin@kryptolite.rocks</p>
        </Link>
        <Link
          to="mailto:info@kryptolite.rocks"
          className="bg-white border-2 border-transparent hover:border-primary-500 p-10 w-full
        flex flex-col items-center max-w-xs shadow-md rounded-xl group cursor-pointer hover:underline
        hover:text-primary-500 transition-colors duration-150 hover:bg-primary-50 text-primary-800
        text-base md:text-lg"
        >
          <BsQuestionSquare className="h-10 w-10" />
          <p>info@kryptolite.rocks</p>
        </Link>
        <Link
          to="mailto:kryptoliteswap@gmail.com"
          className="bg-white border-2 border-transparent hover:border-primary-500 p-10 w-full
        flex flex-col items-center max-w-xs shadow-md rounded-xl group cursor-pointer hover:underline
        hover:text-primary-500 transition-colors duration-150 hover:bg-primary-50 text-primary-800
        text-base md:text-lg"
        >
          <SiGmail className="h-10 w-10" />
          <p>kryptoliteswap@gmail.com</p>
        </Link>
      </div>
    </Section>
  );
}
