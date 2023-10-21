import { createContext, ReactNode, useState } from "react";

type CurrentInfoProp = {
  children: ReactNode;
};

type CurrentInfo = {
  area: string;
  service: string;
  date: string;
};

export type CurrentInfoCreateProp = {
  currentInfo: CurrentInfo;
  setCurrentInfo: (val: CurrentInfo) => void;
};

const InitInfo: CurrentInfo = {
  area: "",
  service: "",
  date: ""
};

export const CurrentInfoContext = createContext<CurrentInfoCreateProp>({
  currentInfo: {
    area: "",
    service: "",
    date: ""
  },
  setCurrentInfo: () => {}
});

export const CurrentInfoProvider = ({ children }: CurrentInfoProp) => {
  const [currentInfo, setCurrentInfo] = useState<CurrentInfo>(InitInfo);
  return (
    <CurrentInfoContext.Provider value={{ currentInfo, setCurrentInfo }}>
      {children}
    </CurrentInfoContext.Provider>
  );
};
