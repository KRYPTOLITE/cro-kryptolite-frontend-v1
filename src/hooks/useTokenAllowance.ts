import { useMemo } from "react";
import { useTokenContract } from "./useContract";
import { useSingleCallResult } from "../state/multicall/hooks";
import { TokenAmount } from "../config/entities/fractions/tokenAmount";
import { Token } from "../config/entities/token";

function useTokenAllowance(token?: Token, owner?: string, spender?: string): TokenAmount | undefined {
  const contract = useTokenContract(token?.address, false);

  const inputs = useMemo(() => [owner, spender], [owner, spender]);
  const allowance = useSingleCallResult(contract, "allowance", inputs).result;

  return useMemo(
    () => (token && allowance ? new TokenAmount(token, allowance.toString()) : undefined),
    [token, allowance],
  );
}

export default useTokenAllowance;
