import { gql } from "@apollo/client";

const tradeOperations = {
  Mutations: {
    createTrade: gql`
      mutation CreateTrade($input: CreateTradeInput!) {
        createTrade(input: $input) {
          message
          status
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
          id
          instrument
          position
          volume
          status
          outcome
          tradeNote
        }
      }
    `,
  },
};

export default tradeOperations;
