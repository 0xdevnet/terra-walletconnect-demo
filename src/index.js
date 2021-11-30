import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import {
  NetworkInfo,
  WalletProvider,
  WalletStatus,
  getChainOptions,
} from "@terra-money/wallet-provider";

import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <StrictMode>
      <WalletProvider {...chainOptions}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WalletProvider>
    </StrictMode>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
