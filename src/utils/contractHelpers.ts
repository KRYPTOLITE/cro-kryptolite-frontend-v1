import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import {
  getKrlAddress,
  getKrlRefereeTrackerAddress,
  getMulticallAddress,
  getRouterAddress,
} from "./addressHelpers";
import bep20Abi from "../config/abi/erc20.json";
import MultiCallAbi from "../config/abi/Multicall.json";
import krlReward from "../config/abi/krlReward.json";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { simpleRpcProvider } from "./providers";
import KrlRefTracker from "../config/abi/KrlRefTracker.json";
import IPankcakeAbi from "../config/abi/IPancakeAbi.json";

export const getContract = (
  abi: any,
  address: string,
  signer?: Signer | Provider
) => {
  const signerOrProvider = signer ? signer : simpleRpcProvider;
  return new Contract(address, abi, signerOrProvider);
};

export function getSigner(
  library: Web3Provider,
  account: string
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export const getBep20Contract = (
  address: string,
  signer?: Signer | Provider
) => {
  return getContract(bep20Abi, address, signer);
};

export const getKrlContract = (signer?: Signer | Provider) => {
  return getContract(krlReward, getKrlAddress(), signer);
};

export const getMulticallContract = (signer?: Signer | Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer);
};

export const getKrlRefereeTrackerContract = (signer?: Signer | Provider) => {
  return getContract(KrlRefTracker, getKrlRefereeTrackerAddress(), signer);
};

export const getRouterContract = () => {
  return getContract(IPankcakeAbi, getRouterAddress());
};
