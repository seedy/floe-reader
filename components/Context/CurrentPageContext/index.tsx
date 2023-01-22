import { ComponentProps, createContext, useContext } from "react";

// CONTEXT
const CurrentPageContext = createContext(false);

// HOOKS
export const useCurrentPageContext = () => useContext(CurrentPageContext);

// COMPONENTS
interface CurrentPageContextProviderProps
  extends ComponentProps<typeof CurrentPageContext.Provider> {}

const CurrentPageContextProvider = ({
  children,
  value,
}: CurrentPageContextProviderProps) => (
  <CurrentPageContext.Provider value={value}>
    {children}
  </CurrentPageContext.Provider>
);

export default CurrentPageContextProvider;
