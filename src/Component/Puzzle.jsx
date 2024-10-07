import React from "react";
import Shapes from "./Shapes";

export default function Puzzle() {
  const BOX_DATA = [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ];
  return (
    <main>
      <Shapes boxes={BOX_DATA} />
    </main>
  );
}
