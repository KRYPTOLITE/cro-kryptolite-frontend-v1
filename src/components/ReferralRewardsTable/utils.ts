import { Contract, ethers } from "ethers";

export const getReferralRewardsContract = (contractAddress: string, url: string) => {
  const contractABI = [
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: "address", name: "from", type: "address" },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        { indexed: false, internalType: "address", name: "tokenOut", type: "address" },
        { indexed: false, internalType: "address", name: "tokenReward", type: "address" },
        { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "ReferralRewardPaid",
      type: "event",
    },
  ];

  const provider = new ethers.providers.JsonRpcProvider(url);

  const contract = new Contract(contractAddress, contractABI, provider);
  return contract;
};

export function getExplorerScanLink(
  data: string | number,
  type: "transaction" | "token" | "address" | "block" | "countdown",
  scanUrl: string,
): string {
  switch (type) {
    case "transaction": {
      return `${scanUrl}/tx/${data}`;
    }
    case "token": {
      return `${scanUrl}/token/${data}`;
    }
    case "block": {
      return `${scanUrl}/block/${data}`;
    }
    case "countdown": {
      return `${scanUrl}/block/countdown/${data}`;
    }
    default: {
      return `${scanUrl}/address/${data}`;
    }
  }
}
