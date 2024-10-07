import React, { useMemo, useRef, useState } from "react";

export default function Shapes({ boxes }) {
  const [selected, setSelected] = useState(new Set());
  const [unloading, setUnloading] = useState(false);
  const timerRef = useRef();

  const countOfVisibleBoxes = useMemo(() => {
    return boxes.reduce((acc, row) => {
      row.forEach((column) => {
        if (column === 1) {
          acc += 1;
        }
      });
      return acc;
    }, 0);
  }, [boxes]);

  const handleClick = (e) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");

    if (
      index === null ||
      status === "hideden" ||
      selected.has(index) ||
      unloading
    ) {
      return;
    }

    setSelected((prev) => {
      return new Set(prev.add(index));
    });
  };
  return <div>Shapes</div>;
}
