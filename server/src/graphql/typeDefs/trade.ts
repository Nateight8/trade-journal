import { gql } from "graphql-tag";

const tradeTypeDefs = gql`
  enum TradeStatus {
    ACTIVE
    CLOSED
  }

  enum TradeOutcome {
    WON
    LOST
    RUNNING
    BREAKEVEN
  }

  type Trade {
    id: ID!
    userId: ID!
    entryPrice: Float!
    takeProfit: Float!
    stopLoss: Float!
    riskToReward: Float!
    position: String!
    instrument: String!
    setupRating: Int!

    strategy: String!

    createdAt: String!
    updatedAt: String!

    tradeStatus: TradeStatus!
    tradeOutcome: TradeOutcome!
    note: String
  }

  input CreateTradeInput {
    instrument: String!
    entryPrice: Float!
    takeProfit: Float!
    stopLoss: Float!
    setupRating: Int!
    strategy: String!
    note: String
  }

  input UpdateTradeInput {
    tradeStatus: TradeStatus
    tradeOutcome: TradeOutcome
    note: String
  }

  type TradeResponse {
    status: Boolean!
    message: String!
    id: ID!
  }

  type Query {
    trades: [Trade!]!
  }

  type Mutation {
    createTrade(input: CreateTradeInput!): TradeResponse!
    updateTrade(id: ID!, input: UpdateTradeInput!): TradeResponse!
  }
`;

export default tradeTypeDefs;
