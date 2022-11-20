import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";
import { RefreshContextProvider } from "../contexts/RefreshContext";
import { ToastsProvider, ToastListener } from "../contexts/ToastContext";
import { fetchStatusMiddleware } from "../hooks/useSWRContract";
import store, { persistor } from "../state";
import { getLibrary } from "../utils/web3React";
import ModalProvider from "./Modal/ModalContext";
import { Updaters } from "./Updaters";
import AppWalletProvider from "../contexts/AppContext";
import { usePollBlockNumber } from "../state/block/hooks";

function GlobalHooks() {
  usePollBlockNumber();
  return null;
}

/**
 * This component is used to share state accross all sections of the site without unmounting on page
 * navigation.
 */
export default function GlobalAppWrapper(props: {
  children: React.ReactNode;
  path: string;
}) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <AppWalletProvider>
          <ToastsProvider>
            <ToastListener />
            <SWRConfig
              value={{
                use: [fetchStatusMiddleware],
              }}
            >
              <RefreshContextProvider>
                <ModalProvider>
                  <GlobalHooks />
                  <PersistGate loading={null} persistor={persistor}>
                    <Updaters />
                    {props.children}
                  </PersistGate>
                </ModalProvider>
              </RefreshContextProvider>
            </SWRConfig>
          </ToastsProvider>
        </AppWalletProvider>
      </Provider>
    </Web3ReactProvider>
  );
}
