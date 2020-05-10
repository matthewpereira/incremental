import calculateCost from './calculateCost';
import { AppState } from './App';

type SetState = (state: any) => void;

export const handlePurchase = (state: AppState, setState: SetState, slug: string) => {
    setState({
      profit: state.profit - calculateCost(state, slug), 
      devPurchases: {
        ...state.devPurchases,
        [slug]: state.devPurchases[slug] + 1
      }
    })
  }

export const handleSale = (state: AppState, setState: SetState, slug: string) => {
    const totalProfit = state.profit + Math.floor((calculateCost(state, slug) * 0.4) + Number.EPSILON) * 100 / 100;

    setState({
      profit: totalProfit, 
      devPurchases: {
        ...state.devPurchases,
        [slug]: state.devPurchases[slug] - 1
      }
    })
  }