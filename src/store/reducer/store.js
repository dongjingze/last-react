const defaultState = {
    shopcarList:[]
}


const shopcarList = (state = defaultState,action)=>{
    const { type,payload } = action;
    switch (type) {
        case "UPDATE":
            return {...state,shopcarList:[...payload]}
        default:
            return state;
    }
}

export default shopcarList