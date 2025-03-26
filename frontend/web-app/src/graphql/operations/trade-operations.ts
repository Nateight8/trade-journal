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
        }
      }
    `,
  },
};

export default tradeOperations;
