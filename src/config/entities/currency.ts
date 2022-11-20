import JSBI from "jsbi";
import { SolidityType } from "../constants/types";
import validateSolidityTypeInstance from "../../utils/validateSolidityTypeInstance";

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number;
  public readonly symbol?: string;
  public readonly name?: string;

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly CRO: Currency = new Currency(18, "CRO", "Cronos");

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.CRO`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8);

    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
}

const CRO = Currency.CRO;
export { CRO };
