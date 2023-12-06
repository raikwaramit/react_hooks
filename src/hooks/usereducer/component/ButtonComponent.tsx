import { Button } from "@mui/material";
import { useReducer } from "react";

export interface IButtonComponentProps {}

/**
 * Enum definition for the action type for the component states.
 */
enum Type {
  INCREMENT = "increment",
  TOGGLE = "toggle",
}

/**
 * Type definition of the action type of the action for component.
 */
interface ActionType {
  type: Type;
}

/**
 * Type definition of the total number of the states to manage.
 */
interface State {
  count: number;
  visible: boolean;
}

/**
 * Variable declaration for initial state of the component.
 */
const initialState: State = {
  count: 0,
  visible: false,
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
    case Type.INCREMENT:
      return { count: state.count + 1, visible: state.visible };
    case Type.TOGGLE:
      return { count: state.count, visible: !state.visible };
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

  const handleClick = () => {
    dispatch({ type: Type.INCREMENT });
    dispatch({ type: Type.TOGGLE });
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-flow-row gap-2 ">
        <div className="m-5">
          <Button variant="contained" fullWidth onClick={handleClick}>
            Button
          </Button>
        </div>
        <div className=" m-4 p-4 rounded-md text-lg text-end text-sky-800">
          Counter: {state.count}
        </div>
        {state.visible && (
          <div className=" m-4 p-4 rounded-md border shadow-lg text-lg text-sky-800">
            Hello I am now visible.
          </div>
        )}
      </div>
    </>
  );
}
