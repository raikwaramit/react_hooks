import { TextField } from "@mui/material";
import { useState } from "react";

export interface TextFieldComponentProps {}

/**
 * Ui component showcasing the useState hooks usage.
 *
 * @param props TextField props
 * @returns Ui component
 */
export default function TextFieldComponent(props: TextFieldComponentProps) {
  const [textFieldValue, setTextFieldValue] = useState("");
  const handleEdit = (e: any) => {
    setTextFieldValue(e.target.value);
  };

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-2 ">
      <div className="m-5">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={textFieldValue}
          onChange={handleEdit}
        />
      </div>
      <div className=" m-4 p-4 rounded-md text-lg text-end text-sky-800">
        Text display:
      </div>
      <div className=" m-4 p-4 rounded-md border shadow-lg text-lg text-sky-800">
        {textFieldValue}
      </div>
    </div>
  );
}
