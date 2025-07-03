import { createContext, useContext, useState, type ReactNode } from "react";

interface DropDownHistoryContextType {
  isOpenHistory: boolean;
  handleTriggerOpenHistory: () => void;
}

interface DropDownHistoryProviderProps {
  children: ReactNode;
}

const DropDownHistoryContext = createContext<DropDownHistoryContextType | null>(
  null
);

const DropDownHistoryProvider = ({
  children,
}: DropDownHistoryProviderProps) => {
  const [isOpenHistory, setIsOpenHistory] = useState(false);

  const handleTriggerOpenHistory = () => {
    setIsOpenHistory((prev) => !prev);
  };

  return (
    <DropDownHistoryContext.Provider
      value={{ isOpenHistory, handleTriggerOpenHistory }}
    >
      {children}
    </DropDownHistoryContext.Provider>
  );
};

export default DropDownHistoryProvider;

export const useDropDownHistoryContext = () => {
  const context = useContext(DropDownHistoryContext);
  if (!context) {
    throw new Error(
      "useDropDownHistoryContext must be used within a DropDownHistoryProvider"
    );
  }
  return context;
};
