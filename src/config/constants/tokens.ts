import { Token } from "../entities/token";
import { serializeToken } from "../../state/user/hooks/helpers";
import { SerializedToken } from "./types";
import { ChainId } from "./networks";

const { MAINNET } = ChainId;

interface TokenList {
  [symbol: string]: Token;
}

const defineTokens = <T extends TokenList>(t: T) => t;

interface SerializedTokenList {
  [symbol: string]: SerializedToken;
}

export const mainnetTokens = defineTokens({
  busd: new Token(
    MAINNET,
    "0xC74D59A548ecf7fc1754bb7810D716E9Ac3e3AE5",
    18,
    "BUSD",
    "Binance USD",
    "https://www.paxos.com/busd/"
  ),
  weth: new Token(
    MAINNET,
    "0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",
    18,
    "WETH",
    "Wrapped Ether",
    "https://cronos.org/"
  ),
  dai: new Token(
    MAINNET,
    "0xF2001B145b43032AAF5Ee2884e456CCd805F677D",
    18,
    "DAI",
    "Dai Stablecoin",
    "https://cronos.org/"
  ),
  tusd: new Token(
    MAINNET,
    "0x87EFB3ec1576Dec8ED47e58B832bEdCd86eE186e",
    18,
    "TUSD",
    "TrueUSD",
    "https://cronos.org/"
  ),
  vvs: new Token(
    MAINNET,
    "0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",
    18,
    "VVS",
    "VVSToken",
    "https://vvs.finance/"
  ),
  usdt: new Token(
    MAINNET,
    "0x66e428c3f67a68878562e79A0234c1F83c208770",
    6,
    "USDT",
    "Tether USD",
    "https://cronos.org/"
  ),
  wcro: new Token(
    MAINNET,
    "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    18,
    "WCRO",
    "Wrapped CRO",
    "https://chain.crypto.com/"
  ),
  cro: new Token(
    MAINNET,
    "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    18,
    "CRO",
    "Cronos Token",
    "https://chain.crypto.com/"
  ),
  usdc: new Token(
    MAINNET,
    "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
    6,
    "USDC",
    "USD Coin",
    "https://cronos.org/"
  ),
  wbtc: new Token(
    MAINNET,
    "0x062E66477Faf219F25D27dCED647BF57C3107d52",
    8,
    "WBTC",
    "Wrapped BTC",
    "https://cronos.org/"
  ),
});

export const testnetTokens = defineTokens({} as const);

const tokens = () => {
  const chainId = process.env.GATSBY_CHAIN_ID!;

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      // @ts-ignore
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] };
    }, {} as typeof testnetTokens & typeof mainnetTokens);
  }

  return mainnetTokens;
};

const unserializedTokens = tokens();

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce(
    (accum, key) => {
      //@ts-ignore
      return { ...accum, [key]: serializeToken(unserializedTokens[key]) };
    },
    {} as SerializedTokenList
  );

  return serializedTokens;
};

export default unserializedTokens;
