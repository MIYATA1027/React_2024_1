import { createContext, ReactNode, useState } from "react";

type HeaderNameProp = {
  children: ReactNode;
};

export type HeaderNameCreateProp = {
  headerName: string;
  setHeaderName: (name: string) => void;
};

export const HeaderNameContext = createContext<HeaderNameCreateProp>({
  headerName: "",
  setHeaderName: () => {}
});

export const HeaderNameProvider = ({ children }: HeaderNameProp) => {
  const [headerName, setHeaderName] = useState("");

  return (
    <HeaderNameContext.Provider value={{ headerName, setHeaderName }}>
      {children}
    </HeaderNameContext.Provider>
  );
};
