import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Section from "../Layouts/Section";
import Link from "../Link";

export default function OurPartnersSection() {
  return (
    <Section className="flex flex-col font-light space-y-5" padding={true}>
      <div>Our Partners</div>
      <div className="flex flex-wrap gap-5 justify-around items-center">
        <Link
          to="https://www.mintme.com/token/KRYPTOLITE"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="MintMe"
            title="MintMe"
            src="../../images/partners/1.jpg"
            placeholder="blurred"
            layout="fullWidth"
          />
        </Link>
        <Link
          to="https://farmageddon.farm/#/"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="Farmargeddon"
            title="Farmargeddon"
            src="../../images/partners/2.png"
            placeholder="blurred"
            layout="fullWidth"
          />
        </Link>
        <Link
          to="https://pancakeswap.finance/swap?outputCurrency=0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="PancakeSwap"
            title="PancakeSwap"
            src="../../images/partners/3.png"
          />
        </Link>
        <Link
          to="https://bsc.mdex.me/#/swap?lang=en?outputCurrency=0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="Mdex"
            title="Mdex"
            src="../../images/partners/4.png"
          />
        </Link>
        <Link
          to="https://trade.bscswap.com/#/swap?outputCurrency=0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="BSC Swap"
            title="BSC Swap"
            src="../../images/partners/5.png"
          />
        </Link>
        <Link
          to="https://bsc.anyswap.exchange/swap?outputCurrency=0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[200px] inline-block bg-black p-2"
        >
          <StaticImage
            alt="Any Swap"
            title="Any Swap"
            src="../../images/partners/6.svg"
          />
        </Link>
        <Link
          to="https://bscstation.finance/#/swap?outputCurrency=0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="BSC Station"
            title="BSC Station"
            src="../../images/partners/7.png"
          />
        </Link>
        <Link
          to="https://dex.guru/token/0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E-bsc"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="Dex Guru"
            title="Dex Guru"
            src="../../images/partners/8.jpg"
          />
        </Link>
        <Link
          to="https://paraswap.io/#/?network=bsc?outputCurrency=0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block bg-black p-2"
        >
          <StaticImage
            alt="Para swap"
            title="Para swap"
            src="../../images/partners/9.svg"
          />
        </Link>
        <Link
          to="https://poocoin.app/tokens/0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="Poocoin"
            title="Poocoin"
            src="../../images/partners/10.png"
          />
        </Link>
        <Link
          to="ArkenFinance"
          className="max-w-[100px] inline-block bg-black p-2"
        >
          <StaticImage
            alt="ArkenFinance"
            title="ArkenFinance"
            src="../../images/partners/11.png"
          />
        </Link>
        <Link
          to="https://explorer.bitquery.io/bsc/token/0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="BitQuery"
            title="BitQuery"
            src="../../images/partners/12.png"
          />
        </Link>
        <Link
          to="https://charts.bogged.finance/?c=bsc&t=0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="Bogged finance"
            title="Bogged finance"
            src="../../images/partners/13.webp"
          />
        </Link>
        <Link
          to="https://dexscreener.com/bsc/0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="DexScreener"
            title="DexScreener"
            src="../../images/partners/14.jpg"
          />
        </Link>
        <Link
          to="https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="Binance Chain Wallet"
            title="Binance Chain Wallet"
            src="../../images/partners/15.jpg"
          />
        </Link>
        <Link
          to="https://metamask.io/download/"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="Metamask"
            title="Metamask"
            src="../../images/partners/16.svg"
          />
        </Link>
        <Link
          to="https://trustwallet.com/"
          className="max-w-[100px] inline-block"
        >
          <StaticImage
            alt="Trust wallet"
            title="Trust wallet"
            src="../../images/partners/17.jpg"
          />
        </Link>
        <Link
          to="https://mathwallet.org/en-us/"
          className="max-w-[100px] inline-block bg-black p-2"
        >
          <StaticImage
            alt="Math wallet"
            title="Math wallet"
            src="../../images/partners/18.svg"
          />
        </Link>
        <Link
          to="https://coinpaprika.com/coin/krl-kryptolite/"
          className="max-w-[100px] inline-block bg-black p-2"
        >
          <StaticImage
            alt="Coinpaprika "
            title="Coinpaprika "
            src="../../images/partners/19.svg"
          />
        </Link>
        <Link
          to="https://tokpie.io/blog/kryptolite/"
          className="max-w-[100px] inline-block bg-black p-2"
        >
          <StaticImage
            alt="tokpie"
            title="tokpie"
            src="../../images/partners/20.svg"
          />
        </Link>
        <Link
          to="https://www.team.finance/view-coin/0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E?name=KRYPTOLITE&symbol=$KRL"
          className="max-w-[100px] inline-block bg-black p-2"
        >
          <StaticImage
            alt="Teamfinance"
            title="Teamfinance"
            src="../../images/partners/21.png"
          />
        </Link>
      </div>
    </Section>
  );
}
