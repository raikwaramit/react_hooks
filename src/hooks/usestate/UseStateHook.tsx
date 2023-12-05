import { Button, TextField } from "@mui/material";
import { useState } from "react";
import TextFieldComponent from "./component/TextField";
import RadioGroupComponent from "./component/RadioGroup";
import SliderComponent from "./component/Slider";

export interface ReactUseStateHooksProps {}

export default function ReactUseStateHooks(props: ReactUseStateHooksProps) {
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
        1. TextField component with useState hook
      </div>
      <TextFieldComponent />
    </>
  );
}

function Row2() {
  return (
    <>
      <div className="m-4 py-2 text-lg font-mono">
        2. Radio group component with useState hook
      </div>
      <RadioGroupComponent />
    </>
  );
}

function Row3() {
  return (
    <>
      <div className="m-4 py-2 text-lg font-mono">
        3. Slider component with useState hook
      </div>
      <SliderComponent />
    </>
  );
}
