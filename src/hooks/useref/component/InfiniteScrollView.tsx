import { Button, CircularProgress, TextField } from "@mui/material";
import { dataList, DataType } from "./data/ListData";
import { Ref, useCallback, useEffect, useRef, useState } from "react";

export interface InfiteScrollViewProps {}

type RefType = HTMLDivElement | null;

// Infinite scroll without useReducer it causes issue with loading spinner visibility.
export default function InfiteScrollViewCorrected(
  props: InfiteScrollViewProps
) {
  const [dataListCurrent, setDataListCurrent] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const lastIndexRef = useRef<number>(0);
  const lastListItemRef = useRef<RefType>(null);

  // Data fetch mock code
  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      if (enteries[0].isIntersecting && hasMore) {
        setLoading(true);
        //Code to mock the network request.
        setTimeout(() => {
          setDataListCurrent([...dataList.slice(0, lastIndexRef.current + 15)]);
          lastIndexRef.current = lastIndexRef.current + 15;
          if (lastIndexRef.current >= dataList.length - 1) {
            setHasMore(false);
          }
          setLoading(false);
        }, 2000);
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
    <div className="grid grid-cols-1s grid-flow-row gap-6 m-5">
      <ul className=" flex-nowrap overflow-y-hidden whitespace-nowrap flex outline-dotted p-3 scroll-m-0 rounded-lg items-center">
        {dataListCurrent.map((data: DataType) => (
          <div
            className=" p-3 bg-green-400 m-2 outline-1 rounded-md items-center"
            key={data.id}
          >
            {data.name}
          </div>
        ))}
        {loading && (
          <div className="h-16 w-16">
            <CircularProgress />
          </div>
        )}
        <div className="h-16" ref={lastListItemRef}></div>
      </ul>
    </div>
  );
}
