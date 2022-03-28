import { createContext } from "react";

export type AppContextProps = {
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
};

export const AppContext = createContext({} as AppContextProps);
