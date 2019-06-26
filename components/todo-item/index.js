const componentConfig = {
    properties: {
        todoitem: {
            type: Object,
            value: {},
            observer(val){
                console.log(val)
            }
        }
    },
    methods: {
        toggleFn(e){
            this.triggerEvent('toggle', {id: e.target.dataset.id})
        },
        deleteFn(e){
            this.triggerEvent('delete', {id: e.target.dataset.id})
        }
    }
}

Component(componentConfig);