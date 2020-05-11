import React                          from 'react';
import calculateCost                  from './calculateCost';
import { AppState }                   from './App';
import { DevPurchaseable }            from './devPurchaseables';
import { getBank }                    from './getters';
import { handlePurchase, handleSale } from './handlers';

type SetState = (state: any) => void;

const displayPurchaseables = (state: AppState, setState: SetState) => (
    <div className="purchaseables">
      {state.devPurchaseables.map((purchaseable: DevPurchaseable) => {
        if (!purchaseable.visible) {
          return null;
        }

        let currentCost = calculateCost(state, purchaseable.slug);

        return (
          <div className="purchaseable" key={purchaseable.slug}>
            <h1>{purchaseable.label}</h1>
            <p>{purchaseable.description}</p>
            <div>Cost: {currentCost} <button disabled={currentCost > getBank(state)} onClick={() => handlePurchase(state, setState, purchaseable.slug)}>Buy</button></div>
            Number employed: {state.devPurchases[purchaseable.slug]} <button disabled={state.devPurchases[purchaseable.slug] <= 0} onClick={() => handleSale(state, setState, purchaseable.slug)}>Sell</button>
          </div>
        )
      })}
    </div>
  );

export default displayPurchaseables;