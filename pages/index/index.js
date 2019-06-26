import {connect} from '../../static/libs/wechat-weapp-redux.js';
import { add, subtract } from '../../actions/action';
const pageConfig = {
    data: {
    },
    onLoad(){
        console.log('onLoad')
    },
    addNum(){
        this.add(this.data.count);
    }
}

const mapStateToData = state => {
    return {
        count: state.count,
        todos: state.todos
    }
};

const mapDispatchToPage = dispatch => ({
    add: count => dispatch(add(count)),
    subtract:count => dispatch(subtract(count))
});
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);

Page(nextPageConfig);