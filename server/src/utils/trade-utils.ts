import { GraphQLError } from "graphql";

// Function to determine if trade is buy or sell based on price levels
function determinePosition(
  entryPrice: number,
  takeProfit: number,
  stopLoss: number
): "BUY" | "SELL" {
  // For a buy trade:
  // - Take profit should be higher than entry price
  // - Stop loss should be lower than entry price
  if (takeProfit > entryPrice && stopLoss < entryPrice) {
    return "BUY";
  }
  // For a sell trade:
  // - Take profit should be lower than entry price
  // - Stop loss should be higher than entry price
  else if (takeProfit < entryPrice && stopLoss > entryPrice) {
    return "SELL";
  }
  // If price levels don't make sense for either direction
  throw new GraphQLError("Invalid price levels for trade direction", {
    extensions: {
      code: "INVALID_PRICE_LEVELS",
    },
  });
}

export { determinePosition };
