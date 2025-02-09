import { createContext, useContext, useState } from "react";
import {
  createCompositionRequest,
  getCompositionsRequest,
  deleteCompositionRequest,
  getCompositionRequest,
  updateCompositionRequest,
} from "../api/compositions";

const CompositionContext = createContext();

export const useCompositions = () => {
  const context = useContext(CompositionContext);

  if (!context) {
    throw new Error("useCompositions must be used within a CompositionProvider");
  }

  return context;
};

export function CompositionProvider({ children }) {
  const [compositions, setCompositions] = useState([]);

  const getCompositions = async () => {
    try {
      const res = await getCompositionsRequest();
      setCompositions(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createComposition = async (composition) => {
    try {
      console.log("Sending data:", composition);
      const res = await createCompositionRequest(composition);
      console.log("Response data:", res.data);
    } catch (error) {
      console.error("Error creating composition:", error);
    }
  };


  const deleteComposition = async (id) => {
    try {
      const res = await deleteCompositionRequest(id);
      if (res.status === 204) setCompositions(compositions.filter((composition) => composition._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getComposition = async (id) => {
    try {
      const res = await getCompositionRequest(id);
      return res.data; // Retornar las composiciones aquí.
    } catch (error) {
      console.log(error);
      return[]; // Retorna un aray vasío en caso de error.
    }
  };

  const updateComposition = async (id, composition) => {
    try {
      await updateCompositionRequest(id, composition);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CompositionContext.Provider
      value={{
        compositions,
        createComposition,
        getCompositions,
        deleteComposition,
        getComposition,
        updateComposition,
      }}
    >
      {children}
    </CompositionContext.Provider>
  );
}
