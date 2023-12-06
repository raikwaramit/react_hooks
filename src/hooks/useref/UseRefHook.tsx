import InfiteScrollView from "./component/InfiniteScrollView";
import InfiteScrollViewCorrected from "./component/InfiniteScrollViewCorrected";
import ListComponent from "./component/ListComponent";

export interface ReactUseStateHooksProps {}

export default function ReactUseRefHooks(props: ReactUseStateHooksProps) {
  return (
    <div className="flex-row justify-normal bg-cover m-5 outline-sky-600">
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Row1() {
  return (
    <>
      <div className="m-4 py-2 text-lg font-mono">
        1. List scroll component with useRef hook
      </div>
      <ListComponent />
    </>
  );
}

function Row2() {
  return (
    <>
      <div className="m-4 py-2 text-lg font-mono">
        2. Infinite List implementation using the useRef hook.
      </div>
      <InfiteScrollView />
    </>
  );
}

function Row3() {
  return (
    <>
      <div className="m-4 py-2 text-lg font-mono">
        3. Infinite list implementation using the useRef and UseReducer to
        correct the loading.
      </div>
      <InfiteScrollViewCorrected />
    </>
  );
}
