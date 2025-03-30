// This should go in your @/lib/risk-reward-calc.js file
export function riskRewardCalculator(
  entry: number,
  stopLoss: number,
  takeProfit: number
) {
  // Validate inputs
  if (!entry || !stopLoss || !takeProfit) {
    return null;
  }

  // Convert to numbers in case they're strings
  const entryPrice = Number(entry);
  const sl = Number(stopLoss);
  const tp = Number(takeProfit);

  // Calculate risk (distance from entry to stop loss)
  const risk = Math.abs(entryPrice - sl);

  // Calculate reward (distance from entry to take profit)
  const reward = Math.abs(entryPrice - tp);

  // Calculate risk-reward ratio
  if (risk === 0) {
    return null; // Avoid division by zero
  }

  return (reward / risk).toFixed(2);
}
