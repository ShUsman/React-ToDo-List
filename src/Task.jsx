import PropTypes from 'prop-types';
import './task.css'


export default function Task({ task, index, markDone, deleteTask }) {
  return (
    <div className={`new__task ${task.isDone ? 'task-done' : ''}`}> 
      <p>{task.text}</p>
      <div className="task-buttons">
      <button 
        type="button" 
        className="done-button" 
        onClick={() => markDone(index)}>
      </button>
      <button 
        type="button" 
        className="delete-button" 
        onClick={() => deleteTask(index)}>
      </button>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  markDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
