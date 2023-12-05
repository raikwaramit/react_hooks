import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import * as React from "react";

export interface RadioGroupComponentProps {}

export default function RadioGroupComponent(props: RadioGroupComponentProps) {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-2 ">
      <Radiogroup />
    </div>
  );
}

function Radiogroup() {
  const [selection, setSelection] = React.useState("female");
  const handler = (e: any) => {
    setSelection(e.target.value);
  };

  return (
    <>
      <div className="m-5">
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup value={selection} onChange={handler} row>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className=" m-4 p-4 rounded-md text-lg text-end text-sky-800">
        Selection display:
      </div>
      <div className=" m-4 p-4 rounded-md border shadow-lg text-lg text-sky-800">
        {selection}
      </div>
    </>
  );
}
