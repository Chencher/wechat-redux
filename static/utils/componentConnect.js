/**
 * 将事件挂载到自定义组件methods下
 * 原因：自定义组件事件不能被通过connect绑定到methods下
 */
module.exports = (nextComponentConfig, componentConfig) => {
    for(let key in nextComponentConfig){
        if(!componentConfig[key]){
            nextComponentConfig.methods[key] = nextComponentConfig[key];
        }
    }
    return nextComponentConfig;
}
