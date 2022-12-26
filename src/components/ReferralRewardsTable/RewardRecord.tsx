import { format } from "date-fns";
import { BigNumber, Contract, ethers } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { TokenAmount } from "../../config/entities/fractions/tokenAmount";
import { parseStringOrBytes32, useAllTokens } from "../../hooks/Tokens";
import Link from "../Link";
import CurrencyLogo from "../Logo/CurrencyLogo";
import Big from "bignumber.js";
import truncateHash from "../../utils/truncateHash";
import { getExplorerScanLink } from "./utils";
import { Token } from "../../config/entities/token";
import { isAddress } from "../../utils";
import ERC20_ABI from "../../config/abi/erc20.json";
import { CRO, Currency } from "../../config/entities/currency";

export type RewardRecordType = {
  amount: BigNumber;
  tokenReward: string;
  transactionHash: string;
  timeStamp: string;
  blockNumber: string;
  networkExplorerUrl: string;
  chainId: number;
  rpcUrl: string;
};

function RewardRecord({
  tokenReward,
  amount,
  timeStamp,
  transactionHash,
  networkExplorerUrl,
  chainId,
  rpcUrl,
}: RewardRecordType) {
  const [currency, setCurrency] = useState<
    Currency | Token | null | undefined
  >();

  const tokenContract = useTokenContract(rpcUrl, tokenReward || undefined);
  const tokens = useAllTokens();

  useEffect(() => {
    async function fetchTokenInfo() {
      const isNative =
        tokenReward?.toLowerCase() ===
        "0x0000000000000000000000000000000000000000";

      let tokenv2 = null;

      if (isNative) {
        switch (chainId) {
          case 1:
            tokenv2 = ETH;
            break;
          case 25:
            tokenv2 = CRO;
            break;
          case 56:
            tokenv2 = BNB;
            break;
          default:
            tokenv2 = CRO;
            break;
        }
      } else {
        const address = isAddress(tokenReward);
        const token: Token | undefined = address ? tokens[address] : undefined;

        const tokenName = await tokenContract?.name();
        const symbol = await tokenContract?.symbol();
        const decimals = await tokenContract?.decimals();

        if (token) {
          tokenv2 = token;
        } else if (!chainId || !address) {
          tokenv2 = undefined;
        } else if (decimals || symbol || tokenName) {
          tokenv2 = new Token(
            chainId,
            tokenReward,
            decimals,
            parseStringOrBytes32(symbol, symbol, "UNKNOWN"),
            parseStringOrBytes32(tokenName, symbol, "Unknown Token")
          );
        }
      }

      setCurrency(tokenv2);
    }
    fetchTokenInfo();
  }, [tokenReward, chainId, rpcUrl, tokenContract]);

  const amt = useMemo(
    () => (currency ? new TokenAmount(currency, amount).toSignificant() : "-"),
    [currency]
  );

  const unixTime = new Big(timeStamp).times(1000).toNumber();
  const bscScanLink = getExplorerScanLink(
    transactionHash,
    "transaction",
    networkExplorerUrl
  );

  if (!currency) {
    return (
      <div className="flex gap-5 items-center p-2 text-xs overflow-auto w-full animate-pulse bg-gray-200 border-y border-gray-300">
        Fetching reward info...
      </div>
    );
  } else
    return (
      <div className="flex gap-5 items-center py-1 overflow-auto w-full">
        <p className="font-light text-slate-700 text-sm">
          {format(unixTime, "dd")}
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-primary-700 text-lg">+{amt}</p>
          <div className="flex items-center">
            <CurrencyLogo
              currency={currency || undefined}
              size="20px"
              style={{ marginRight: "5px" }}
            />
            <p id="pair" className="font-medium text-sm text-[#4B4949]">
              {(currency && currency.symbol && currency.symbol.length > 20
                ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                    currency.symbol.length - 5,
                    currency.symbol.length
                  )}`
                : currency?.symbol) || "Select a currency"}
            </p>
          </div>
        </div>
        <Link
          to={bscScanLink}
          className="text-[#5C6079] underline text-sm flex items-center"
        >
          {truncateHash(transactionHash, 6, 6)}&nbsp;
          <RiExternalLinkLine size={15} className="mb-2" />
        </Link>
      </div>
    );
}

export default RewardRecord;

function useTokenContract(rpcUrl: string, tokenAddress?: string) {
  return useContract(tokenAddress, ERC20_ABI, rpcUrl);
}

// returns null on errors
function useContract<T extends Contract = Contract>(
  address: string | undefined,
  ABI: any,
  rpcUrl: string
): T | null {
  const canReturnContract = useMemo(() => address && ABI, [address, ABI]);

  return useMemo(() => {
    if (!canReturnContract) return null;
    try {
      return getContract(ABI, address!, rpcUrl);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, canReturnContract]) as T;
}

const getContract = (abi: any, address: string, rpcUrl: string) => {
  const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(rpcUrl);

  return new Contract(address, abi, simpleRpcProvider);
};

const BNB = new Token(
  // @ts-ignore
  56,
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  18,
  "BNB",
  "BNB",
  "https://www.binance.com/"
);
const ETH = new Token(
  // @ts-ignore
  1,
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  18,
  "ETH",
  "Ethereum Token",
  "https://ethereum.org/en/"
);
