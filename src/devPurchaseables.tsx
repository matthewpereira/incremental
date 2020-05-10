export interface DevPurchaseable {
    slug: string,
    label: string,
    description: string,
    visible: boolean,
    buildThreshold: number,
    costThreshold: number,
    increment: number,
    purchased: 0,
    cost: number
}
  
export type DevPurchaseables = Array<DevPurchaseable>  

const DEV_PURCHASEABLES: DevPurchaseables = [
    {
        slug: 'XXS',
        label: 'XXS Worker',
        description: '1 build per cycle',
        visible: true,
        buildThreshold: 0,
        costThreshold: 0,
        increment: 1,
        purchased: 0,
        cost: 5
    },
    {
      slug: 'XS',
      label: 'XS Worker',
      description: '3 build per cycle',
      visible: true,
      buildThreshold: 0,
      costThreshold: 0,
      increment: 3,
      purchased: 0,
      cost: 50
    },
    {
      slug: 'S',
      label: 'S Worker',
      description: '10 build per cycle',
      visible: true,
      buildThreshold: 0,
      costThreshold: 1000,
      increment: 10,
      purchased: 0,
      cost: 300
    },
    {
      slug: 'M',
      label: 'M Worker',
      description: '25 build per cycle',
      visible: false,
      buildThreshold: 2500,
      costThreshold: 500,
      increment: 25,
      purchased: 0,
      cost: 750
    },
    {
      slug: 'L',
      label: 'L Worker',
      description: '75 build per cycle',
      visible: false,
      buildThreshold: 5000,
      costThreshold: 1750,
      increment: 75,
      purchased: 0,
      cost: 2000
    },
    {
      slug: 'XL',
      label: 'XL Worker',
      description: '200 build per cycle',
      visible: false,
      buildThreshold: 7500,
      costThreshold: 4000,
      increment: 200,
      purchased: 0,
      cost: 5000
    },
    {
      slug: 'XXL',
      label: 'XXL Worker',
      description: '500 build per cycle',
      visible: false,
      buildThreshold: 10000,
      costThreshold: 12500,
      increment: 500,
      purchased: 0,
      cost: 15000
    }
  ];

  export default DEV_PURCHASEABLES;