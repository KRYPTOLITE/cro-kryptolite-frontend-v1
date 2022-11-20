import React from "react";
import { useAppContext } from "../../hooks/useAppContext";
import useWallet from "../../hooks/useWallet";
import cls from "classnames";
import Button from "./Button";
import truncateHash from "../../utils/truncateHash";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import { BsWalletFill } from "react-icons/bs";

interface ConnectWalletButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ConnectWalletButton = ({ className, ...props }: ConnectWalletButtonProps) => {
  const {
    krlWallet: { active, error, retry, isConnecting },
  } = useAppContext();
  const { account } = useActiveWeb3React();

  const { onPresentConnectModal } = useWallet();

  const openModal = () => {
    onPresentConnectModal();
  };

  return (
    <React.Fragment>
      {active && account && (
        <Button
          aria-label="Open connect modal"
          onClick={openModal}
          className="block w-full text-base rounded-lg bg-red-600/30 hover:bg-red-600/50 text-gray-600
            px-4 py-2 shadow-none"
        >
          <BsWalletFill className="h-6 w-6 inline-block text-red-700 hover:text-red-800 mx-2" />
          {truncateHash(account)}
        </Button>
      )}
      {!active && !error && (
        <Button
          variant="outline"
          disabled={isConnecting}
          onClick={openModal}
          className={cls(
            "inline-block text-base w-full px-4 py-2",
            {
              "cursor-not-allowed hover:text-opacity-80": isConnecting,
            },
            className,
          )}
          {...props}
        >
          {isConnecting ? "..." : "Connect wallet"}
        </Button>
      )}
      {!active && error && (
        <Button className="!text-red-600 w-full text-base px-4 py-2" onClick={retry}>
          Click to Retry
        </Button>
      )}
    </React.Fragment>
  );
};

export default ConnectWalletButton;
