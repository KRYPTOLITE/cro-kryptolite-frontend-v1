import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Section from "../components/Layouts/Section";
import SEO from "../components/SEO";
import { RiExchangeDollarLine, RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsShieldFillCheck } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import Link from "../components/Link";
import ReactPlayer from "react-player/youtube";
import highlighText from "../components/Tools/highlightText";
import JoinCommunitySection from "../components/SharedSections/JoinCommunitySection";
import ReachUsSection from "../components/SharedSections/ReachUsSection";
import TwoColumnLayoutWithIcon from "../components/SharedSections/TwoColumnLayoutWithIcon";
import { SiBinance } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SimpleTimeline from "../components/widgets/SimpleTimeline";
import OurPartnersSection from "../components/SharedSections/OurPartnersSection";
import { MdSwapHorizontalCircle } from "react-icons/md";
import Layout from "../components/Layouts";
import { HeadFC } from "gatsby";
import previewOgImags from "../../static/images/kryptolite-swap-og-image.jpg";
import previewTwitterImags from "../../static/images/kryptolite-swap-twitter-preview-image.jpg";

export default function IndexPage() {
  return (
    <Layout>
      <Section padding className="flex flex-col gap-10 items-stretch">
        <div
          className="mx-auto flex flex-col-reverse w-full
          md:flex-row md:justify-between md:item-center gap-3 text-left"
        >
          <div className="w-full pt-10 space-y-6">
            <h1 className="uppercase font-normal text-primary-700">
              {highlighText("Advanced")} DeFi protocol
            </h1>
            <p className="md:text-xl max-w-2xl">
              KRYPTOLITE is the first hybrid protocol that leverages
              Proof-of-Personhood, Proof-of-Stake and human work to create a
              platform that is fast, inclusive and resilient to attacks.
            </p>
            <div className="my-5 flex flex-row items-center gap-5">
              <Link
                to="/swap"
                as="button"
                className="inline-flex space-x-2 rounded-none"
              >
                <MdSwapHorizontalCircle />
                <span>Swap</span>
              </Link>
              <Link
                to="https://kryptolite.rocks/stake"
                as="button"
                className="inline-flex space-x-2 rounded-none"
                variant="outline"
              >
                <BsShieldFillCheck />
                <span>Stake $KRL</span>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 mx-auto max-w-sm w-full px-10 mt-5 hidden md:block">
            <StaticImage
              src="../images/hero-image.png"
              alt="KRYPTOLITE Logo"
              layout="fullWidth"
              placeholder="blurred"
              quality={100}
            />
          </div>
        </div>
        <div className="bg-white w-full p-0 md:p-5 shadow-xl shadow-gray-200 rounded-md mt-16">
          <div className="w-full pt-[56.25%] relative bg-black">
            <ReactPlayer
              url="https://youtu.be/Firr6Q8qccY"
              width="100%"
              height="100%"
              pip={false}
              preload="auto"
              className="absolute top-0 left-0"
              controls={true}
            />
          </div>
        </div>
      </Section>
      <Section
        className="flex flex-col items-center !max-w-screen-lg"
        padding={true}
      >
        <p className="text-xl md:text-3xl md:text-center text-primary-900 font-medium">
          The Kryptolite Universe is designed to allow our community tap into
          and utilize the full potential of Decentralized Finance without the
          demands of active portfolio management.
        </p>
      </Section>
      <Section
        containerClass="bg-primary-50"
        className="flex flex-col items-start md:flex-row"
        padding
      >
        <div className="max-w-sm w-full mx-auto mb-10 md:mb-0">
          <div className="mx-auto max-w-sm w-full px-10 mt-5 md:mt-0">
            <StaticImage
              src="../images/what-is-more.svg"
              alt="what-is-more"
              layout="fullWidth"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="w-full space-y-5">
          <h2 className="md:text-center">What is {highlighText("More")}</h2>
          <p>
            The KRL token is a unique utility token for the Kryptolite Universe
            (a.k.a KRYPTOVERSE) that is used for:
          </p>
          <ul className="list-disc list-inside space-y-3 text-left">
            <li>
              Staking to earn passive income (% APY) and trade with up to zero
              fees on KryptoliteSwap.
            </li>
            <li>Purchase of Exclusive KRYPTOLITE Gem NFT's.</li>
            <li>Discounted launchpad subscriptions.</li>
            <li>
              Used for governance votes to determine how network resources are
              allocated.
            </li>
          </ul>
          <p>
            KRYPTOLITE's intention is to be globally adopted for use as a proof
            of stake (PoS) token which allows our community to trade with up to
            ZERO fees and still receive reasonable APY from staked KRL at the
            same time
          </p>
          <p>
            The vast majority of crypto projects live only in the crypto space,
            however we will achieve "Real World Impact and Takeover" by
            organizing campaigns targeted at sensitising and educating the
            general public on the key role of Decentralized Finance (DeFi)
            protocols while also generating buzz over the usual channels and
            ways in crypto - always in collaboration with our community!
          </p>
        </div>
      </Section>
      <Section padding={true}>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center">
          <div className="space-y-5">
            <h2 className="md:text-center">
              {highlighText("Benefits")} of investing in KRL
            </h2>
            <p>
              KRYPTOLITE allows for high yield trading — yield farming — that
              enables investors to borrow and stake their cryptocurrencies at
              considerably higher rates compared to traditional banking and
              investments.
            </p>
            <p>
              Staking increases liquidity and helps to increase the market
              capitalization of KRL which means that even as you earn interests,
              the price value of your tokens continue to increase
            </p>
            <p>
              Token ownership has been renounced, meaning that our smart
              contract cannot be manipulated and no new KRYPTOLITE tokens will
              ever be created, you can check out the transaction hash on BSCscan
              HERE
            </p>
          </div>
          <div className="flex-shrink-0 mx-auto max-w-sm w-full px-10 my-5 md:my-0">
            <StaticImage
              src="../images/invest-in-krl.png"
              alt="invest-in-krl"
              layout="fullWidth"
              placeholder="blurred"
            />
          </div>
        </div>
      </Section>
      <Section containerClass="bg-primary-50" padding={true}>
        <div className="md:flex md:items-center md:justify-center">
          <div className="max-w-sm w-full mx-auto mb-10 md:mb-0">
            <div className="mx-auto max-w-sm w-full px-10 mt-5 md:mt-0">
              <StaticImage
                src="../images/icon.png"
                alt="KRYPTOLITE Logo"
                layout="fullWidth"
                placeholder="blurred"
              />
            </div>
          </div>
          <div className="w-full space-y-4">
            <h2 className="md:text-center">
              {highlighText("Hold and Stake")} $KRL
            </h2>
            <p>
              KRYPTOLITE is designed to reward the community, through unique
              mechanisms. Users are encouraged to accumulate and stake $KRL in
              order to get the most returns from our PoS algorithm.
            </p>
            <p>
              With the further development of the DeFi ecosystem across multiple
              chains and protocols, Kryptolite will remain committed to
              developing a solid economic model for the $KRL token. This
              includes being open to change and adopting new developments that
              fit our specific use cases.
            </p>
            <p>
              KRL’s tokenomics follows a “repurchase and burn” model, which
              decreases the circulating supply of the KRL token as demand
              increases over time, driving up its value. This model keeps the
              value of KRL sustainable over the long run. Our tokenomics are
              also further supported by the “stake and earn” model, which
              further incentivizes KRL holders to keep their tokens.
            </p>
          </div>
        </div>
      </Section>
      <Section padding={true} className="space-y-5 !max-w-screen-xl">
        <h2 className="md:text-center">
          Other Things {highlighText("We Offer")}
        </h2>
        <p className="md:text-center max-w-screen-lg mx-auto">
          Our own Decentralized Exchange (AMM DEX) - KRL will be the fuel of the
          automated market maker protocol.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between gap-3 w-full">
          <div className="w-full md:max-w-sm space-y-10">
            {servicesList.map((e, i) => {
              const isEven = i % 2 === 0;
              // Only even numbers
              return (
                isEven && (
                  <TwoColumnLayoutWithIcon
                    key={e.name}
                    heading={e.name}
                    body={e.description}
                    image={e.image}
                    left={isEven}
                  />
                )
              );
            })}
          </div>
          <div className="p-10 w-full hidden md:block">
            <StaticImage
              src="../images/phone-setting.svg"
              alt=""
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            />
          </div>
          <div className="w-full md:max-w-sm space-y-10">
            {servicesList.map((e, i) => {
              const isEven = i % 2 === 0;
              // Only odd numbers
              return (
                !isEven && (
                  <TwoColumnLayoutWithIcon
                    key={e.name}
                    heading={e.name}
                    body={e.description}
                    image={e.image}
                    left={isEven}
                  />
                )
              );
            })}
          </div>
        </div>
      </Section>
      <Section padding={true} containerClass="bg-primary-50" id="road-map">
        <h2 className="md:text-center">Our {highlighText("Roadmap")}</h2>
        <SimpleTimeline />
      </Section>
      <JoinCommunitySection />
      <ReachUsSection />
      <OurPartnersSection />
    </Layout>
  );
}

const servicesList: {
  name: string;
  description: React.ReactNode;
  image: JSX.Element;
}[] = [
  {
    name: "Passive Income",
    description: "Hodlers earn passive income just by hodling and staking!",
    image: <RiMoneyDollarCircleFill className="text-primary-800 h-12 w-12" />,
  },
  {
    name: "BEP-20 Coin on BSC",
    description: `We are tapping into the oil well of DeFi (with mighty PoS and yield farming rewards)
        for our community`,
    image: <SiBinance className="text-primary-800 h-12 w-12" />,
  },
  {
    name: "Community-first",
    description: (
      <ul className="space-y-3">
        <li>Community-first</li>
        <li>NFT'S powered</li>
        <li>Fair launch with presale and reasonable token pricing</li>
        <li>LP locked in PancakeSwap until 2030</li>
        <li>
          Team tokens locked for 36 months after launch by TrustSwap and can be
          verified{" "}
          <Link
            className="text-primary-700 font-bold underline"
            to="https://team.finance/view-coin/0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E?name=KRYPTOLITE&symbol=$KRL"
          >
            HERE
          </Link>
        </li>
      </ul>
    ),
    image: <HiUserGroup className="text-primary-800 h-12 w-12" />,
  },
  {
    name: "Exclusive NFT webshop",
    description:
      "Exclusive NFT webshop with KRYPTOLITE gem NFT’s which can only be purchased with $KRL",
    image: <AiOutlineShoppingCart className="text-primary-800 h-12 w-12" />,
  },
  {
    name: "TOKENOMICS",
    description: (
      <ul className="space-y-3">
        <li>
          Burn: <span className="text-primary-700 font-bold">40%</span>
        </li>
        <li>
          Liquidity/Listings:{" "}
          <span className="text-primary-700 font-bold">25%</span>
        </li>
        <li>
          Marketing & Strategic Partnerships:{" "}
          <span className="text-primary-700 font-bold">10%</span>
        </li>
        <li>
          Team: <span className="text-primary-700 font-bold">6.225%</span>
        </li>
        <li>
          Presale: <span className="text-primary-700 font-bold">5.775%</span>
        </li>
        <li>
          Yield Farming Incentives:{" "}
          <span className="text-primary-700 font-bold">5%</span>
        </li>
        <li>
          Bounties: <span className="text-primary-700 font-bold">5%</span>
        </li>
        <li>
          Airdrop: <span className="text-primary-700 font-bold">2.5%</span>
        </li>
        <li>
          Early Investors Bonus:{" "}
          <span className="text-primary-700 font-bold">0.5%</span>
        </li>
      </ul>
    ),
    image: <FaInfoCircle className="text-primary-800 h-12 w-12" />,
  },
  {
    name: "Liquidity Aggregation",
    description: `Users can exchange assets at the lowest rate and via the most efficient trading
      route — this is achieved by connecting their own decentralized wallets. In any environment,
      anyone can access our DEX(KryptoliteSwap) platform without permission and KYC review.`,
    image: <RiExchangeDollarLine className="text-primary-800 h-12 w-12" />,
  },
];

export const Head: HeadFC = () => (
  <SEO
    title="Kryptolite Ethereum Swap"
    description="The next 100X DeFi gem you don't want to miss"
    image={{ og: previewOgImags, twitter: previewTwitterImags }}
  />
);
