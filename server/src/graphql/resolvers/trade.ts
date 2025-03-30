import { GraphQLError } from "graphql";
import GraphqlContext from "../../types/types.utils.js";
import { eq, and, asc } from "drizzle-orm";
import { determinePosition } from "@/utils/trade-utils.js";

interface CreateTradeInput {
  instrument: string;
  entryPrice: number;
  takeProfit: number;
  stopLoss: number;
  riskToReward: number;
  setupRating: number;
  strategy: string;
  note?: string;
}

interface UpdateTradeInput {
  tradeStatus?: "ACTIVE" | "CLOSED";
  tradeOutcome?: "WON" | "LOST" | "RUNNING" | "BREAKEVEN";
  note?: string;
}

const tradeResolvers = {
  Query: {
    trades: async (_: any, __: any, { session, db }: GraphqlContext) => {
      if (!session?.user?.id) {
        throw new GraphQLError("You must be logged in to view trades", {
          extensions: {
            code: "UNAUTHORIZED",
          },
        });
      }

      const userId = session.user.id;

      try {
        // const userTrades = await db.query.trades.findMany({
        //   where: (trades, { eq }) => eq(trades.userId, userId),
        //   orderBy: (trades, { asc }) => [asc(trades.createdAt)],
        // });

        return [];
      } catch (error) {
        throw new GraphQLError("Failed to fetch trades", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
          },
        });
      }
    },
  },

  Mutation: {
    createTrade: async (
      _: any,
      { input }: { input: CreateTradeInput },
      { session, db }: GraphqlContext
    ) => {
      if (!session?.user?.id) {
        throw new GraphQLError("You must be logged in to create trades", {
          extensions: {
            code: "UNAUTHORIZED",
          },
        });
      }

      const userId = session.user.id;

      // Determine trade position (BUY/SELL)
      const position = determinePosition(
        input.entryPrice,
        input.takeProfit,
        input.stopLoss
      );

      // Calculate risk-to-reward ratio
      const riskToReward =
        (input.takeProfit - input.entryPrice) /
        (input.entryPrice - input.stopLoss);

      try {
        // Convert numeric values to strings for PostgreSQL
        const numericValues = {
          entryPrice: input.entryPrice.toString(),
          takeProfit: input.takeProfit.toString(),
          stopLoss: input.stopLoss.toString(),
          riskToReward: riskToReward.toString(),
        };

        // const newTrade = await db
        //   .insert(trades)
        //   .values({
        //     ...input,
        //     ...numericValues,
        //     position,
        //     tradeStatus: "ACTIVE",
        //     tradeOutcome: "RUNNING",
        //     userId: userId,
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   })
        //   .returning();

        return {
          status: true,
          message: "Trade created successfully",
          // id: newTrade[0].id,
        };
      } catch (error) {
        throw new GraphQLError("Failed to create trade", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
          },
        });
      }
    },

    updateTrade: async (
      _: any,
      { id, input }: { id: string; input: UpdateTradeInput },
      { session, db }: GraphqlContext
    ) => {
      if (!session?.user?.id) {
        throw new GraphQLError("You must be logged in to update trades", {
          extensions: {
            code: "UNAUTHORIZED",
          },
        });
      }

      const userId = session.user.id;

      try {
        // const [existingTrade] = await db
        //   .select()
        //   .from(trades)
        //   .where(and(eq(trades.id, id), eq(trades.userId, userId)));

        // if (!existingTrade) {
        //   throw new GraphQLError("Trade not found", {
        //     extensions: {
        //       code: "NOT_FOUND",
        //     },
        //   });
        // }

        // If outcome is WON or LOST, automatically set status to CLOSED
        // const updateData = {
        //   ...input,
        //   tradeStatus:
        //     input.tradeOutcome === "WON" || input.tradeOutcome === "LOST"
        //       ? "CLOSED"
        //       : input.tradeStatus,
        //   updatedAt: new Date(),
        // };

        // await db
        //   .update(trades)
        //   .set(updateData)
        //   .where(and(eq(trades.id, id), eq(trades.userId, userId)));

        return {
          status: true,
          message: "Trade updated successfully",
        };
      } catch (error) {
        if (error instanceof GraphQLError) {
          throw error;
        }
        throw new GraphQLError("Failed to update trade", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
          },
        });
      }
    },
  },
};

export default tradeResolvers;
