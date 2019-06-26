let nextId = 1;

export const add = (count) => {
    return { type: 'ADD', count }
}

export const subtract = (count) => {
    return { type: 'SUBTRACT', count }
}

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        text,
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
};

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};
