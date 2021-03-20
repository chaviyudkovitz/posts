
function convertActionNameToType(actionType) {
    return actionType.toLowerCase().replace(/_(\w)/g, v=>v[1].toUpperCase());
}

  export default function createReducer(state,action,setFunctionsList){
    const key = convertActionNameToType(action.type);
    const hendler = setFunctionsList[key];
    if (hendler){
        hendler(state,action) 
    }

};