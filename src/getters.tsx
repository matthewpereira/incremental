import { AppState } from './App';

export const getBank = (state: AppState) => (state.profit - state.spentMoney);

export const getEarnings = (state: AppState, key: string) => {
    const current = state.devPurchaseables.filter(item => item.slug === key);

    return current[0].increment * state.devPurchases[key];
}

export const getPotentialProfit = (state: AppState) => {
    let totalProfit = 0;

    for (let key in state.devPurchases) {
      const earnings = getEarnings(state, key);

      totalProfit = totalProfit + earnings;
      // bump builds
    }
    return totalProfit;
  }