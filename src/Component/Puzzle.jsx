import React from "react";
import Shapes from "./Shapes";

export default function Puzzle() {
  const data = [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ];
  return (
    <main>
      <Shapes data={data} />
    </main>
  );
}
