export type TradeLog = {
  volume: string;
  image: string;
  instrument: string;
  position: string;
  status: string;
  outcome: string;
  riskReward: string;
  mediaChart: {
    name: string;
    image: string;
  };
  note: string;
  joinDate: string;
};

export const mockTradeLogs: TradeLog[] = [
  {
    volume: "12",
    image: "",
    instrument: "AAPL",
    position: "Short",
    status: "Active",
    outcome: "Running",
    riskReward: "1:2",
    mediaChart: {
      name: "Daily Chart",
      image: "",
    },
    note: "Strong resistance at $180",
    joinDate: "2024-03-15",
  },
  {
    volume: "8.5",
    image: "",
    instrument: "GOOGL",
    position: "Short",
    status: "Closed",
    outcome: "Lost",
    riskReward: "1:15",
    mediaChart: {
      name: "4H Chart",
      image: "",
    },
    note: "Breakout from consolidation",
    joinDate: "2024-03-14",
  },
  {
    volume: "21",
    image: "",
    instrument: "MSFT",
    position: "Long",
    status: "Closed",
    outcome: "Won",
    riskReward: "1:3",
    mediaChart: {
      name: "Weekly Chart",
      image: "",
    },
    note: "Support at $380",
    joinDate: "2024-03-13",
  },
];
