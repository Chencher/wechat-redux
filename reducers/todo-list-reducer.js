const defaultList = [{
    id: 100,
    text: '我是第一条',
    completed: false 
}];

export default (state = defaultList, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(item => item.id === action.id ? {...item, completed: !item.completed} : item);
        case 'DELETE_TODO':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}
