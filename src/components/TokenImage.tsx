import React from "react";
import { Token } from "../config/entities/token";
import tokens from "../config/constants/tokens";

interface TokenPairImageProps {
  primaryToken: Token;
  secondaryToken: Token;
}

const getImageUrlFromToken = (token: Token) => {
  const address = token.symbol === "CRO" ? tokens.wcro.address : token.address;
  return `/images/tokens/${address}.svg`;
};

export default function TokenPairImage({
  primaryToken,
  secondaryToken,
}: TokenPairImageProps) {
  return (
    <div className="relative inline-block h-[70px] w-[70px] mr-2">
      <div className="w-8 h-8 inline-block absolute top-1 left-1 rounded-full">
        <TokenImage
          src={getImageUrlFromToken(secondaryToken)}
          alt={secondaryToken.name || ""}
          className="w-full h-full"
        />
      </div>
      <div className="w-14 h-14 inline-block absolute bottom-1 right-1 rounded-full">
        <TokenImage
          src={getImageUrlFromToken(primaryToken)}
          alt={primaryToken.name || ""}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export const TokenImage = ({
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img alt={alt} {...props} />;
};
