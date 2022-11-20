import JSBI from "jsbi";
import { MIN_CRO } from "../config/constants";
import { CRO } from "../config/entities/currency";
import { CurrencyAmount } from "../config/entities/fractions/currencyAmount";

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(
  currencyAmount?: CurrencyAmount
): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined;
  if (currencyAmount.currency === CRO) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_CRO)) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_CRO));
    }
    return CurrencyAmount.ether(JSBI.BigInt(0));
  }
  return currencyAmount;
}
