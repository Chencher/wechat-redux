const componentConfig = {
    properties: {
        
    },
    data: {
        val: ''
    },
    methods: {
        handleInput(e){
            let val = e.detail.value;
            this.setData({val});
        },
        add(){
            this.triggerEvent('add', {text: this.data.val})
            this.setData({
                val:''
            });
        }
    }
}

Component(componentConfig);