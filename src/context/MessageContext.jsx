import { createContext, useContext, useReducer } from "react";

const MessageContext = createContext();

const initialState = {
  ActiveMessage: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MESSAGE":
      return {
        ...state,
        ActiveMessage: action.payload,
      };
    default: {
      throw new Error("Invalid action type");
    }
  }
}

function MessageProvider({ children }) {
  const [{ ActiveMessage }, dispatch] = useReducer(reducer, initialState);

  return (
    <MessageContext.Provider value={{ ActiveMessage, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
}

function useMessage() {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
}

export { MessageProvider, useMessage };
