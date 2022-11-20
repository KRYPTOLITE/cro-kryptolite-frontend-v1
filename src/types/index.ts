import { ethers } from "ethers";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  active?: boolean;
  children?: React.ReactNode;
}
export interface LocationState {
  source?: string;
}
export type CallSignerType = ethers.Signer | ethers.providers.Provider;
