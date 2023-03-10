import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "./useReducer";

function fetchReducer(state, action) {
  switch (action.type) {
    case "fetchRequest":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "fetchSuccess":
    case "fetchError":
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
        error: action.error,
      };
    default:
      return state;
  }
}

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });
  useEffect(() => {
    const fetchingData = async () => {
      dispatch({
        type: "fetchRequest",
        isLoading: true,
      });
      try {
        const response = await axios.get(url);
        console.log(response.data);
        if (response.status === 200) {
            console.log('vao day');
          dispatch({
            type: "fetchSuccess",
            isLoading: false,
            error: null,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: "fetchError",
          isLoading: false,
          error: error,
          data: [],
        });
      }
    };
    fetchingData();
  }, [url]);
  return {
    ...state
  };
};
