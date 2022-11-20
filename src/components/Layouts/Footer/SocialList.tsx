import React from "react";
import { FaFacebook, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

type SocialIconTypes = "twitter" | "telegramGroup" | "telegramNews" | "facebook" | "discord" | "instagram";

const socials: { name: SocialIconTypes; url: string }[] = [
  { name: "discord", url: "https://discord.gg/9aY3gRPdQx" },
  { name: "twitter", url: "https://twitter.com/KryptoliteSwap" },
  { name: "facebook", url: "https://fb.me/KryptoliteCommunity" },
  { name: "instagram", url: "https://instagram.com/kryptolite_community" },
  { name: "telegramGroup", url: "https://t.me/KryptoliteCommunity" },
  { name: "telegramNews", url: "https://t.me/KryptoliteNews" },
];

export default function SocialList() {
  return (
    <div className="mt-3 flex items-start justify-center space-x-4 flex-wrap">
      {socials.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="inline-block">
          {getSocialIcon(social.name)}
        </a>
      ))}
    </div>
  );
}

const getSocialIcon = (name: SocialIconTypes) => {
  let svgIcon = <></>;
  const iconClass = "w-8 h-8 text-primary-800 hover:text-primary-500 inline-block transition-colors duration-150";
  switch (name) {
    case "twitter":
      svgIcon = <FaTwitter className={iconClass} title={name} />;
      break;
    case "telegramGroup":
      svgIcon = <BsTelegram className={iconClass} title={name} />;
      break;
    case "telegramNews":
      svgIcon = <FaTelegramPlane className={iconClass} title={name} />;
      break;
    case "facebook":
      svgIcon = <FaFacebook className={iconClass} title={name} />;
      break;
    case "instagram":
      svgIcon = <BsInstagram className={iconClass} title={name} />;
      break;
    case "discord":
      svgIcon = <SiDiscord className={iconClass} title={name} />;
      break;
    default:
      break;
  }
  return svgIcon;
};
