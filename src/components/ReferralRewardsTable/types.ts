export interface ReferralRewardPaidLogs {
  status: string;
  message: string;
  result: {
    address: string;
    topics: string[];
    data: string;
    blockNumber: string;
    blockHash: string;
    timeStamp: string;
    gasPrice: string;
    gasUsed: string;
    logIndex: string;
    transactionHash: string;
    transactionIndex: string;
  }[];
}
