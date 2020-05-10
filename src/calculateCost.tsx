import { AppState } from './App';

const calculateCost = (state: AppState, slug: string) => {
    const baseCost = state.devPurchaseables
                        .filter(item => slug === item.slug)[0]
                        .cost;

    if (state.devPurchases[slug] === 0) {
      return baseCost;
    }

    const penalty = baseCost * 0.3 * state.devPurchases[slug] * state.devPurchases[slug];

    return baseCost + penalty;
  }

  export default calculateCost;