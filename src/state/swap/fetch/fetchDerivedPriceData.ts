import orderBy from "lodash/orderBy";
import { Block } from "../../info/types";
import { getUnixTime, startOfHour, sub } from "date-fns";
import {
  getDerivedPrices,
  getDerivedPricesQueryConstructor,
} from "../queries/getDerivedPrices";
import { PairDataTimeWindowEnum } from "../types";
import { ONE_DAY_UNIX, ONE_HOUR_SECONDS } from "../../../config/constants/info";

const getTokenDerivedBnbPrices = async (
  tokenAddress: string,
  blocks: Block[]
) => {
  const prices: any | undefined = await multiQuery(
    getDerivedPricesQueryConstructor,
    getDerivedPrices(tokenAddress, blocks),
    INFO_CLIENT,
    200
  );

  if (!prices) {
    console.error("Price data failed to load");
    return null;
  }

  // format token CRO price results
  const tokenPrices: {
    tokenAddress: string;
    timestamp: string;
    derivedCRO: number;
  }[] = [];

  // Get Token prices in CRO
  Object.keys(prices).forEach((priceKey) => {
    const timestamp = priceKey.split("t")[1];
    if (timestamp) {
      tokenPrices.push({
        tokenAddress,
        timestamp,
        derivedCRO: prices[priceKey]?.derivedCRO
          ? parseFloat(prices[priceKey].derivedCRO)
          : 0,
      });
    }
  });

  return orderBy(tokenPrices, (tokenPrice) =>
    parseInt(tokenPrice.timestamp, 10)
  );
};

const getInterval = (timeWindow: PairDataTimeWindowEnum) => {
  switch (timeWindow) {
    case PairDataTimeWindowEnum.DAY:
      return ONE_HOUR_SECONDS;
    case PairDataTimeWindowEnum.WEEK:
      return ONE_HOUR_SECONDS * 4;
    case PairDataTimeWindowEnum.MONTH:
      return ONE_DAY_UNIX;
    case PairDataTimeWindowEnum.YEAR:
      return ONE_DAY_UNIX * 15;
    default:
      return ONE_HOUR_SECONDS * 4;
  }
};

const getSkipDaysToStart = (timeWindow: PairDataTimeWindowEnum) => {
  switch (timeWindow) {
    case PairDataTimeWindowEnum.DAY:
      return 1;
    case PairDataTimeWindowEnum.WEEK:
      return 7;
    case PairDataTimeWindowEnum.MONTH:
      return 30;
    case PairDataTimeWindowEnum.YEAR:
      return 365;
    default:
      return 7;
  }
};

// Fetches derivedBnb values for tokens to calculate derived price
// Used when no direct pool is available
const fetchDerivedPriceData = async (
  token0Address: string,
  token1Address: string,
  timeWindow: PairDataTimeWindowEnum
) => {
  const interval = getInterval(timeWindow);
  const endTimestamp = getUnixTime(new Date());
  const startTimestamp = getUnixTime(
    startOfHour(
      sub(endTimestamp * 1000, { days: getSkipDaysToStart(timeWindow) })
    )
  );
  const timestamps = [];
  let time = startTimestamp;
  while (time <= endTimestamp) {
    timestamps.push(time);
    time += interval;
  }

  try {
    const blocks = await getBlocksFromTimestamps(timestamps, "asc", 500);
    if (!blocks || blocks.length === 0) {
      console.error("Error fetching blocks for timestamps", timestamps);
      return null;
    }

    const [token0DerivedBnb, token1DerivedBnb] = await Promise.all([
      getTokenDerivedBnbPrices(token0Address, blocks),
      getTokenDerivedBnbPrices(token1Address, blocks),
    ]);
    return { token0DerivedBnb, token1DerivedBnb };
  } catch (error) {
    console.error("Failed to fetched derived price data for chart", error);
    return null;
  }
};

export default fetchDerivedPriceData;
