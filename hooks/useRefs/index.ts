import { useCallback, useState } from "react";

type onRefType = (node: HTMLElement | null) => void;

const useRefs = (): [HTMLElement[], onRefType] => {
  const [refs, setRefs] = useState<HTMLElement[]>([]);

  const onRef = useCallback<onRefType>((node: HTMLElement | null) => {
    if (node !== null) {
      setRefs(current => [...current, node]);
    }
  }, [setRefs]);

  return [refs, onRef];
};

export default useRefs;
