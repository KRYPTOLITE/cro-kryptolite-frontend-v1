import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import { MdLockClock } from "react-icons/md";

type TimelineContent = { text: string; checked?: boolean };
const roadMap = [
  {
    id: 1,
    label: "Phase 1",
    content: [
      {
        text: "Kryptolite Token MainNet Contract deployed to the BSC blockchain.",
        checked: true,
      },
      {
        text: "Contract Verified",
        checked: true,
      },
      {
        text: "Ownership Renounced",
        checked: true,
      },
      { text: "Airdrop and selfdrop.", checked: true },
      {
        text: "Increasing awareness of the project via social media and initial bounty campaign.",
        checked: true,
      },
      { text: "Presale", checked: true },
    ],
  },
  {
    id: 2,
    label: "Phase 2",
    content: [
      { text: "PancakeSwap listing.", checked: true },
      {
        text: "Deployment and launch of KryptoliteSwap (Beta).",
        checked: true,
      },
      { text: "Testing and security audits of KryptoliteSwap.", checked: true },
      { text: "Expansion of use cases for Kryptolite.", checked: true },
      {
        text: "Trade on 2 popular Centralized Exchanges (Tokpie & MintMe).",
        checked: true,
      },
      {
        text: "Futher development of partnerships & recruitment of buyers and sellers on the network via incentive campaigns.",
        checked: true,
      },
      {
        text: "CMC listing.",
      },
      { text: "Coin Gecko listing." },
    ],
  },
  {
    id: 3,
    label: "Phase 3",
    content: [
      {
        text: "Continued communication efforts to increase increase awareness and build partnerships via social media.",
      },
    ],
  },
  {
    id: 4,
    label: "Phase 4",
    content: [
      {
        text: "Launch of the exchange feature on KryptoliteSwap.",
      },
      {
        text: "Further development of our DAFO (Decentralized Autonomous Financial Entity) profoundly disrupting on how financial services are processed, offered and distributed.",
      },
    ],
  },
  {
    id: 5,
    label: "Phase 5",
    content: [
      {
        text: "More exchange listings.",
      },
      {
        text: "Creation of Kryptolite Gem NFT's.",
      },
      {
        text: "Launch of Kryptolite NFT webshop.",
      },
      {
        text: "Start auctions of Kryptolite Gem NFT's in webshop.",
      },
    ],
  },
  {
    id: 6,
    label: "Future",
    content: [
      {
        text: "Set up DAO for governance.",
      },
      {
        text: "Additional exchange listings.",
      },
      {
        text: "Cross-chain integration with KuChain, Solana, Heco and ETH.",
      },
      {
        text: "Mobile application and wallet will be released at 1 million holders.",
      },
      {
        text: "Release and migration to our own blockchain technology.",
      },
    ],
  },
];

type ListsProps = { items: TimelineContent[] };
const Lists = ({ items }: ListsProps) => {
  return (
    <ul className="text-sm text-primary-900 w-full">
      {items.map((n, i) => {
        const completed = n.checked ? (
          <div className="inline-block bg-primary-300/20 rounded-full p-1.5 border border-primary-500">
            <BiCheckDouble className="text-primary-500 h-5 w-5" />
          </div>
        ) : (
          <div className="inline-block bg-gray-300/20 rounded-full p-1.5 border">
            <MdLockClock className="text-gray-500 h-5 w-5" />
          </div>
        );
        let cls = "text-base my-2 flex items-center";
        if (n.checked) cls += " text-primary-500 text-base";
        return (
          <li key={i} className={cls}>
            {completed}
            <p className="ml-2">{n.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

interface TimelineLeafProps {
  label: string;
  content: TimelineContent[];
}

const LeftLeaf = ({ label, content }: TimelineLeafProps) => {
  return (
    <div
      className="mb-8 flex flex-col items-center w-full flex-wrap lg:flex-row-reverse
      lg:justify-end gap-5"
    >
      <div className="p-2 bg-white border border-primary-300 text-primary-700 rounded">{label}</div>
      <div className="w-1/12 bg-primary-500 h-1 mb-2 lg:mb-0"></div>
      <div className="bg-white rounded-lg shadow-lg w-full lg:w-5/12 pl-6 p-4">
        <Lists items={content} />
      </div>
    </div>
  );
};

const RightLeaf = ({ label, content }: TimelineLeafProps) => {
  return (
    <div
      className="mb-8 flex flex-col items-center w-full flex-wrap lg:flex-row
      lg:justify-end gap-5"
    >
      <div className="order-1 w-1/12 bg-primary-500 h-1 mb-2 lg:mb-0"></div>
      <div className="p-2 bg-white border border-primary-300 text-primary-700 rounded">{label}</div>
      <div className="order-1 bg-white rounded-lg shadow-lg w-full lg:w-5/12 pl-6 p-4">
        <Lists items={content} />
      </div>
    </div>
  );
};

const isOdd = (n: number) => n % 2 !== 0;

export default function SimpleTimeline() {
  return (
    <div className="mx-auto w-full">
      <div className="relative overflow-hidden py-10 w-full flex flex-col items-stretch">
        {roadMap.map((item) => {
          return isOdd(item.id) ? (
            <RightLeaf key={item.id} label={item.label} content={item.content} />
          ) : (
            <LeftLeaf key={item.id} label={item.label} content={item.content} />
          );
        })}
      </div>
    </div>
  );
}
