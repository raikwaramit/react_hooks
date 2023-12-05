import { Button, CircularProgress, Slider } from "@mui/material";
import { useReducer } from "react";

export interface IButtonComponentProps {}

/**
 * Enum definition for the action type for the component states.
 */
enum Type {
  CHANGE1 = "change1",
  INCREMENT = "increment",
  CHANGE2 = "change1",
}

/**
 * Type definition of the action type of the action for component.
 */
interface ActionType {
  type: Type;
  data: number;
}

/**
 * Type definition of the total number of the states to manage.
 */
interface State {
  slide1: number;
  count: number;
  slide2: number;
}

/**
 * Variable declaration for initial state of the component.
 */
const initialState: State = {
  slide1: 0,
  count: 0,
  slide2: 0,
};

/**
 * Reducer function to manage the states and actions.
 *
 * @param state Total number of the states to manage.
 * @param action Action related to the state we have to manage.
 * @returns
 */
function reducerFunction(state: State, action: ActionType) {
  switch (action.type) {
    case Type.CHANGE1:
      return {
        slide1: action.data,
        count: action.data,
        slide2: action.data,
      };
    case Type.INCREMENT:
      return {
        slide1: state.slide1,
        count: state.count,
        slide2: state.slide2,
      };
    case Type.CHANGE2:
      return {
        slide1: action.data,
        count: action.data,
        slide2: action.data,
      };
  }
}

/**
 * Function ui component for the button component.
 *
 * @param props Button component properies.
 * @returns
 */
export default function ButtonComponent(props: IButtonComponentProps) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handleSlidingEvent = (e: any) => {
    dispatch({ type: Type.CHANGE1, data: e.target.value });
    dispatch({ type: Type.CHANGE2, data: e.target.value });
    dispatch({ type: Type.INCREMENT, data: e.target.value });
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-flow-row gap-2 ">
        <div className="m-5">
          <Slider value={state.slide1} onChange={handleSlidingEvent} />
        </div>
        <div className="grid grid-cols-2 self-center text-sky-800 grid-flow-row gap-2 text-lg">
          <div className="mx-2 text-end">Circular progress</div>
          <CircularProgress value={state.count} variant="determinate" />
        </div>
        <div className="m-5">
          <Slider value={state.slide2} onChange={handleSlidingEvent} />
        </div>
      </div>
    </>
  );
}
