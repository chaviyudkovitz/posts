
function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();

}

export const actions = new Proxy(
    {},
    {
        get: (target, actionName) => {
            debugger;
            return (args) => {
                if (target[actionName] === undefined) {
                    return {
                        type: convertActionNameToType(actionName),
                        payload: args
                    }
                }
                else return { type: target[actionName], payload: args };
            }
        }
    }
);