import { CircularProgress, Icon, SvgIcon, TextField } from "@mui/material";
import { dataList, DataType } from "./data/ListData";
import { useEffect, useReducer, useRef, useState } from "react";
import Success from "../../../assets/success.png";
export interface InfiteScrollViewProps {}

type RefType = HTMLDivElement | null;

enum Type {
  LOADING = "loading",
  DATA = "data",
}

/**
 * Type definition of the action type of the action for component.
 */
interface ActionType {
  type: Type;
  lastIndex: number;
}

interface State {
  data: DataType[];
  loading: boolean;
}

/**
 * Reducer function to manage the states and actions.
 *
 * @param state Total number of the states to manage.
 * @param action Action related to the state we have to manage.
 * @returns
 */
function reducerFunction(state: State, action: ActionType) {
  console.log(action.type);
  switch (action.type) {
    case Type.LOADING:
      console.log(state.loading);
      return { data: state.data, loading: !state.loading };
    case Type.DATA:
      return {
        data: [...dataList.slice(0, action.lastIndex + 15)],
        loading: state.loading,
      };
  }
}

const initialState: State = { data: [], loading: false };

// Infinite scroll without useReducer it causes issue with loading spinner visibility.
export default function InfiteScrollView(props: InfiteScrollViewProps) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const lastIndexRef = useRef<number>(0);
  const lastListItemRef = useRef<RefType>(null);

  // Data fetch mock code
  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      if (enteries[0].isIntersecting) {
        dispatch({ type: Type.LOADING, lastIndex: lastIndexRef.current });
        //Code to mock the network request.
        setTimeout(() => {
          dispatch({ type: Type.DATA, lastIndex: lastIndexRef.current });
          dispatch({ type: Type.LOADING, lastIndex: lastIndexRef.current });
          lastIndexRef.current = lastIndexRef.current + 15;
          if (lastIndexRef.current >= dataList.length - 1) {
          }
        }, 3000);
      }
    });
    if (lastListItemRef.current) {
      observer.observe(lastListItemRef.current);
    }

    return () => {
      if (lastListItemRef.current) observer.unobserve(lastListItemRef.current);
    };
  }, [lastListItemRef]);

  return (
    <div className="grid grid-cols-1 grid-flow-row gap-6 m-5">
      <ul className=" flex-nowrap overflow-y-hidden whitespace-nowrap flex outline-dotted p-3 scroll-m-0 rounded-lg items-center">
        {state.data.map((data: DataType) => (
          <div
            className=" p-3 bg-green-400 m-2 outline-1 rounded-md"
            key={data.id}
          >
            {data.name}
          </div>
        ))}
        <div className="h-16" ref={lastListItemRef}></div>
      </ul>
      <div className=" rounded-xl shadow-md w-fit p-4 items-center outline">
        {state.loading ? (
          <CircularProgress />
        ) : (
          <img className="h-10" src={Success} />
        )}
      </div>
    </div>
  );
}
