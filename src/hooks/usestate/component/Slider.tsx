import { Slider } from "@mui/material";
import * as React from "react";

export interface ISliderComponentProps {}

export default function SliderComponent(props: ISliderComponentProps) {
  const [sliderValue, setSliderValue] = React.useState(0);
  const handleSlidingEvent = (e: any) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-2 ">
      <div className="m-5">
        <Slider value={sliderValue} onChange={handleSlidingEvent} />
      </div>
      <div className=" m-4 p-4 rounded-md text-lg text-end text-sky-800">
        Percent display:
      </div>
      <div className=" m-4 p-4 rounded-md border shadow-lg text-lg text-sky-800">
        {sliderValue}
      </div>
    </div>
  );
}
