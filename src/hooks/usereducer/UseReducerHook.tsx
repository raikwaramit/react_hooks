import ButtonComponent from "./component/ButtonComponent";
import SliderComponent from "./component/SliderComponent";

export interface ReactUseStateHooksProps {}

export default function ReactUseReducerHooks(props: ReactUseStateHooksProps) {
  return (
    <div className="flex-row justify-normal bg-cover m-5 outline-sky-600">
      <Row1 />
      <Row2 />
    </div>
  );
}

function Row1() {
  return (
    <>
      <div className="m-4 py-2 text-lg font-mono">
        1. Button component with useReducer hook
      </div>
      <ButtonComponent />
    </>
  );
}

function Row2() {
  return (
    <>
      <div className="m-4 py-2 text-lg font-mono">
        2. Slider component with useReducer hook for three component states
      </div>
      <SliderComponent />
    </>
  );
}
