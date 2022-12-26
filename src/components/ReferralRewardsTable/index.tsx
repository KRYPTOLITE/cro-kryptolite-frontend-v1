import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import List from "./List";
import RewardRecord, { type RewardRecordType } from "./RewardRecord";
import { stringifyUrl } from "query-string";
import { ethers } from "ethers";
import type { ReferralRewardPaidLogs } from "./types";
import Big from "bignumber.js";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";
import ReactPaginate from "react-paginate";
import { getReferralRewardsContract } from "./utils";

const itemsPerPage = 10;
const neetworkConfigs = {
  cro: { url: "https://evm.cronos.org/", chainId: 25 },
  bsc: { url: "https://bsc-dataseed.binance.org/", chainId: 56 },
  eth: { url: "https://eth-mainnet.public.blastapi.io/", chainId: 1 },
};

export function arrayUnique(array: any[], key: string) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i][key] === a[j][key]) a.splice(j--, 1);
    }
  }
  return a;
}

const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenReward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReferralRewardPaid",
    type: "event",
  },
];
const iface = new ethers.utils.Interface(abi);

export default function ReferralRewardsTable() {
  const [records, setRecords] = useState<RewardRecordType[]>([]);
  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    month: number;
  }>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  const [offset, setOffset] = useState(0);

  const { library, account, active } = useActiveWeb3React();

  const navigateMonth = useCallback(
    (index: number) => {
      const min = 1,
        max = 12;
      let current = selectedDate.month;
      let next = (current += index);
      if (index === -1 && next < min) {
        next = max;
      } else if (index === 1 && next > max) {
        next = min;
      }
      setSelectedDate((p) => ({ ...p, month: next }));
    },
    [selectedDate]
  );

  const getBscReferralRewardLogs = async function () {
    if (library && account) {
      const contractBsc = getReferralRewardsContract(
        "0xfd28480e8fabbc1f3d66cf164dfe6b0818249a25",
        "https://bsc-dataseed.binance.org/"
      );

      // const contract = getRouterContract(library, account);
      const eventFilter = contractBsc.filters.ReferralRewardPaid(null, account);

      const currentBlock = await contractBsc.provider.getBlockNumber();
      const { address, topics } = eventFilter;
      if (address && topics) {
        const requestParams = {
          module: "logs",
          action: "getLogs",
          fromBlock: 19352360,
          toBlock: currentBlock,
          address: address,
          topic0: topics[0],
          topic1: topics[1],
          apikey: "",
        };
        const stringified = stringifyUrl({
          url: "https://api.bscscan.com/api",
          query: requestParams,
        });
        fetch(stringified)
          .then(async (res) => {
            const logs = (await res.json()) as ReferralRewardPaidLogs;
            if (Array.isArray(logs.result)) {
              const events = logs.result.map((log) => {
                return {
                  data: iface.parseLog(log),
                  timeStamp: log.timeStamp,
                  blockNumber: log.blockNumber,
                  transactionHash: log.transactionHash,
                };
              });

              const eventLogs = events.map(
                ({ data, transactionHash, timeStamp, blockNumber }) => {
                  const { amount, tokenReward } = data.args;
                  let tokenRewardId = tokenReward as string;

                  return {
                    amount,
                    tokenReward: tokenRewardId,
                    transactionHash,
                    timeStamp,
                    blockNumber,
                    networkExplorerUrl: "https://bscscan.com",
                    chainId: neetworkConfigs.bsc.chainId,
                    rpcUrl: neetworkConfigs.bsc.url,
                  };
                }
              );
              // setRecords(eventLogs);
              setRecords((p) =>
                arrayUnique([...p, ...eventLogs], "transactionHash")
              );
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  };
  const getEthReferralRewardLogs = async function () {
    if (account) {
      const contractEth = getReferralRewardsContract(
        "0xdDAD3ED378830d406D8957Ca76782A7ECD8A7061",
        "https://eth-mainnet.public.blastapi.io/"
      );
      const eventFilter = contractEth.filters.ReferralRewardPaid(null, account);
      const currentBlock = await contractEth.provider.getBlockNumber();
      const { address, topics } = eventFilter;

      if (address && topics) {
        const requestParams = {
          module: "logs",
          action: "getLogs",
          fromBlock: 15844387,
          toBlock: currentBlock,
          address: address,
          topic0: topics[0],
          topic1: topics[1],
          apikey: "",
        };
        const stringified = stringifyUrl({
          url: "https://api.etherscan.io/api",
          query: requestParams,
        });
        fetch(stringified)
          .then(async (res) => {
            const logs = (await res.json()) as ReferralRewardPaidLogs;

            if (Array.isArray(logs.result)) {
              const events = logs.result.map((log) => {
                return {
                  data: iface.parseLog(log),
                  timeStamp: log.timeStamp,
                  blockNumber: log.blockNumber,
                  transactionHash: log.transactionHash,
                };
              });

              const eventLogs = events.map(
                ({ data, transactionHash, timeStamp, blockNumber }) => {
                  const { amount, tokenReward } = data.args;
                  let tokenRewardId = tokenReward as string;

                  return {
                    amount,
                    tokenReward: tokenRewardId,
                    transactionHash,
                    timeStamp,
                    blockNumber,
                    networkExplorerUrl: "https://etherscan.io",
                    chainId: neetworkConfigs.eth.chainId,
                    rpcUrl: neetworkConfigs.eth.url,
                  };
                }
              );
              // setRecords(eventLogs);
              setRecords((p) =>
                arrayUnique([...p, ...eventLogs], "transactionHash")
              );
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  };

  const getCroReferralRewardLogs = async function () {
    if (account) {
      const contractCro = getReferralRewardsContract(
        "0xdDAD3ED378830d406D8957Ca76782A7ECD8A7061",
        "https://evm.cronos.org/"
      );
      // const contract = getRouterContract(library, account);
      const eventFilter = contractCro.filters.ReferralRewardPaid(null, account);
      const currentBlock = await contractCro.provider.getBlockNumber();
      const { address, topics } = eventFilter;

      if (address && topics) {
        const requestParams = {
          module: "logs",
          action: "getLogs",
          fromBlock: 5490837,
          toBlock: currentBlock,
          address: address,
          topic0: topics[0],
          topic1: topics[1],
          apikey: "",
        };
        const stringified = stringifyUrl({
          url: "https://api.cronoscan.com/api",
          query: requestParams,
        });
        fetch(stringified)
          .then(async (res) => {
            const logs = (await res.json()) as ReferralRewardPaidLogs;

            if (Array.isArray(logs.result)) {
              const events = logs.result.map((log) => {
                return {
                  data: iface.parseLog(log),
                  timeStamp: log.timeStamp,
                  blockNumber: log.blockNumber,
                  transactionHash: log.transactionHash,
                };
              });

              const eventLogs = events.map(
                ({ data, transactionHash, timeStamp, blockNumber }) => {
                  const { amount, tokenReward } = data.args;
                  let tokenRewardId = tokenReward as string;

                  return {
                    amount,
                    tokenReward: tokenRewardId,
                    transactionHash,
                    timeStamp,
                    blockNumber,
                    networkExplorerUrl: "https://cronoscan.com",
                    chainId: neetworkConfigs.cro.chainId,
                    rpcUrl: neetworkConfigs.cro.url,
                  };
                }
              );
              // setRecords(eventLogs);
              setRecords((p) =>
                arrayUnique([...p, ...eventLogs], "transactionHash")
              );
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  };

  useEffect(() => {
    getCroReferralRewardLogs();
    getBscReferralRewardLogs();
    getEthReferralRewardLogs();
  }, [account]);

  const filteredRecords = useMemo(() => {
    // let lastActiveDate: Date = new Date();
    let filtered = records.filter(({ timeStamp }) => {
      const unixTime = new Big(timeStamp).times(1000).toNumber();
      const trxDate = new Date(unixTime);
      // lastActiveDate = trxDate;

      if (
        trxDate.getFullYear() === selectedDate.year &&
        trxDate.getMonth() === selectedDate.month - 1
      ) {
        return true;
      } else {
        return false;
      }
    });
    /* // If filtrered is empty, show the most recent rewards
    if (filtered.length === 0) {
      filtered = records.filter(({ timeStamp }) => {
        const unixTime = new Big(timeStamp).times(1000).toNumber();
        const trxDate = new Date(unixTime);
        if (trxDate === lastActiveDate) {
          return true;
        } else {
          return false;
        }
      });
      // Set active date
      setSelectedDate({ year: lastActiveDate.getFullYear(), month: lastActiveDate.getMonth() + 1 });
    }
 */
    return filtered;
  }, [selectedDate, records]);

  const endOffset = offset + itemsPerPage;
  const pageCount = Math.ceil(filteredRecords.length / itemsPerPage);
  const currentItems = filteredRecords.slice(offset, endOffset);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredRecords.length;
    setOffset(newOffset);
  };

  return (
    <div>
      <h3>Track Your Referral Rewards</h3>
      <div className="mb-3 p-3 border-b">
        <List
          handleAMonthChange={setSelectedDate}
          state={selectedDate}
          handleNextMonth={navigateMonth}
        />
      </div>
      <div className="divide-y min-h-[30vh]">
        {!active && (
          <p className="text-base font-light">
            To begin seeing your rewards, connect your wallet first.{" "}
            <ConnectWalletButton
              className="w-full block my-2"
              buttonVariant="primary"
            />
          </p>
        )}
        {active && currentItems.length === 0 && (
          <p className="text-base font-light">
            There are no rewards for the selected timeframe.
          </p>
        )}
        {active && currentItems.length > 0 && (
          <Fragment>
            <div className="flex items-center text-sm gap-5 divide-x py-2 mb-3 text-gray-600">
              <span className="px-1">Day</span>
              <span className="px-1">Token Reward</span>
              <span className="px-1">Transaction hash</span>
            </div>
            {currentItems.map((record) => (
              <RewardRecord
                key={record.transactionHash}
                {...{ ...record, time: selectedDate }}
              />
            ))}
          </Fragment>
        )}
      </div>
      <div className="mt-3 pt-2 border-t">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="< prev"
          containerClassName="flex items-center flex-wrap gap-3"
          breakLinkClassName="text-primary-700 text-xl font-medium"
          activeLinkClassName="text-primary-700 text-xl font-medium"
          previousClassName="text-primary-700 bg-primary-50 rounded"
          nextClassName="text-primary-700 bg-primary-50 rounded"
        />
      </div>
    </div>
  );
}
