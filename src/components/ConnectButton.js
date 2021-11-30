import { ConnectType, useWallet } from "@terra-money/wallet-provider";
import { useAddress } from "../hooks/useConnectedAddress";

const ConnectButton = () => {
  const { status, network, wallets, connect, disconnect } = useWallet();
  const address = useAddress();

  return address ? (
    <>
      <code>{address}</code>
      <button onClick={() => disconnect()}>Disconnect</button>
    </>
  ) : (
    <>
      <button onClick={() => connect(ConnectType.EXTENSION)}>
        Connect Extension
      </button>
      <button onClick={() => connect(ConnectType.WALLETCONNECT)}>
        Connect Mobile
      </button>
    </>
  );
};

export default ConnectButton;
