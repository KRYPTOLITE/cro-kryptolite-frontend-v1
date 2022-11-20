import { Link } from "gatsby";

interface BaseNavigationType {
  id: number | string;
  title: string;
  href: string;
  options?: Omit<React.ComponentPropsWithoutRef<typeof Link>, "to">; // Not optimal
}

interface cardTypes {
  id: number;
  title: string;
  content: string;
  src: string;
  link: string;
}

export interface cardType extends cardTypes {
  children?: cardType[];
}

export interface NavigationType extends BaseNavigationType {
  children?: NavigationType[];
}
export const navigationItems: NavigationType[] = [
  {
    id: 1,
    title: "Swap",
    href: "/swap",
  },
  {
    id: 2,
    title: "Stake",
    href: "https://kryptolite.rocks/stake",
    options: { target: "_self" },
  },
  {
    id: 3,
    title: "Launch Pad",
    href: "https://kryptolite.rocks/launch-pad",
    options: { target: "_self" },
  },
  {
    id: "7672i86e83",
    title: "Featured NFTs",
    href: "#",
    children: [
      {
        id: 1,
        title: "Bitcoin Pizza NFT",
        href: "https://kryptolite.rocks/bitcoin-pizza-day-2022",
        options: { target: "_self" },
      },
      {
        id: "ry6dce",
        title: "Kryptolite Bab Club",
        href: "https://kryptolite.rocks/kryptolite-bab-club",
        options: { target: "_self" },
      },
      {
        id: "y3r3y876rfy",
        title: "Cyberchain Abuja POAP (CAP)",
        href: "https://kryptolite.rocks/embracing-the-metaverse-with-cyberchain",
        options: { target: "_self" },
      },
    ],
  },
  {
    id: 4,
    title: "About Us",
    href: "#",
    children: [
      {
        id: 2,
        title: "Contract",
        href: "https://bscscan.com/token/0xf1288cf18b1faaa35f40111c3e5d2f827e1e920e",
      },
      {
        id: 3,
        title: "White Paper",
        href: "https://www.kryptolite.rocks/doc/KRYPTOLITE-WHITEPAPER-1.1.pdf",
      },
      {
        id: 4,
        title: "Github",
        href: "https://github.com/KRYPTOLITE",
      },
    ],
  },
];

export const cardItems: cardTypes[] = [
  {
    id: 1,
    title: "Stake Crypto",
    content:
      "Pledge crypto to earn for additional rewards from the bonus staking pool!",
    src: "bg-[url('./images/stake-page-hero.png')]",
    link: "https://kryptolite.rocks/stake",
  },
  {
    id: 2,
    title: "Fastest Exchange",
    content:
      "Trade tokens in an instant. KryptoliteSwap is the fastest and cheapest Dex on BSC. Refer friends and earn tokens from every trade they do for life.",
    src: "bg-[url('./images/swap.jpg')]",
    link: "/swap",
  },
  {
    id: 3,
    title: "Launch Pad",
    content:
      "KRYPTOLITE empowers cryptocurrency projects with the ability to distribute tokens and raise liquidity.",
    src: "bg-[url('./images/launchpad-hero-illustration.svg')]",
    link: "https://kryptolite.rocks/bitcoin-pizza-day-2022",
  },
  {
    id: 4,
    title: "Partnerships",
    content:
      "Kindly submit responses in this form and we'll get back to you as soon as possible.",
    src: "bg-[url('./images/partnerships.jpg')]",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSciuk8voMHCDVAv33s7bFeU8xW58ujbUC49hUvjJMllxuQ1og/viewform?vc=0&c=0&w=1&flr=0&gxid=-8203366",
  },
];
