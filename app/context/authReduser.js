import { useReducer } from "react";

const authReduser = () => {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "RESTORE_TOKEN":
                    return {
                        ...prevState,
                        userToken: action.token,
                        isInitialLoading: false,
                    };
                case "SIGN_IN":
                case "SIGN_UP":
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
                default:
                    return { ...prevState };
            }
        },
        {
            isInitialLoading: true,
            isSignout: false,
            userToken: null,
        }
    );
    return [state, dispatch];
};
export default authReduser;
