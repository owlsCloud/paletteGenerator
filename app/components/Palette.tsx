"use client";
import React, { useEffect, useState } from "react";
import randomHexCode from "../util";
import PaletteSection from "./PaleteSection";
function Palette({ palette }: any): JSX.Element {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");

  useEffect(() => {
    setColor1(randomHexCode());
    setColor2(randomHexCode());
    setColor3(randomHexCode());
    setColor4(randomHexCode());
    setColor5(randomHexCode());
  }, []);
  return (
    <>
      <div className="w-full flex">
        <PaletteSection color={color1} />
        <PaletteSection color={color2} />
        <PaletteSection color={color3} />
        <PaletteSection color={color4} />
        <PaletteSection color={color5} />
      </div>
    </>
  );
}

export default Palette;
