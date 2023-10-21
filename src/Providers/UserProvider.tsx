import { createContext, ReactNode, useState } from "react";

type UserProviderProp = {
  children: ReactNode;
};

type UserInfo = {
  id: string;
  userNm: string;
};

export type UserInfoContextType = {
  userInfo: UserInfo;
  setUserInfo: (val: UserInfo) => void;
};

const InitInfo: UserInfo = {
  id: "",
  userNm: ""
};

export const UserInfoProviderContext = createContext<UserInfoContextType>({
  userInfo: { id: "", userNm: "" },
  setUserInfo: () => {}
});

export const UserProvider = ({ children }: UserProviderProp) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(InitInfo);

  return (
    <UserInfoProviderContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoProviderContext.Provider>
  );
};
