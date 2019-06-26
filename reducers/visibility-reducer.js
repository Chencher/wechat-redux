import {visibilityFilters} from '../actions/action';
const { SHOW_ALL } = visibilityFilters;

export default (state = SHOW_ALL, action) => {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER': 
            return action.filter;
        default: 
            return state;
    }
}