const getTokenLogoURL = (address: string) => [
  `/images/tokens/${address}.png`,
  `https://kryptolite.rocks/images/tokens/${address}.png`,
  `https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/${address}/logo.png`,
  `https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/${address}/logo.png`,
  `https://assets-cdn.trustwallet.com/blockchains/cronos/assets/${address}/logo.png`,
];

export default getTokenLogoURL;
