
interface WorkoutCardProps {
  workout: {
    title: string;
    image: string;
    description: string;
  }
}

/** WorkoutCard
 * props: workout {
 *    title - title of the workout
 *    img - illustration of the workout serves as background for the card
 *    description - optional additional instrutions for the workout
 * }
 */
export function WorkoutCard({ workout }: WorkoutCardProps) {

  return (
    <div style={{backgroundImage: workout.image}}>
      <h2>{workout.title}</h2>
      <p>{workout.description}</p>
    </div>
  );
}
