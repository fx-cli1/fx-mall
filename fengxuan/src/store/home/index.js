export default {
    namespaced:true,
    state:{
        active:0
    },
    mutations:{
        setActive(state,index){
            state.active=index
        }
    }
}