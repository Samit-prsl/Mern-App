import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {

  const { dispatch } = useWorkoutsContext()

  const handleClick = async() => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className='workout-details'>
        <div className='font-semibold text-xl text-teal-700 mb-3'>{workout.title}</div>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className='material-symbols-outlined scale-90' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails
