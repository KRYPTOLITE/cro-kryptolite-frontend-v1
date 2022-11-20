import { useMemo } from "react";
import useActiveWeb3React from "./useActiveWeb3React";
import { useTransactionAdder } from "../state/transactions/hooks";
import { useCurrencyBalance } from "../state/wallet/hooks";
import { useWCROContract } from "./useContract";
import { useCallWithGasPrice } from "./useCallWithGasPrice";
import { Currency, CRO } from "../config/entities/currency";
import { currencyEquals, WCRO } from "../config/entities/token";
import tryParseAmount from "../utils/tryParseAmount";

export enum WrapType {
  NOT_APPLICABLE,
  WRAP,
  UNWRAP,
}

const NOT_APPLICABLE = { wrapType: WrapType.NOT_APPLICABLE };
/**
 * Given the selected input and output currency, return a wrap callback
 * @param inputCurrency the selected input currency
 * @param outputCurrency the selected output currency
 * @param typedValue the user input value
 */
export default function useWrapCallback(
  inputCurrency: Currency | undefined,
  outputCurrency: Currency | undefined,
  typedValue: string | undefined
): {
  wrapType: WrapType;
  execute?: undefined | (() => Promise<void>);
  inputError?: string;
} {
  const { chainId, account } = useActiveWeb3React();
  const { callWithGasPrice } = useCallWithGasPrice();
  const wcroContract = useWCROContract();
  const balance = useCurrencyBalance(account ?? undefined, inputCurrency);
  // we can always parse the amount typed as the input currency, since wrapping is 1:1
  const inputAmount = useMemo(
    () => tryParseAmount(typedValue, inputCurrency),
    [inputCurrency, typedValue]
  );
  const addTransaction = useTransactionAdder();

  return useMemo(() => {
    if (!wcroContract || !chainId || !inputCurrency || !outputCurrency)
      return NOT_APPLICABLE;

    const sufficientBalance =
      inputAmount && balance && !balance.lessThan(inputAmount);

    if (
      inputCurrency === CRO &&
      currencyEquals(WCRO[chainId], outputCurrency)
    ) {
      return {
        wrapType: WrapType.WRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  const txReceipt = await callWithGasPrice(
                    wcroContract,
                    "deposit",
                    undefined,
                    {
                      value: `0x${inputAmount.raw.toString(16)}`,
                    }
                  );
                  addTransaction(txReceipt, {
                    summary: `Wrap ${inputAmount.toSignificant(6)} CRO to WCRO`,
                    type: "wrap",
                  });
                } catch (error) {
                  console.error("Could not deposit", error);
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : "Insufficient CRO balance",
      };
    }
    if (
      currencyEquals(WCRO[chainId], inputCurrency) &&
      outputCurrency === CRO
    ) {
      return {
        wrapType: WrapType.UNWRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  const txReceipt = await callWithGasPrice(
                    wcroContract,
                    "withdraw",
                    [`0x${inputAmount.raw.toString(16)}`]
                  );
                  addTransaction(txReceipt, {
                    summary: `Unwrap ${inputAmount.toSignificant(
                      6
                    )} WCRO to CRO`,
                  });
                } catch (error) {
                  console.error("Could not withdraw", error);
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : "Insufficient WCRO balance",
      };
    }
    return NOT_APPLICABLE;
  }, [
    wcroContract,
    chainId,
    inputCurrency,
    outputCurrency,
    inputAmount,
    balance,
    addTransaction,
    callWithGasPrice,
  ]);
}
