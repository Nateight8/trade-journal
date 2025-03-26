import { gql } from "@apollo/client";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface GetLoggedInUserResponse {
  getLoggedInUser: {
    user: User;
  };
}

interface CheckUsernameAvailabilityResponse {
  checkUsernameAvailability: boolean;
}

interface UpdateUsernameResponse {
  updateUsername: {
    success: boolean;
    message: string;
    user: User | null;
  };
}

const userOperations = {
  Querries: {
    getLoggedInUser: gql`
      query GetLoggedInUser {
        getLoggedInUser {
          user {
            id
            name
            email
            image
          }
        }
      }
    `,
    checkUsernameAvailability: gql`
      query CheckUsernameAvailability($username: String!) {
        checkUsernameAvailability(username: $username)
      }
    `,
  },

  Mutations: {
    updateUsername: gql`
      mutation UpdateUsername($username: String!) {
        updateUsername(username: $username) {
          success
          message
          user {
            id
            name
          }
        }
      }
    `,
  },
};

export type {
  GetLoggedInUserResponse,
  CheckUsernameAvailabilityResponse,
  UpdateUsernameResponse,
  User,
};
export default userOperations;
