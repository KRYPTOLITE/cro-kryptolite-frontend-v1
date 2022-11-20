import React from "react";
import { snakeCase } from "lodash";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import Link from "../Link";

interface FaqAccordionProps {
  expandedUuids: string[];
}

interface QuestionsAndAnswers {
  question: string;
  answer: React.ReactNode;
}

const questionsAndAnswers: QuestionsAndAnswers[] = [
  {
    question: "What is Bitcoin Pizza Day?",
    answer: (
      <div className="space-y-3 lg:space-y-6 ">
        <p>
          On May 22, 2010, Laszlo Hanyecz traded his Bitcoins to get two pizzas
          from a local pizza store. The transaction is also known as the first
          recorded usage of Bitcoin for a commercial transaction.
        </p>
        <p>
          Laszlo posted on Bitcointalk.org and asked to exchange 2 large pizzas
          for 10,000 Bitcoins. He also specified his preferences:
        </p>
        <blockquote className="text-black bg-white p-2 border-l-2 border-primary-500">
          "I like things like onions, peppers, sausage, mushrooms, tomatoes,
          pepperoni, etc.. just standard stuff no weird fish topping or anything
          like that. I also like regular cheese pizzas which may be cheaper to
          prepare or otherwise acquire."
        </blockquote>
      </div>
    ),
  },
  {
    question: "How many Bitcoins did the pizza cost?",
    answer: (
      <p>
        Hanyecz might have bought his pizza for 10,000 BTC (worth around US$41
        back in 2010). So, the cost per Bitcoin is around $0.004 at the time of
        purchase. Now, the two pizzas are currently worth over $300 million –
        making it the most expensive pizza purchase in history.
      </p>
    ),
  },
  {
    question: "Did the pizza guy keep the Bitcoin?",
    answer: (
      <div className="space-y-3 lg:space-y-6 ">
        <p>
          Unfortunately, no. Instead of saving the Bitcoin for the future,
          Sturdivant spent his earnings on a road trip with his girlfriend –
          according to Telegraph.
        </p>
        <blockquote className="text-black bg-white p-2 border-l-2 border-primary-500">
          "If I had treated it as an investment, I might have held on a bit
          longer, I would never have thought that the same number of Bitcoin
          would have a purchasing power on the order of real estate."
        </blockquote>
      </div>
    ),
  },
  {
    question: "Who is eligible to mint this NFT?",
    answer: (
      <p>
        To be eligible to claim the Bitcoin Pizza Day NFTs, you have to connect
        a wallet address that has been whitelisted by submitting{" "}
        <Link
          className="text-blue-500"
          to="https://docs.google.com/forms/d/e/1FAIpQLScbfzlpCIzgNalPILo-uljBiXDGvW0nT1N-g8-hMz_vmb17MA/viewform"
        >
          this Google form
        </Link>
      </p>
    ),
  },
  {
    question: "What to expect?",
    answer: (
      <div className="space-y-3 lg:space-y-6 ">
        <p>
          Bitcoin Pizza Day NFTs are transferable and owners can sell them on
          secondary markets.
        </p>
        <p>
          This NFT badge proves that the holder was present at the event.
          Holders of this badge will have access to future perks. Rarity is
          determined by the number of eligible attendees.
        </p>
      </div>
    ),
  },
  {
    question: "Why?",
    answer:
      "We just wanted to thank the community for their contribution and support by giving back with a little surprise.",
  },
  {
    question: "When?",
    answer: "Distribution will be open until the end of Q2 2022.",
  },
  {
    question: "Where?",
    answer:
      "You can claim your NFTs on this website, provided you are an eligible attendee.",
  },
];

export default function FAQ({ expandedUuids }: FaqAccordionProps) {
  return (
    <div className="w-full my-10">
      <Accordion
        allowZeroExpanded={false}
        preExpanded={expandedUuids}
        className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-stretch gap-4"
      >
        {questionsAndAnswers.map((faq) => (
          <AccordionItem
            key={faq.question}
            uuid={snakeCase(faq.question)}
            className="mb-5 w-full md:w-[45%]"
          >
            <AccordionItemState>
              {({ expanded }) => (
                <AccordionItemHeading
                  className="font-normal text-xl transition-colors border-b
                    border-gray-700"
                >
                  <AccordionItemButton className="p-2 flex justify-between items-center">
                    {faq.question}
                    {!expanded ? (
                      <RiAddLine className="h-6 w-6 inline float-right text-gray-600" />
                    ) : (
                      <RiSubtractLine className="h-6 w-6 inline float-right text-gray-600" />
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
              )}
            </AccordionItemState>
            <AccordionItemPanel className="text-base text-gray-800 p-2">
              {faq.answer}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
