const componentConfig = {
    properties: {
        filter: {
            type: String,
            value: 'SHOW_ALL'
        }
    },
    data: {
        barList: [{
            text: '所有',
            type: 'SHOW_ALL'
        },{
            text: '未完成',
            type: 'SHOW_ACTIVE'
        },{
            text: '已完成',
            type: 'SHOW_COMPLETED'
        }]
    },
    methods: {
        selectFn(e){
            let {type} = e.target.dataset;
            this.triggerEvent('changeFilter', {filter: type })
        }
    }
}

Component(componentConfig);