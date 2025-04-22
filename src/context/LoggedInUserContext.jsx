import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  LoggedInUser: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        LoggedInUser: action.payload,
      };
    default: {
      throw new Error("INvalid action type");
    }
  }
}

function UserProvider({ children }) {
  const [{ LoggedInUser }, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ LoggedInUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
