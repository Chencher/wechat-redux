import {connect} from '../../static/libs/wechat-weapp-redux';
import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter, visibilityFilters } from '../../actions/action';
import componentConnect from '../../static/utils/componentConnect';

const componentConfig = {
    properties: {
        list: {
            type: Array,
            value: []
        }
    },
    data: {
    },
    ready(){
        console.log(this)
    },
    methods: {
        addToList(e){
            let {text} = e.detail;
            this.addTodo(text);
        },
        toggleToList(e){
            let {id} = e.detail;
            this.toggleTodo(id);
        },
        deleteToList(e){
            let {id} = e.detail;
            this.deleteTodo(id);
        },
        filterChangeFn(e){
            let { filter } = e.detail;
            this.filterChange(filter)
        }
    }
}

function selectTodos(todos, filter) {
    switch (filter){
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter( todos => todos.completed );
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter( todos => !todos.completed );
        default: 
            return todos;    
    }
}

const mapStateToProps = state => ({
    vidibilityTodos: selectTodos(state.todos, state.visibiliters),
    visibilityFilters: state.visibiliters
})

const mapDispatchToPage = dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    filterChange: filter => dispatch(setVisibilityFilter(filter))
});

const nextComponentConfig = connect(mapStateToProps, mapDispatchToPage)(componentConfig);

Component(componentConnect(nextComponentConfig, componentConfig));