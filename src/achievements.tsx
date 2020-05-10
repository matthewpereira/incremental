export interface Achievement {
    slug: string,
    label: string,
    description: string,
    icon: string,
    visible: boolean,
    buildThreshold: number,
    costThreshold: number,
    increment: number,
    purchased: 0,
    cashBonus: number
}
  
export type Achievements = Array<Achievement>  

const ACHIEVEMENTS: Achievements = [
    {
        slug: 'first_build',
        label: 'First Build',
        description: 'You\'ve hand-built your first unit of code',
        icon: "🥇",
        visible: false,
        buildThreshold: 1,
        costThreshold: 0,
        increment: 1,
        purchased: 0,
        cashBonus: 0
    },
    {
        slug: 'first_100_builds',
        label: '100 Builds',
        description: 'You\'ve reached 100 builds! Here\'s a bonus $10 on us.',
        icon: "💯",
        visible: false,
        buildThreshold: 100,
        costThreshold: 0,
        increment: 1,
        purchased: 0,
        cashBonus: 10
    },
    {
        slug: 'first_1000_builds',
        label: '1000 Builds',
        description: 'You\'ve reached 1000 builds! Here\'s a bonus $100 on us.',
        icon: "⭐️",
        visible: false,
        buildThreshold: 1000,
        costThreshold: 0,
        increment: 1,
        purchased: 0,
        cashBonus: 100
    },
    {
        slug: 'first_10000_builds',
        label: '10000 Builds',
        description: 'You\'ve reached 10000 builds! Here\'s a bonus $1000 on us.',
        icon: "🌟",
        visible: false,
        buildThreshold: 10000,
        costThreshold: 0,
        increment: 1,
        purchased: 0,
        cashBonus: 1000
    },
    {
        slug: 'first_100000_builds',
        label: '100000 Builds',
        description: 'You\'ve reached 100000 builds! Here\'s a bonus $1000 on us.',
        icon: "💫",
        visible: false,
        buildThreshold: 100000,
        costThreshold: 0,
        increment: 1,
        purchased: 0,
        cashBonus: 1000
    }
  ];

  export default ACHIEVEMENTS;