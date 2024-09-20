import { useState } from 'react';
import Task from './Task';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [taskName, setTaskName] = useState(''); 

  const dispatch = useDispatch();
  const Newtasks = useSelector(state => state.tasks);

  const addTask = () => {
    dispatch({type: 'addTask', payload: {text: taskName, isDone: false}})
    setTaskName("");
  };

  const markDone = (index) => {
    dispatch({ type: 'markDone', payload: index});
  };

  const deleteTask = (index) => {
    dispatch({type: 'deleteTask', payload: index})
  };


  return (
    <>
      <main className='main'>
        <header className='todo__header'>
          <input 
            type = "text" 
            value = {taskName} 
            onChange = {ev => setTaskName(ev.target.value)}
            name="addTask" 
            id="addTask" 
            placeholder='Add a new task'
          />
          <button 
            type="button" 
            className='addTask__button' 
            onClick={addTask}>
          </button>
        </header>
        
        <div id='tasks__todo'>
          <p>Tasks to do - </p>
          {Newtasks.map((task, index) => (
            <Task 
              key = {index} 
              task = {task} 
              index = {index} 
              markDone = {markDone} 
              deleteTask = {deleteTask}
            />
          ))}
        </div>

        <div id='done'>Done - </div>
      </main>
    </>
  );
}

export default App;
