import React                                   from 'react';
import './App.css';
import DEV_PURCHASEABLES, { DevPurchaseables } from './devPurchaseables';
import ACHIEVEMENTS, { Achievements }           from './achievements';
import displayPurchaseables                    from './displayPurchaseables';
import displayAchievements                     from './displayAchievements';
import { getBank, getPotentialProfit }         from './getters';

interface AppProps {}

export interface AppState {
  codeDeployIncrement: number,
  // bankAccount: number,
  profit: number,
  profitPerManualBuild: number,
  profitLastBuild: number,
  manualDeploy: boolean,
  spentMoney: number,
  builds: number,
  devPurchases: {
    [key: string]: number,
  },
  achievements: Achievements,
  devPurchaseables: DevPurchaseables
}

interface Upgrade {
  slug: string,
  label: string,
  description: string,
  unlocked: boolean,
  bonus: () => void,
  cost: number
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
      super(props);

      this.state = {
        // bankAccount: 0,
        achievements: ACHIEVEMENTS,
        builds: 0,
        codeDeployIncrement: 1,
        devPurchaseables: DEV_PURCHASEABLES,
        devPurchases: {
          XXS: 0,
          XS: 0,
          S: 0,
          M: 0,
          L: 0,
          XL: 0,
          XXL: 0,
        },
        manualDeploy: true,
        profit: 0,
        profitPerManualBuild: 1,
        profitLastBuild: 0,
        spentMoney: 0,
      }

      this.setState = this.setState.bind(this);

      setInterval(() => this.runChecks(), 3000);
  };

  runChecks = () => {
    this.employDevs();
    this.checkVisibility();
    this.checkAchievements();
  }

  checkAchievements = () => {
    let newState = this.state.achievements;

    let cashBonus = 0;

    newState.map(item => {
      if (
        item.visible === false &&
        item.buildThreshold <= this.state.builds &&
        item.costThreshold <= this.state.profit - this.state.spentMoney
      ) {
        item.visible = true;

        cashBonus = cashBonus + item.cashBonus;
      }

      return item;
    });

    this.setState({
      achievements: newState,
      profit: this.state.profit + cashBonus
    });
  }

  checkVisibility = () => {
    let newState = this.state.devPurchaseables;
    
    newState.map(item => {
        if (
          item.buildThreshold < this.state.builds &&
          item.costThreshold < this.state.profit - this.state.spentMoney
        ) {
          item.visible = true;
        }
        
        return item;
      });

      this.setState({
        devPurchaseables: newState
      });
  }

  employDevs = () => {
    const totalProfit = getPotentialProfit(this.state);

    let totalPayroll = 0;

    this.setState({
      manualDeploy: true,
      builds: this.state.builds + totalProfit,
      profit: this.state.profit + totalProfit - totalPayroll,
      profitLastBuild: totalProfit
    })
  }

  deployCode = () => {
    this.setState({
      manualDeploy: false,
      profit: (this.state.profit + this.state.profitPerManualBuild),
      builds: (this.state.builds + this.state.codeDeployIncrement),
    })
  }

  render = () => (
    <div className="gameContainer">
        <button className="deployButton" disabled={!this.state.manualDeploy} onClick={() => this.deployCode()}>Manual Deploy</button>
        <div className="automaticDeploys">
          <span>Automatic Deploys: {Math.round(getPotentialProfit(this.state) * 0.3333 * 100) / 100}/sec (${this.state.profitLastBuild})</span>
        </div>
        <div className="counts">
          <div>Build Count: {this.state.builds}</div>
          <div>Bank Account: {getBank(this.state)}</div>
        </div>
        <div className="purchaseables">
          {displayPurchaseables(this.state, this.setState)}
        </div>
        <div className="achievements">
          {displayAchievements(this.state)}
        </div>
    </div>
  );
}

export default App;
