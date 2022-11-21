import React from "react";
import { BiCaretDown, BiInfoCircle } from "react-icons/bi";
import Link from "../../../components/Link";
import RefreshIcon from "../../../components/Svg/Icons/Refresh";

interface Props {
  title: string;
  subtitle: string;
  noConfig?: boolean;
  isChartDisplayed?: boolean;
  hasAmount: boolean;
  onRefreshPrice: () => void;
  onPresentTokenInfoModal: () => void;
}

const CurrencyInputHeader: React.FC<Props> = ({
  title,
  subtitle,
  hasAmount,
  onRefreshPrice,
  onPresentTokenInfoModal,
}) => {
  const supportedProjectNetworks = [
    {
      id: "idjief",
      name: "Binance Smart Chain (Beb20)",
      projectLink: "https://kryptolite.rocks/swap",
    },
    {
      id: "idjief",
      name: "Ethereum Network",
      projectLink: "https://eth.kryptolite.rocks/swap",
    },
  ];
  return (
    <div className="flex flex-col items-center py-6 mb-3 w-full border-b">
      <div className="flex w-full items-center justify-between mb-2">
        <div className="flex flex-col items-start mr-4">
          <h2 className="text-2xl my-0">{title}</h2>
        </div>
        <div
          className="p-1 font-normal bg-transparent rounded-lg cursor-pointer text-primary-600 hover:text-primary-800
            focus:text-primary-800 hover:bg-primary-100 focus:bg-primary-100 flex justify-between items-center gap-1
              group relative mx-3 w-full border-2 border-primary-600"
        >
          <p className="text-xs w-full">CRO: Switch Network</p>
          <BiCaretDown />
          <div
            className="invisible group-hover:visible top-full shadow-lg absolute bg-white flex flex-col w-full left-0
              md:w-52 text-left border rounded-sm z-10"
          >
            {supportedProjectNetworks.map((project) => (
              <Link
                to={project.projectLink}
                className="p-2 block font-normal text-primary-600 hover:text-primary-800 focus:text-primary-800
                  bg-white focus:outline-none text-sm"
                target="_self"
              >
                {project.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="cursor-pointer" onClick={onPresentTokenInfoModal}>
            <BiInfoCircle color="#49AE01" size={27} />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => onRefreshPrice()}
            disabled={!hasAmount}
          >
            <RefreshIcon color="textSubtle" width="27px" />
          </button>
        </div>
      </div>
      <div className="flex items-center text-sm">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CurrencyInputHeader;
