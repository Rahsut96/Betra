import * as React from "react";

const AuthContext = React.createContext({
    authState: null,
    authActions: null,
    authResponse: null,
});
AuthContext.displayName = "AuthContext";
export default AuthContext;
