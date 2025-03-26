"use client";
import userOperations from "@/graphql/operations/user-operations";
import { useQuery } from "@apollo/client";

export const User = () => {
  const { data } = useQuery(userOperations.Querries.getLoggedInUser);

  return <div className="">{JSON.stringify(data)}</div>;
};
