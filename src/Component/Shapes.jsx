import React, { useEffect, useMemo, useState } from "react";

// Create a shape based on the 2D data
// empty box where value = 1
// When value = 0 then render nothing
// We can select the Bg and change the bgColur to green
// deselect in the order of selection
// Disable any interaction
// DS array ? Object ? Something ?

export default function Shapes({ data }) {
  const [selected, setSelected] = useState(new Set());
  // const [unloadig, setUnloading]
  console.log(selected);

  const boxes = useMemo(() => data.flat(Infinity), [data]);
  console.log(boxes);

  const countOfVisibleBoxes = useMemo(() => {
    return boxes.reduce((acc, box) => {
      if (box === 1) {
        acc += 1;
      }
      return acc;
    }, 0);
  }, [boxes]);

  const unload = () => {
    const keys = Array.from(selected.keys());
    const removeNextKey = () => {
      if (keys.length) {
        const currentKey = keys.shift();

        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });
        setTimeout(removeNextKey, 500);
      }
    };
    removeNextKey();
  };

  useEffect(() => {
    if (selected.size >= countOfVisibleBoxes) {
      unload();
    }
  }, [selected]);

  const handleClick = (e) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");

    if (index === null || status === "hidden") {
      return;
    }

    // setSelected((prev) => {
    //   return new Set(prev.add(index));
    // });
    setSelected((prevSelected) => {
      const newSelected = new Set(prevSelected); // Create a new Set
      if (newSelected.has(index)) {
        newSelected.delete(index); // Deselect if already selected
      } else {
        newSelected.add(index); // Select if not already selected
      }
      return newSelected;
    });
  };
  return (
    <div className="boxes" onClick={handleClick}>
      {boxes.map((box, index) => {
        const status = box === 1 ? "visible" : "hidden";
        const isSelected = selected.has(index.toString());
        console.log(isSelected);

        return (
          <div
            key={`${box}-${index}`}
            // className={`box ${status} ${isSelected && "selected"}`}
            className={`box ${status} ${isSelected ? "selected" : ""}`} // Conditionally apply the selected class
          />
        );
      })}
    </div>
  );
}
