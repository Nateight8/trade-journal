import { gql } from "@apollo/client";

const tradeOperations = {
  Mutations: {
    createTrade: gql`
      mutation CreateTrade($input: CreateTradeInput!) {
        createTrade(input: $input) {
          message
          status
          id
        }
      }
    `,

    updateTrade: gql`
      mutation Mutation($updateTradeId: ID!, $input: UpdateTradeInput!) {
        updateTrade(id: $updateTradeId, input: $input) {
          message
          status
        }
      }
    `,
  },

  Queries: {
    getAllTrades: gql`
      query GetAllTrades {
        trades {
          entryPrice
          id
          instrument
          note
          riskToReward
          setupRating
          stopLoss
          strategy
          takeProfit
          tradeOutcome
          tradeStatus
          position
        }
      }
    `,
  },
};

export default tradeOperations;
