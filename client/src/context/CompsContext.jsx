import { createContext, useContext, useState } from "react";
import { createCompRequest, getCompsRequest, deleteCompRequest, getCompRequest } from "../api/comps";

const CompContext = createContext();

export const useComps = () => {
    const context = useContext(CompContext);

    if (!context) {
        throw new Error("useComps must be used within a CompProvider");
    }

    return context;
}

export function CompProvider({ children }) {
    const [comps, setComps] = useState([]);

    const getComps = async () => {
        try {
            const res = await getCompsRequest();
            setComps(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const createComp = async (comp) => {
        const compNum = {
            altura: parseFloat(comp.altura),
            peso: parseFloat(comp.peso),
            grasa: parseFloat(comp.grasa),
            agua: parseFloat(comp.agua),
            viceral: parseFloat(comp.viceral),
            musculo: parseFloat(comp.musculo),
            proteinas: parseFloat(comp.proteinas),
            basal: parseFloat(comp.basal),
            hueso: parseFloat(comp.hueso)
        };

        const res = await createCompRequest(compNum);
        console.log(res);
    }

    const deleteComp = async (id) => {
        try {
            const res = await deleteCompRequest(id);
            if (res.status === 204) setComps(comps.filter(comp => comp._id !== id));
        } catch (error) {
            console.log(res.data);
        }
    }

    const getComp = async (id) => {
        const res = await getCompRequest(id);
    };

    return (
        <CompContext.Provider
            value={{
                comps,
                createComp,
                getComps,
                deleteComp,
                getComp,
            }}>
            {children}
        </CompContext.Provider>
    );
}