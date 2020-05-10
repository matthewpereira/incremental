import React                          from 'react';
import { AppState }                   from './App';
import { Achievement }  from './achievements';

type SetState = (state: any) => void;

const displayAchievements = (state: AppState) => (
    <div style={{"display": "flex"}}>
      {state.achievements.map((achievement: Achievement) => {
        if (!achievement.visible) {
          return null;
        }

        return (
          <div className="achievement" key={achievement.slug}>
            <div className="icon">{achievement.icon}</div>
            <div className="achievement_tooltip">
              <h1>{achievement.label}</h1>
              <p>{achievement.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  );

export default displayAchievements;