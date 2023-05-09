import { InfoIcon } from '../Common/Icons/Info';
import { useState } from 'react';
import { ICard } from '../MockData';
import './card.css';

export interface WorkoutCardProps {
  workout: ICard;
  showInfo: boolean;
  toggleShowInfo: () => void
}

/** WorkoutCard
 * props: workout {
 *    title - title of the workout
 *    img - illustration of the workout serves as background for the card
 *    description - optional additional instrutions for the workout
 * }
 */
export function WorkoutCard({ workout, showInfo, toggleShowInfo }: WorkoutCardProps) {


  return (
    <div className="base-card">
      {!showInfo ?
        <>
          <header>
            <h1 className="card-title">{workout.title}</h1>
          </header>
          <div className="card-img" style={{ backgroundImage: `url('/${workout.image}')` }}></div>
        </>
        :
        <>
          <header>
            <h1 className="card-title">Instructions:</h1>
          </header>
          <div className="step-list">
            <ol>{workout.steps.map((step, i) => <li key={`step-${i}`}>{step}</li>)}</ol>
          </div>
        </>
      }
      <footer>
        <h2>{workout.rules.qty}<span className='card-label'>qty.</span></h2>
        <button className="icon-btn" onClick={toggleShowInfo}><InfoIcon /></button>
      </footer>
    </div>
  );
}
