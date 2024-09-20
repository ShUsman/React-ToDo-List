export const initialStore = {
    tasks: []
};

const reducer = (state = initialStore, action) => {
    switch(action.type) {
        case 'addTask': {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        }

        case 'deleteTask': {
            return {
              ...state,
              tasks: state.tasks.filter((item, index) => index !== action.payload),
            };
        }

        case 'markDone': {
            return {
                ...state,
                tasks: state.tasks.map((task, index) => 
                index === action.payload
                ? {...task, isDone: !task.isDone}: task
                )
            }
        }

        default:
            return state
    }
}

export default reducer;