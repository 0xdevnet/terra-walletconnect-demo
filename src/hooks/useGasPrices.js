import { useWallet } from "@terra-money/wallet-provider";
import axios from "axios";
import { useQuery } from "react-query";

const useGasPrice = () => {
  const { network } = useWallet();
  return useQuery("gasPrices", async () => {
    const data = await axios.get("/v1/txs/gas_prices", {
      baseURL: network.lcd.replace("lcd", "fcd"),
    });
    return data;
  });
};

export const useGasPrice = (denom) => {
  const { data } = useGasPrices()
  return gasPrices ? data : undefined
}

export default useGasPrices
