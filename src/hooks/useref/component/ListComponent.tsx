import { Button, TextField } from "@mui/material";
import { dataList, DataType } from "./data/ListData";
import { useRef, useState } from "react";
import { text } from "stream/consumers";

export interface IListComponentProps {}

type RefType = HTMLUListElement | null;

export default function ListComponent(props: IListComponentProps) {
  const [index, setIndex] = useState(0);

  function scrollToIndex(index: number) {
    const listNode: RefType = listRef.current;
    const childNode = listNode!.querySelectorAll("ul > div")[index];
    childNode.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center",
    });
  }

  const listRef = useRef<RefType>(null);

  const handleFirstButtonClick = () => {
    scrollToIndex(0);
  };

  const handleScrollToIndexButtonClick = () => {
    scrollToIndex(index);
  };

  const handleSecondButtonClick = () => {
    scrollToIndex(dataList.length - 1);
  };

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-6 m-5">
      <div className="flex justify-between outline-dotted p-3 rounded-lg items-center">
        <Button variant="contained" onClick={handleFirstButtonClick}>
          Go to first
        </Button>

        <TextField
          value={index}
          onChange={(e: any) => {
            setIndex(e.target.value);
          }}
          label="Index"
        />
        <Button variant="contained" onClick={handleScrollToIndexButtonClick}>
          Go to index
        </Button>
        <Button variant="contained" onClick={handleSecondButtonClick}>
          Go to last
        </Button>
      </div>
      <ul
        className=" flex-nowrap overflow-y-hidden whitespace-nowrap flex outline-dotted p-3 scroll-m-0 rounded-lg items-center"
        ref={listRef}
      >
        {dataList.map((data: DataType) => (
          <div
            className=" p-3 bg-green-400 m-2 outline-1 rounded-md"
            key={data.id}
          >
            {data.name}
          </div>
        ))}
      </ul>
    </div>
  );
}
